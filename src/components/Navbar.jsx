import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 py-4 shadow-sm">
      <div className="container px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-[#6B35F9] tracking-tight cursor-pointer">
          DigiTools
        </div>

        {/* Desktop Center Links */}
        <div className="hidden lg:flex space-x-10 items-center">
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">Testimonials</a>
          <a href="#" className="nav-link">FAQ</a>
        </div>

        {/* Right Side Desktop Group */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="relative group cursor-pointer mr-4 md:mr-2">
            <ShoppingCart className="w-5 h-5 text-[#4a4a4a] group-hover:text-primary transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-sm font-semibold text-[#4a4a4a] hover:text-primary transition-colors">
              Login
            </button>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 py-8 border-t border-slate-100 bg-white' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-6 flex flex-col space-y-6">
          <a href="#" className="text-lg font-bold text-slate-800 hover:text-primary">Products</a>
          <a href="#" className="text-lg font-bold text-slate-800 hover:text-primary">Features</a>
          <a href="#" className="text-lg font-bold text-slate-800 hover:text-primary">Pricing</a>
          <a href="#" className="text-lg font-bold text-slate-800 hover:text-primary">Testimonials</a>
          <a href="#" className="text-lg font-bold text-slate-800 hover:text-primary">FAQ</a>
          
          <div className="pt-6 border-t border-slate-100 flex flex-col space-y-4">
            <button className="w-full py-4 text-slate-800 font-bold hover:text-primary transition-colors">
              Login
            </button>
            <button className="w-full btn-primary py-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
