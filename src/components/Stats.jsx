import React from 'react';

const Stats = () => {
  const statItems = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" }
  ];

  return (
    <div className="w-full bg-primary py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-0">
          {statItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-center group">
                <div className="text-5xl lg:text-7xl font-bold text-white mb-2 transition-transform duration-300 group-hover:scale-110">
                  {item.value}
                </div>
                <div className="text-lg text-white/80 font-medium tracking-wide">
                  {item.label}
                </div>
              </div>
              
              {/* Vertical Divider (Hidden on Mobile) */}
              {index < statItems.length - 1 && (
                <div className="hidden md:block w-[1px] h-20 bg-white/20"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
