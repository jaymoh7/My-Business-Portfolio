import React from 'react';
import { Code, TrendingUp, Palette, Brain, Award } from 'lucide-react';

const groups = [
  { icon: Code, title: 'Development', items: ['HTML/CSS', 'JavaScript', 'Python', 'Responsive Design'] },
  { icon: TrendingUp, title: 'Business & Visibility', items: ['Google Business Optimization', 'SEO Basics', 'Digital Branding', 'Visibility Strategy'] },
  { icon: Palette, title: 'Design', items: ['Canva', 'Figma', 'UI Design', 'Brand Graphics'] },
  { icon: Brain, title: 'AI & Data', items: ['AI Applications', 'Data Organization', 'Machine Learning', 'AI Model Support'] },
];

const certs = [
  { title: 'Certified Software Developer', issuer: 'Power Learn Project', year: '2024' },
  { title: 'Certified AI Professional', issuer: 'Power Learn Project', year: '2024' },
];

const Skills: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            Skills &amp; Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Proven Technical &amp; Business Expertise
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {groups.map((g) => (
            <div key={g.title} className="bg-slate-900/60 border border-blue-900/40 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                <g.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {certs.map((c) => (
            <div
              key={c.title}
              className="flex items-center gap-5 bg-gradient-to-r from-blue-950/60 to-slate-900/60 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/60 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">{c.title}</h4>
                <p className="text-slate-400 text-sm">{c.issuer} • {c.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
