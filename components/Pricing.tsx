
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Simple & Transparent</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">Visiting Charges</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            We believe in honest pricing with no hidden costs. Pay only for the expertise you receive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Local Area Card */}
          <div className="group relative bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-blue-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity dark:opacity-10 dark:group-hover:opacity-20">
              <i className="fas fa-map-marker-alt text-8xl text-blue-600 dark:text-blue-400"></i>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                <i className="fas fa-home text-2xl"></i>
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Local Area</h4>
              <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                Standard inspection and diagnostic charges for residents in Kalamboli and immediate Panvel vicinity.
              </p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-gray-900 dark:text-white">₹250</span>
                <span className="text-gray-400 dark:text-gray-500 font-medium">/ visit</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                  <i className="fas fa-check-circle text-green-500"></i>
                  Complete Diagnostics
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                  <i className="fas fa-check-circle text-green-500"></i>
                  Same-day Availability
                </li>
              </ul>

              <a 
                href="https://wa.me/918433780484?text=I'm in Kalamboli and need a technician."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 bg-gray-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 font-bold rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500"
              >
                Book Local Service
              </a>
            </div>
          </div>

          {/* Long Distance Card */}
          <div className="group relative bg-blue-600 dark:bg-blue-700 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-200 dark:shadow-none border border-transparent transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <i className="fas fa-route text-8xl text-white"></i>
            </div>
            
            <div className="relative z-10 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-8">
                <i className="fas fa-truck-fast text-2xl"></i>
              </div>
              
              <h4 className="text-2xl font-bold mb-4">Long Distance</h4>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Extended coverage for the wider Navi Mumbai region, ensuring our experts reach you wherever you are.
              </p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">₹450</span>
                <span className="text-blue-200 font-medium">/ visit</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-blue-50 font-medium">
                  <i className="fas fa-check-circle text-blue-300"></i>
                  Wider Area Coverage
                </li>
                <li className="flex items-center gap-3 text-blue-50 font-medium">
                  <i className="fas fa-check-circle text-blue-300"></i>
                  Priority Scheduling
                </li>
              </ul>

              <a 
                href="https://wa.me/918433780484?text=I'm in Navi Mumbai area and need a technician."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-500"
              >
                Book Navi Mumbai
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
