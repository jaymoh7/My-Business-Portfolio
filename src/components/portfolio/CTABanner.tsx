import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, FileSearch } from 'lucide-react';
import { buildWaLink } from './constants';


const CTABanner: React.FC = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Ready to Improve Your Business Visibility?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Let's get more customers finding your business online — fast, professional, affordable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buildWaLink("Hi James, I'd like to discuss my business visibility.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-7 py-4 rounded-xl font-bold shadow-2xl transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Message on WhatsApp
          </a>
          <Link
            to="/audit"
            className="inline-flex items-center justify-center gap-2 bg-blue-900/40 hover:bg-blue-900/60 backdrop-blur-sm border-2 border-white/30 text-white px-7 py-4 rounded-xl font-bold transition-all hover:scale-105"
          >
            <FileSearch className="w-5 h-5" />
            Request a Free Audit
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CTABanner;
