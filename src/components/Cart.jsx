import React from 'react';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = ({ items, onRemove, onCheckout, onBackToProducts }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-16 shadow-xl shadow-slate-200/50 border border-slate-100 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShoppingBag className="w-10 h-10 text-primary/30" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Your cart is empty</h2>
        <p className="text-slate-500 mb-10 max-w-sm mx-auto font-medium leading-relaxed">
          Looks like you haven't added any premium tools yet. Start exploring our collection!
        </p>
        <button 
          onClick={onBackToProducts}
          className="px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 mx-auto"
        >
          Browse Products <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-10">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Your Cart</h2>
        </div>

        {/* Cart Items List */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="flex items-center gap-6 p-5 rounded-2xl bg-slate-50/50 border border-slate-100/50 group"
            >
              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <img src={`/assets/${item.icon}`} alt={item.name} className="w-8 h-8 object-contain" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-slate-800">
                  {item.name}
                </h3>
                <p className="text-slate-400 text-sm font-medium">${item.price}</p>
              </div>

              <div className="text-right">
                <button 
                  onClick={() => onRemove(item.id)}
                  className="text-[#FF4D8D] hover:text-red-600 transition-colors font-bold text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-12 pt-8">
          <div className="flex justify-between items-center mb-10">
            <span className="text-slate-400 font-medium">Total:</span>
            <span className="text-3xl font-black text-slate-900 tracking-tight">${total}</span>
          </div>

          <button 
            onClick={onCheckout}
            className="w-full py-4 bg-[#8E5AFA] text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 text-md"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
      
      <p className="text-center text-slate-400 text-sm font-medium">
        Secure checkout powered by DigiTools. No hidden fees.
      </p>
    </div>
  );
};

export default Cart;
