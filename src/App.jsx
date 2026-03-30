import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductCard from './components/ProductCard';
import productsData from './data/products.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    toast.success(`${product.name} added to cart!`, {
      icon: "🎉",
      style: { borderRadius: '16px' }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => {
      const remainingItems = prevItems.filter(item => item.id !== productId);
      toast.info("Item removed from cart");
      return remainingItems;
    });
  };

  const handleCheckout = () => {
    setCartItems([]);
    toast.success("Purchase successful! Thank you.", {
      icon: "✅",
      style: { borderRadius: '16px' }
    });
    setActiveTab('products');
  };

  return (
    <div className="w-full min-h-screen bg-[#FDFDFD] overflow-x-hidden">
      <Navbar cartCount={cartItems.length} />
      
      <main className="w-full pb-20">
        <Banner />
        <Stats />
        
        <div className="container px-4 md:px-6 my-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Premium Digital Tools
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>
          </div>

          {/* Section Toggles */}
          <div className="flex justify-center mb-16">
            <div className="bg-slate-50 p-1.5 rounded-[2rem] flex shadow-sm border border-slate-100">
              <button 
                onClick={() => setActiveTab('products')}
                className={`px-10 py-3 rounded-full font-bold transition-all duration-500 text-sm ${activeTab === 'products' ? 'bg-[#6B35F9] text-white shadow-xl shadow-primary/20 scale-105' : 'text-slate-400 hover:text-primary'}`}
              >
                Products
              </button>
              <button 
                onClick={() => setActiveTab('cart')}
                className={`px-10 py-3 rounded-full font-bold transition-all duration-500 text-sm flex items-center gap-2 ${activeTab === 'cart' ? 'bg-[#6B35F9] text-white shadow-xl shadow-primary/20 scale-105' : 'text-slate-400 hover:text-primary'}`}
              >
                Cart ({cartItems.length})
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="transition-all duration-500">
            {activeTab === 'products' ? (
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
                {productsData.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onBuyNow={handleAddToCart} 
                  />
                ))}
              </section>
            ) : (
              <Cart 
                items={cartItems} 
                onRemove={handleRemoveFromCart}
                onCheckout={handleCheckout}
                onBackToProducts={() => setActiveTab('products')}
              />
            )}
          </div>
        </div>

        {/* Final Sections */}
        <Steps />
        <div id="pricing-section">
          <Pricing />
        </div>

        <CTA 
          onExplore={() => setActiveTab('products')} 
          onViewPricing={() => {
            document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
          }} 
        />
      </main>

      <ToastContainer position="bottom-right" theme="colored" />
      <Footer />
    </div>
  );
}

export default App;
