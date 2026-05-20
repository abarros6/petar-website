import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiter: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const body = await req.json();
  const { honeypot, firstName, lastName, email, phone, message } = body;

  // Honeypot: bots fill this hidden field, humans don't
  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  // Server-side validation
  const f = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
  const fn = f(firstName);
  const ln = f(lastName);
  const em = f(email);
  const ph = f(phone);
  const msg = f(message);

  if (!fn || fn.length > 100) return NextResponse.json({ error: 'Invalid first name' }, { status: 400 });
  if (!ln || ln.length > 100) return NextResponse.json({ error: 'Invalid last name' }, { status: 400 });
  if (!em || !EMAIL_RE.test(em) || em.length > 254) return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  if (ph.length > 30) return NextResponse.json({ error: 'Invalid phone' }, { status: 400 });
  if (!msg || msg.length > 2000) return NextResponse.json({ error: 'Invalid message' }, { status: 400 });

  const { error } = await resend.emails.send({
    from: 'PAVCON <noreply@pavcon.ca>',
    to: 'Info@pavcon.ca',
    subject: `New quote request from ${fn} ${ln}`,
    text: `Name: ${fn} ${ln}\nEmail: ${em}\nPhone: ${ph}\n\n${msg}`,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
