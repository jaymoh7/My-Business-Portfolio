import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Zap, TrendingUp, Award } from 'lucide-react';
import { buildWaLink } from './constants';

const HERO_IMG = 'https://d64gsuwffb70l.cloudfront.net/69fc25245097cf96d6789b65_1778132352332_157d0474.jpg';

const badges = [
  { icon: Award, text: 'CS Graduate' },
  { icon: Sparkles, text: 'AI & Web Solutions' },
  { icon: Zap, text: 'Fast Turnaround' },
  { icon: TrendingUp, text: 'Business-Focused' },
];

const Hero: React.FC = () => {
  const scroll = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-blue-300 text-sm font-medium">Available for new projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Helping Businesses Improve Their{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Online Visibility
              </span>{' '}
              & Digital Presence
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              I help businesses grow through Google Business Profile optimization, professional graphics,
              and modern business websites designed to attract and engage more customers online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scroll('#services')}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-7 py-4 rounded-xl font-semibold shadow-xl shadow-blue-500/30 transition-all hover:scale-105"
              >
                View Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={buildWaLink("Hi James, I'd like to discuss a project")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-900/60 hover:bg-slate-800 backdrop-blur-sm border border-blue-500/30 text-white px-7 py-4 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {badges.map((b) => (
                <div
                  key={b.text}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/50 border border-blue-900/40 backdrop-blur-sm hover:border-blue-500/50 transition-colors"
                >
                  <b.icon className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-300 text-xs sm:text-sm font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10"></div>
              <img src={HERO_IMG} alt="Digital business solutions" className="w-full h-auto" />
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 sm:-left-8 bg-slate-900/90 backdrop-blur-md border border-blue-500/30 rounded-xl p-4 shadow-xl shadow-blue-500/20 animate-[float_6s_ease-in-out_infinite]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">+150% Visibility</div>
                  <div className="text-slate-400 text-xs">Google Business</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-slate-900/90 backdrop-blur-md border border-blue-500/30 rounded-xl p-4 shadow-xl shadow-blue-500/20 animate-[float_7s_ease-in-out_infinite_1s]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">48hr Delivery</div>
                  <div className="text-slate-400 text-xs">Fast turnaround</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
