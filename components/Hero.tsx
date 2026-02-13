
import React from 'react';

interface HeroProps {
  onChatOpen: () => void;
}

const Hero: React.FC<HeroProps> = ({ onChatOpen }) => {
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      const navbarHeight = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-400 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Expert Technicians Available Now
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            Smart Solutions for Your <span className="text-blue-600">Home Appliances</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Professional repair services for AC, Washing Machines, Fridges, and Coolers. Reliable, fast, and affordable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#services" 
              onClick={handleExploreClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-200 dark:shadow-none flex items-center justify-center gap-2 group"
            >
              Explore Services
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition"></i>
            </a>
            <button 
              onClick={onChatOpen}
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fas fa-robot text-blue-500"></i>
              Diagnose Issue
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/100/100?random=${i}`} 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white dark:border-gray-800 shadow-sm"
                  alt="Customer"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex text-yellow-400 text-xs md:text-sm">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-xs md:text-sm font-bold text-gray-800 dark:text-gray-200">10k+ Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
              alt="Repair Technician" 
              className="w-full h-auto object-cover"
            />
            {/* Overlay Info Card */}
            <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                <i className="fas fa-check text-xl"></i>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Service Status</p>
                <p className="text-sm md:text-lg font-extrabold text-gray-800 dark:text-white truncate">Technician Nearby</p>
              </div>
              <div className="ml-auto text-right shrink-0">
                <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Est. Time</p>
                <p className="text-sm md:text-lg font-extrabold text-blue-600 dark:text-blue-400">45 Mins</p>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 -z-10"></div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-600 rounded-full opacity-10 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
