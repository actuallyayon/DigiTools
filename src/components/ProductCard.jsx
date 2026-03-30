import React from 'react';
import { Check } from 'lucide-react';

const ProductCard = ({ product, onBuyNow }) => {
  const tagStyles = {
    'best-seller': 'bg-orange-50 text-orange-400 border-orange-100',
    'popular': 'bg-purple-50 text-purple-400 border-purple-100',
    'new': 'bg-emerald-50 text-emerald-400 border-emerald-100'
  };

  return (
    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 relative group flex flex-col h-full">
      {/* Top Section: Icon and Tag */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary/5 transition-colors">
          <img 
            src={`/assets/${product.icon}`} 
            alt={product.name} 
            className="w-8 h-8 object-contain"
            onError={(e) => { e.target.src = '/assets/package.png' }}
          />
        </div>
        <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${tagStyles[product.tagType] || tagStyles.popular}`}>
          {product.tag}
        </span>
      </div>

      {/* Content Section */}
      <div className="mb-6 flex-grow">
        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {product.description}
        </p>
        
        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-black text-slate-900">${product.price}</span>
          <span className="text-slate-400 text-sm ml-1 font-medium">/{product.period}</span>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
              </div>
              <span className="text-slate-600 text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <button 
        onClick={() => onBuyNow(product)}
        className="w-full py-4 bg-[#6B35F9] text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95 text-sm"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
