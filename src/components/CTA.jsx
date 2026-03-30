import React from 'react';

const CTA = ({ onExplore, onViewPricing }) => {
  return (
    <div className="py-24 bg-primary text-white text-center relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#7C3AED] to-primary opacity-50"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000">
          Join thousands of professionals who are already using DigiTools to work smarter. 
          Start your free trial today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          <button 
            onClick={onExplore}
            className="px-12 py-5 bg-white text-primary font-black rounded-full hover:bg-slate-50 transition-all shadow-2xl shadow-black/10 active:scale-95 text-lg"
          >
            Explore Products
          </button>
          <button 
            onClick={onViewPricing}
            className="px-12 py-5 bg-transparent border-2 border-white text-white font-black rounded-full hover:bg-white/10 transition-all active:scale-95 text-lg"
          >
            View Pricing
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-white/60 font-semibold tracking-wide">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default CTA;
