import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle, FileSearch } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const WHATSAPP = 'https://wa.me/254712345678?text=Hi%20James%2C%20I%27d%20like%20to%20discuss%20a%20project';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-lg border-b border-blue-900/40 shadow-lg shadow-blue-950/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => handleClick('#home')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
              JN
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">James Njoroge</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/audit"
              className="inline-flex items-center gap-2 bg-slate-900/60 hover:bg-slate-800 backdrop-blur-sm border border-blue-500/30 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-105"
            >
              <FileSearch className="w-4 h-4" />
              Free Audit
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>


          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-blue-900/40 space-y-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className="block w-full text-left px-4 py-3 text-slate-300 hover:bg-blue-950/40 hover:text-blue-400 rounded-lg transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Link
              to="/audit"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 mx-4 mt-3 bg-slate-800 border border-blue-500/30 text-white px-5 py-3 rounded-lg font-semibold"
            >
              <FileSearch className="w-4 h-4" />
              Free Audit
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mx-4 mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 rounded-lg font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              Message on WhatsApp
            </a>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
