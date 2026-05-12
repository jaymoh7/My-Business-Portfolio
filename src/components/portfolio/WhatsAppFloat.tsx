import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWaLink } from './constants';

const WhatsAppFloat: React.FC = () => {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(true);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    const t = setTimeout(() => setTip(false), 6000);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {tip && show && (
        <div className="absolute bottom-full right-0 mb-3 bg-slate-900 border border-blue-500/40 rounded-2xl px-4 py-3 shadow-2xl w-64 animate-[fadeIn_0.4s_ease-out]">
          <button
            onClick={() => setTip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="text-white text-sm font-semibold">Hi! Need help fast?</p>
          <p className="text-slate-300 text-xs mt-1">Chat with me on WhatsApp — I usually reply in minutes.</p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-slate-900 border-r border-b border-blue-500/40 transform rotate-45"></div>
        </div>
      )}

      <a
        href={buildWaLink("Hi James, I'd like to discuss a project")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
        <MessageCircle className="w-7 h-7 text-white relative z-10 fill-white" />
      </a>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default WhatsAppFloat;
