import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for getting started",
      price: "$0",
      period: "/Month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      buttonText: "Get Started Free",
      isPopular: false,
      isDark: false
    },
    {
      name: "Pro",
      tagline: "Best for professionals",
      price: "$29",
      period: "/Month",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      buttonText: "Start Pro Trial",
      isPopular: true,
      isDark: true
    },
    {
      name: "Enterprise",
      tagline: "For teams and businesses",
      price: "$99",
      period: "/Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      isPopular: false,
      isDark: false
    }
  ];

  return (
    <div className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`rounded-[2.5rem] p-10 lg:p-12 transition-all duration-500 shadow-xl border overflow-hidden relative ${
                plan.isDark 
                ? 'bg-primary border-primary text-white py-14 lg:scale-105 shadow-primary/30 z-10' 
                : 'bg-white border-slate-100 text-[#1a1a1a] shadow-slate-200/50 hover:shadow-2xl hover:border-slate-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 left-0 flex justify-center">
                  <div className="bg-[#FFEBAD] text-[#D97706] text-xs font-black uppercase tracking-widest px-6 py-2 rounded-b-2xl shadow-sm">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-3xl font-black mb-2 ${plan.isDark ? 'text-white' : 'text-slate-800'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm font-semibold ${plan.isDark ? 'text-white/70' : 'text-slate-400'}`}>
                  {plan.tagline}
                </p>
              </div>

              <div className="flex items-baseline mb-10">
                <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                <span className={`text-lg font-medium ml-1 ${plan.isDark ? 'text-white/60' : 'text-slate-400'}`}>
                  {plan.period}
                </span>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-12">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.isDark ? 'bg-white/10' : 'bg-emerald-50'
                    }`}>
                      <Check className={`w-3.5 h-3.5 stroke-[3] ${
                        plan.isDark ? 'text-white' : 'text-emerald-500'
                      }`} />
                    </div>
                    <span className={`font-semibold text-sm lg:text-base ${
                      plan.isDark ? 'text-white/90' : 'text-slate-600'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className={`w-full py-5 rounded-[1.5rem] font-black text-lg transition-all active:scale-95 shadow-lg ${
                plan.isDark 
                ? 'bg-white text-primary shadow-white/10 hover:bg-white/95' 
                : 'bg-primary text-white shadow-primary/20 hover:bg-primary/90'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
