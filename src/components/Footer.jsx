import React from 'react';
import { Camera, Circle, X, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1221] text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <div className="text-4xl font-bold text-white tracking-tight">
              DigiTools
            </div>
            <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Product</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">Features</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Templates</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Company</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">About</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Resources</h4>
            <ul className="space-y-4 text-slate-400 font-medium text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Community</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Social Links</h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-all cursor-pointer group">
                <img src="/assets/instagram.png" alt="Instagram" className="w-5 h-5 object-contain" />
              </div>
              {/* Facebook */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-all cursor-pointer">
                <img src="/assets/facebook.png" alt="Facebook" className="w-5 h-5 object-contain" />
              </div>
              {/* X */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-all cursor-pointer">
                <img src="/assets/x.png" alt="X" className="w-5 h-5 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6">
            <p className="text-slate-500 font-medium text-sm">
              © 2026 Digitools. All rights reserved.
            </p>
            <div className="flex gap-8 text-slate-500 font-medium text-sm">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
