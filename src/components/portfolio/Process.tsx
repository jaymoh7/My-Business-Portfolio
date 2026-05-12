import React from 'react';
import { MessageSquare, Lightbulb, Code2, Rocket } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: 'Consultation', desc: 'Free chat to understand your business goals and challenges.' },
  { icon: Lightbulb, title: 'Strategy & Planning', desc: 'Tailored plan with clear deliverables and timelines.' },
  { icon: Code2, title: 'Design & Development', desc: 'Crafting your solution with attention to every detail.' },
  { icon: Rocket, title: 'Delivery & Support', desc: 'Launch + ongoing support to ensure long-term success.' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Simple 4-Step Process
          </h2>
          <p className="text-slate-300 text-lg">From idea to launch — clear, fast, and professional.</p>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="relative bg-slate-900/60 border border-blue-900/40 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:-translate-y-1 text-center"
            >
              <div className="relative inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                <s.icon className="w-7 h-7 text-white" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-slate-950 border-2 border-blue-400 text-blue-400 text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
