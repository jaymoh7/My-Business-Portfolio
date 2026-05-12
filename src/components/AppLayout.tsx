import React, { useEffect } from 'react';
import Navbar from './portfolio/Navbar';
import Hero from './portfolio/Hero';
import About from './portfolio/About';
import Services from './portfolio/Services';
import Packages from './portfolio/Packages';
import Projects from './portfolio/Projects';
import BeforeAfter from './portfolio/BeforeAfter';
import WhyMe from './portfolio/WhyMe';
import Process from './portfolio/Process';
import Stats from './portfolio/Stats';
import Testimonials from './portfolio/Testimonials';
import Skills from './portfolio/Skills';
import CTABanner from './portfolio/CTABanner';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';
import WhatsAppFloat from './portfolio/WhatsAppFloat';

const AppLayout: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.title = 'James Njoroge — Digital Solutions for Local Businesses';
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Projects />
        <BeforeAfter />
        <WhyMe />
        <Process />
        <Stats />
        <Testimonials />
        <Skills />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default AppLayout;
