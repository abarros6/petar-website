import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, message } = await req.json();

  const { error } = await resend.emails.send({
    from: 'PAVCON <noreply@pavcon.ca>',
    to: 'Info@pavcon.ca',
    subject: `New quote request from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
