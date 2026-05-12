import React from 'react';
import { MessageCircle, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { buildWaLink, EMAIL, LOCATION } from './constants';

const Footer: React.FC = () => {
  const scroll = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative bg-slate-950 border-t border-blue-900/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white">
                JN
              </div>
              <span className="text-white font-semibold text-lg">James Njoroge</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Helping local businesses improve their online visibility and digital presence with practical, modern solutions.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-500 border border-blue-500/30 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-500 border border-blue-500/30 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-500 border border-blue-500/30 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((l) => (
                <li key={l}>
                  <button
                    onClick={() => scroll(`#${l.toLowerCase()}`)}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Google Business Optimization</li>
              <li>Graphic Design</li>
              <li>Business Websites</li>
              <li>Visibility Packages</li>
              <li>AI Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-blue-400 transition-colors break-all">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                {LOCATION}
              </li>
            </ul>
            <a
              href={buildWaLink('Hi James!')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-blue-900/40 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} James Njoroge. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">Built with care in Nairobi, Kenya 🇰🇪</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
