import React from 'react';
import { UserPlus, Package, Rocket } from 'lucide-react';

const Steps = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      Icon: UserPlus
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      Icon: Package
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      Icon: Rocket
    }
  ];

  return (
    <div className="w-full py-24 bg-[#F8FAFC]">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-6 tracking-tight">
            Get Started In 3 Steps
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 relative group text-center">
              {/* Step Number Badge */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-primary/20">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <step.Icon className="w-10 h-10 text-primary stroke-[1.5]" />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm lg:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
