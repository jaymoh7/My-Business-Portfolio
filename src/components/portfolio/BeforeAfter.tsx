import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const items = [
  {
    title: 'Business Profile',
    before: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132607058_3c810262.png',
    after: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132385196_305ba9a6.jpg',
    metric: '+150% visibility',
    desc: 'Weak listing transformed into a fully optimized profile.',
  },
  {
    title: 'Marketing Flyer',
    before: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132559067_e097c408.png',
    after: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132416003_4a4709a7.png',
    metric: '3x engagement',
    desc: 'Cluttered flyer redesigned for clarity and impact.',
  },
  {
    title: 'Business Website',
    before: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132582950_c6e1c412.png',
    after: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132443726_81485c1e.jpg',
    metric: '5x conversions',
    desc: 'Outdated site rebuilt as a modern, mobile-first experience.',
  },
];

const BeforeAfter: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Real Before &amp; After Results
          </h2>
          <p className="text-slate-300 text-lg">See the impact of professional digital optimization.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-slate-900/60 border border-blue-900/40 rounded-2xl p-5 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-white font-bold text-xl mb-4">{it.title}</h3>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden border border-red-500/30">
                    <img src={it.before} alt="Before" className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                  <span className="absolute top-2 left-2 text-[10px] font-bold bg-red-500/90 text-white px-2 py-0.5 rounded">
                    BEFORE
                  </span>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden border border-green-500/30">
                    <img src={it.after} alt="After" className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute top-2 left-2 text-[10px] font-bold bg-green-500/90 text-white px-2 py-0.5 rounded">
                    AFTER
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px flex-1 bg-blue-500/30"></div>
                <ArrowRight className="w-4 h-4 text-blue-400" />
                <div className="h-px flex-1 bg-blue-500/30"></div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-bold text-sm">{it.metric}</span>
              </div>
              <p className="text-slate-400 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
