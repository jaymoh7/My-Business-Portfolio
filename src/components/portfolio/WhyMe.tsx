import React from 'react';
import { Zap, DollarSign, Wrench, Target, Lightbulb, MessageSquare } from 'lucide-react';

const items = [
  { icon: Zap, title: 'Fast Turnaround', desc: 'Projects delivered in days, not weeks.' },
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Transparent rates built for local businesses.' },
  { icon: Wrench, title: 'Tech + Creative', desc: 'Engineering precision with creative design.' },
  { icon: Target, title: 'Business-Focused', desc: 'Solutions that drive real customer growth.' },
  { icon: Lightbulb, title: 'Modern Strategies', desc: 'Up-to-date with the latest digital tactics.' },
  { icon: MessageSquare, title: 'Reliable Communication', desc: 'Clear updates from start to finish.' },
];

const WhyMe: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            Why Work With Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Built for Speed, Trust &amp; Results
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((i) => (
            <div
              key={i.title}
              className="group flex items-start gap-4 bg-slate-900/60 border border-blue-900/40 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <i.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">{i.title}</h3>
                <p className="text-slate-400 text-sm">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
