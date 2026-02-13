
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DiagnosticChat from './components/DiagnosticChat';
import WhatsAppButton from './components/WhatsAppButton';
import MapSection from './components/MapSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Force scroll to top on refresh/mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex flex-col relative">
      <Navbar />
      
      <main className="flex-grow">
        <section id="home" className="scroll-mt-20">
          <Hero onChatOpen={() => setIsChatOpen(true)} />
        </section>
        
        <section id="services" className="scroll-mt-20">
          <Services />
        </section>

        <section id="emergency" className="bg-blue-600 dark:bg-blue-700 py-16 md:py-24 px-4 text-center text-white relative overflow-hidden scroll-mt-20">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Need Immediate Assistance?</h2>
            <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Our expert technicians are available 24/7 for emergency repairs in Kalamboli & Navi Mumbai.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/918433780484?text=Hi, I need a repair service for my appliance in Kalamboli / Navi Mumbai."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition shadow-xl inline-flex items-center justify-center gap-2 group active:scale-95"
              >
                <i className="fab fa-whatsapp text-2xl group-hover:scale-110 transition"></i>
                Book via WhatsApp
              </a>
              <button 
                onClick={() => setIsChatOpen(true)}
                className="bg-blue-800 dark:bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-900 dark:hover:bg-black transition shadow-lg active:scale-95"
              >
                AI Diagnostic Tool
              </button>
            </div>
          </div>
        </section>

        {/* Wrapped Pricing and MapSection in sections with explicit scroll margins for consistency */}
        <section id="pricing" className="scroll-mt-20">
          <Pricing />
        </section>

        <section id="location" className="scroll-mt-20">
          <MapSection />
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-24 px-4 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Our Core Values</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Why Choose CoolCare Pro?</h3>
              <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center">
              <div className="group p-8 rounded-3xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6">
                  <i className="fas fa-bolt text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Rapid Response</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Most repairs are completed within 4 hours of your initial WhatsApp request.</p>
              </div>
              
              <div className="group p-8 rounded-3xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:-rotate-6">
                  <i className="fas fa-gem text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Genuine Parts</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">We only use original spare parts from authorized brands to ensure longevity.</p>
              </div>

              <div className="group p-8 rounded-3xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 sm:col-span-2 lg:col-span-1">
                <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6">
                  <i className="fas fa-handshake text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Fair Estimates</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Transparent repair estimates provided upfront before starting any work.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <WhatsAppButton />
      <DiagnosticChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;
