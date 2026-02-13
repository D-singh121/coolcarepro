
import React from 'react';

const MapSection: React.FC = () => {
  return (
    <div className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Our Coverage</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">Serving Kalamboli, Panvel & Navi Mumbai</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our primary service hub is located near the <strong>Kalamboli Police Chowki</strong>. 
            We provide rapid doorstep repair services across Panvel, Kalamboli, and Navi Mumbai.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-2 md:p-4 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden h-[400px] md:h-[450px] relative group">
          <iframe
            title="CoolCare Pro Service Area - Kalamboli Police Chowki"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.368685160278!2d73.0974345759781!3d19.00346045423854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e997f70624d5%3A0x6b8252278964d57a!2sKalamboli%20Police%20Chowki!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
          ></iframe>
          
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:right-10 md:left-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl border border-blue-100 dark:border-gray-700 max-w-xs md:max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white">Kalamboli Service Hub</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Near Police Chowki, Sector 1E,<br />
              Kalamboli, Panvel,<br />
              Navi Mumbai, Maharashtra 410218
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">
              <span>Status: Online</span>
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
