import React from 'react';
import { Play } from 'lucide-react';

const Banner = () => {
  return (
    <div className="w-full">
      <div className="container px-4 md:px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="lg:w-1/2 flex flex-col items-start text-left">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          New: AI-Powered Tools Available
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1f2937] leading-[1.1] mb-8">
          Supercharge Your <br />
          <span className="text-primary italic">Digital Workflow</span>
        </h1>
        
        <p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
        </p>
        
        <div className="flex flex-wrap gap-5">
          <button className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 scale-100 hover:scale-105">
            Explore Products
          </button>
          
          <button className="px-8 py-4 border-2 border-primary/20 text-primary font-bold rounded-2xl hover:border-primary transition-all flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <Play className="w-4 h-4 fill-current" />
            </div>
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 relative">
        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white">
          <img 
            src="/assets/banner.png" 
            alt="Hero Banner" 
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>
      </div>
      </div>
    </div>
  );
};

export default Banner;
