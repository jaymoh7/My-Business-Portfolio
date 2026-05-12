import React, { useState } from 'react';
import { MessageCircle, Mail, Linkedin, Facebook, Instagram, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { buildWaLink, EMAIL, LOCATION } from './constants';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const CONTACT_API_ENDPOINT = `${API_URL}/api/forms/contact`;

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    try {
      const response = await fetch(CONTACT_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  };

  const contacts = [
    { icon: MessageCircle, label: 'WhatsApp', value: '+254 712 345 678', href: buildWaLink('Hi James!') },
    { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: 'Location', value: LOCATION, href: '#' },
  ];

  const socials = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Let's Grow Your Business Together
          </h2>
          <p className="text-slate-300 text-lg">Quick response promised — usually within a few hours.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-slate-900/60 border border-blue-900/40 rounded-2xl p-5 hover:border-blue-500/50 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs">{c.label}</div>
                  <div className="text-white font-semibold">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="bg-slate-900/60 border border-blue-900/40 rounded-2xl p-5">
              <div className="text-slate-400 text-xs mb-3">Follow Me</div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-blue-500 border border-blue-500/30 flex items-center justify-center transition-colors"
                  >
                    <s.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-3 bg-slate-900/60 border border-blue-900/40 rounded-2xl p-6 md:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Name *</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handle}
                  className="w-full bg-slate-950 border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handle}
                  className="w-full bg-slate-950 border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="+254..."
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Email *</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handle}
                className="w-full bg-slate-950 border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Message *</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handle}
                rows={5}
                className="w-full bg-slate-950 border border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your business and what you need..."
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-xl p-3 text-green-400 text-sm">
                <CheckCircle2 className="w-5 h-5" />
                Message sent! I'll respond within a few hours.
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm">
                Something went wrong. Please try WhatsApp.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.01] disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : <>Send Message <Send className="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
