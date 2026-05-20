'use client';

import { useState } from 'react';
import SectionHeader from "@/components/ui/SectionHeader";
import FormField from "@/components/ui/FormField";

const emptyForm = { firstName: '', lastName: '', email: '', phone: '', message: '' };

export default function ContactCTA() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('success');
      setForm(emptyForm);
    } else {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: CTA text */}
          <div>
            <SectionHeader
              label="Get In Touch"
              heading={<>Contact us /<br />reimagine your home</>}
              headingClassName="mb-5"
            />
            <p className="text-[#6b7280] mb-8 leading-relaxed text-sm lg:text-base">
              Ready to start your renovation journey? Reach out today for a
              free consultation and quote. Our team is here to help bring your
              vision to life.
            </p>
            <a
              href="tel:4163883989"
              className="inline-flex items-center gap-3 text-[#153243] font-semibold hover:text-[#b39f79] transition-colors"
            >
              <span className="w-10 h-10 bg-[#b39f79] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              416 388 3989
            </a>
          </div>

          {/* Right: Form */}
          <div className="bg-[#153243] p-6 sm:p-8 lg:p-10">
            {status === 'success' ? (
              <div className="text-white text-center py-12">
                <p className="text-lg font-semibold mb-2">Message sent!</p>
                <p className="text-white/60 text-sm">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="First Name" name="firstName" placeholder="John" value={form.firstName} onChange={handleChange} required />
                  <FormField label="Last Name" name="lastName" placeholder="Doe" value={form.lastName} onChange={handleChange} required />
                </div>
                <FormField label="Email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                <FormField label="Phone" name="phone" type="tel" placeholder="(416) 000-0000" value={form.phone} onChange={handleChange} />
                <FormField label="Message" name="message" placeholder="Tell us about your project..." rows={4} value={form.message} onChange={handleChange} required />

                {status === 'error' && (
                  <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#b39f79] hover:bg-[#1a6c7a] text-white font-semibold py-3.5 text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending...' : 'Get a Free Quote'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
