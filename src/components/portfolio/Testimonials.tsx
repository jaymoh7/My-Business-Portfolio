import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Wanjiru',
    role: 'Owner, Bella Salon',
    text: 'James optimized my Google Business Profile and within 2 weeks I started getting more calls and walk-ins. Highly professional and fast!',
  },
  {
    name: 'David Kamau',
    role: 'Manager, Highlands Pharmacy',
    text: 'Our new website looks amazing and customers can now reach us instantly via WhatsApp. The whole process was smooth and affordable.',
  },
  {
    name: 'Grace Achieng',
    role: 'Founder, Fresh Bites Restaurant',
    text: 'The promotional graphics James designed transformed our social media. We saw a clear bump in customers within days.',
  },
  {
    name: 'Peter Mwangi',
    role: 'Owner, Mwangi Agrovet',
    text: 'James understood our needs as a local business. The Google Maps optimization brought new customers we never had before.',
  },
];

const Testimonials: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[idx];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            What Clients Say
          </h2>
        </div>

        <div className="relative bg-slate-900/60 border border-blue-900/40 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-blue-500/20" />

          <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="text-white text-xl md:text-2xl leading-relaxed mb-8 font-light">
            "{t.text}"
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="text-white font-semibold">{t.name}</div>
                <div className="text-slate-400 text-sm">{t.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500 border border-blue-500/30 flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <span className="text-slate-400 text-sm px-2">
                {idx + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500 border border-blue-500/30 flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
