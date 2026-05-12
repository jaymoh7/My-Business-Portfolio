import React from 'react';
import { Code2, MapPin, Palette, Brain, Layout, TrendingUp } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'Web Development', desc: 'Responsive, modern websites built with the latest technologies.' },
  { icon: MapPin, title: 'Google Business Optimization', desc: 'Boost local visibility and attract nearby customers.' },
  { icon: Palette, title: 'Graphic Design', desc: 'Eye-catching flyers, posters and social media graphics.' },
  { icon: Brain, title: 'AI Solutions', desc: 'Practical AI applications for real business problems.' },
  { icon: Layout, title: 'UI/UX Design', desc: 'Clean, intuitive interfaces that convert visitors.' },
  { icon: TrendingUp, title: 'Visibility Strategy', desc: 'Data-driven approaches to grow your digital presence.' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Bridging Technology &amp; Business Growth
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            I'm <span className="text-blue-400 font-semibold">James Njoroge</span> — a Computer Science graduate
            and digital solutions developer based in Nairobi. I help small businesses, SMEs and local entrepreneurs
            solve real visibility problems by combining web development, AI, and creative design with practical
            business strategy.
          </p>
          <p className="text-slate-400 mt-4 leading-relaxed">
            From Google Business Profile optimization to professional websites and promotional graphics,
            I deliver solutions that actually bring more customers through your door.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s) => (
            <div
              key={s.title}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-blue-900/40 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
