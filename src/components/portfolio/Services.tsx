import React from 'react';
import { MapPin, Palette, Globe, Check, ArrowRight } from 'lucide-react';
import { buildWaLink } from './constants';

const services = [
  {
    icon: MapPin,
    title: 'Google Business Profile Optimization',
    tagline: 'Get found by local customers searching on Google.',
    features: [
      'Profile setup & optimization',
      'Categories & business descriptions',
      'WhatsApp integration',
      'Photo & services optimization',
      'Google Maps visibility boost',
    ],
    benefits: ['Increased visibility', 'Improved trust', 'Easier customer contact'],
    msg: 'Hi James, I want to optimize my Google Business Profile.',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    tagline: 'Promotional graphics that grab attention and drive sales.',
    features: [
      'Business flyers & posters',
      'Social media graphics',
      'WhatsApp promo designs',
      'Restaurant menus',
      'Event & marketing posters',
    ],
    benefits: ['Stronger branding', 'Better promotions', 'Customer engagement'],
    msg: 'Hi James, I need professional graphic design.',
    color: 'from-purple-600 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Business Websites',
    tagline: 'Modern, responsive websites that convert visitors into customers.',
    features: [
      'Responsive websites',
      'One-page & landing pages',
      'WhatsApp & contact forms',
      'Mobile-first optimization',
      'Fast loading speed',
    ],
    benefits: ['Professional presence', 'Customer accessibility', 'Business credibility'],
    msg: 'Hi James, I want a business website.',
    color: 'from-cyan-500 to-emerald-500',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Practical Solutions That Grow Your Business
          </h2>
          <p className="text-slate-300 text-lg">
            Affordable, fast, and results-driven services tailored for local businesses and SMEs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-slate-900/60 backdrop-blur-sm border border-blue-900/40 rounded-2xl p-7 hover:border-blue-500/60 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm mb-5">{s.tagline}</p>

              <div className="space-y-2.5 mb-5 flex-1">
                {s.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-blue-900/40 pt-4 mb-5">
                <div className="text-xs text-blue-300 font-semibold uppercase tracking-wider mb-2">Benefits</div>
                <div className="flex flex-wrap gap-2">
                  {s.benefits.map((b) => (
                    <span key={b} className="text-xs text-slate-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md">
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={buildWaLink(s.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
