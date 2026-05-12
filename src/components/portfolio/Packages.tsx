import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { buildWaLink } from './constants';

const packages = [
  {
    icon: Zap,
    name: 'Starter Package',
    price: 'KSh 3,500',
    tagline: 'Perfect for solo entrepreneurs',
    features: [
      'Google Business Profile setup',
      'Basic optimization',
      '5 promotional graphics',
      'WhatsApp integration',
      '3-day delivery',
    ],
    popular: false,
    color: 'from-blue-600 to-blue-500',
  },
  {
    icon: Star,
    name: 'Growth Package',
    price: 'KSh 8,500',
    tagline: 'For growing local businesses',
    features: [
      'Full Google Business optimization',
      '10 marketing graphics',
      'One-page business website',
      'Contact & WhatsApp forms',
      'Mobile-first design',
      '5-day delivery',
    ],
    popular: true,
    color: 'from-blue-600 via-cyan-500 to-emerald-500',
  },
  {
    icon: Crown,
    name: 'Complete Business',
    price: 'KSh 18,000',
    tagline: 'Full digital presence solution',
    features: [
      'Premium Google optimization',
      'Multi-page business website',
      '20+ branded graphics',
      'Logo & brand identity',
      'SEO setup',
      'Social media setup',
      '30-day support',
    ],
    popular: false,
    color: 'from-purple-600 to-pink-500',
  },
];

const Packages: React.FC = () => {
  return (
    <section id="packages" className="relative py-20 md:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_60%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Business Visibility Packages
          </h2>
          <p className="text-slate-300 text-lg">
            Choose a package that fits your goals — transparent pricing, fast delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-7 border transition-all hover:-translate-y-2 ${
                p.popular
                  ? 'bg-gradient-to-br from-blue-950/80 to-slate-900/80 border-blue-500/60 shadow-2xl shadow-blue-500/30 scale-[1.02]'
                  : 'bg-slate-900/60 border-blue-900/40 hover:border-blue-500/40'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 shadow-lg`}>
                <p.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-white font-bold text-2xl mb-1">{p.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{p.tagline}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{p.price}</span>
                <span className="text-slate-400 text-sm ml-2">starting</span>
              </div>

              <div className="space-y-3 mb-7">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href={buildWaLink(`Hi James, I'm interested in the ${p.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full px-5 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] ${
                  p.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-blue-500/30'
                }`}
              >
                Choose {p.name.split(' ')[0]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
