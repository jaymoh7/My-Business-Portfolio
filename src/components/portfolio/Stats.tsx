import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, Globe2, Palette } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: 25, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 18, suffix: '+', label: 'Businesses Helped' },
  { icon: Globe2, value: 12, suffix: '+', label: 'Websites Created' },
  { icon: Palette, value: 60, suffix: '+', label: 'Designs Delivered' },
];

const Counter: React.FC<{ end: number; suffix: string }> = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1500;
            const start = Date.now();
            const tick = () => {
              const t = Math.min((Date.now() - start) / dur, 1);
              setCount(Math.floor(t * end));
              if (t < 1) requestAnimationFrame(tick);
            };
            tick();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-950 via-slate-950 to-blue-950 border-y border-blue-500/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center bg-slate-900/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-slate-400 text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
