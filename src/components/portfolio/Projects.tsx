import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Google Business Optimization',
    desc: 'Full profile optimization for a local restaurant — boosted Maps visibility and customer calls.',
    img: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132383881_8bd3b61e.jpg',
    tags: ['GBP', 'Local SEO', 'Maps'],
    category: 'Visibility',
  },
  {
    title: 'Promotional Graphics Campaign',
    desc: 'Series of marketing flyers and social posters for a salon — drove a 40% engagement uplift.',
    img: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132416003_4a4709a7.png',
    tags: ['Canva', 'Branding', 'Social'],
    category: 'Design',
  },
  {
    title: 'Business Website Project',
    desc: 'Modern responsive one-page website with WhatsApp integration for a clinic.',
    img: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132443726_81485c1e.jpg',
    tags: ['React', 'Tailwind', 'Responsive'],
    category: 'Web',
  },
  {
    title: 'AI Crop Disease Detection',
    desc: 'Mobile app using machine learning to detect crop diseases from leaf photos.',
    img: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132461902_782f583b.jpg',
    tags: ['Python', 'TensorFlow', 'Mobile'],
    category: 'AI',
  },
  {
    title: 'Agricultural Commodities Platform',
    desc: 'Web platform connecting farmers with buyers and showing live market prices.',
    img: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132488719_c97101ef.png',
    tags: ['React', 'Node.js', 'Marketplace'],
    category: 'Web',
  },
  {
    title: 'Health Prediction AI',
    desc: 'AI application for early health risk prediction with clean dashboard analytics.',
    img: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132529366_eda46931.png',
    tags: ['ML', 'Healthcare', 'Dashboard'],
    category: 'AI',
  },
  {
    title: 'Personal Portfolio',
    desc: 'This portfolio — showcasing services and converting visitors into clients.',
    img: 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132352332_157d0474.jpg',
    tags: ['React', 'Tailwind', 'Design'],
    category: 'Web',
  },
];

const filters = ['All', 'Web', 'AI', 'Design', 'Visibility'];

const Projects: React.FC = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Projects That Deliver Results
          </h2>
          <p className="text-slate-300 text-lg">A selection of recent projects across web, AI, and visibility.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === f
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-900/60 text-slate-300 border border-blue-900/40 hover:border-blue-500/50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="group relative bg-slate-900/60 border border-blue-900/40 rounded-2xl overflow-hidden hover:border-blue-500/60 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80"></div>
                <span className="absolute top-3 left-3 text-xs font-semibold bg-blue-500/90 text-white px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {p.category}
                </span>
                <button className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-500">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
                  View Project <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
