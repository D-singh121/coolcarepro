
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-tools text-white text-xl"></i>
            </div>
            <span className="text-2xl font-black tracking-tighter">
              CoolCare<span className="text-blue-400">Pro</span>
            </span>
          </div>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
            Your trusted partner for home appliance repairs in Navi Mumbai. We are specifically localized in Kalamboli to serve you faster.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Our Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#services" className="hover:text-blue-400 transition">AC Repair</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Washing Machine</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Fridge Service</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Cooler Maintenance</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <i className="fas fa-map-marker-alt text-blue-500 mt-1"></i>
              <span>Near Police Chowki, Kalamboli,<br/>Panvel, Navi Mumbai, 410218</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-phone text-blue-500"></i>
              <span>+91 84337 80484</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-envelope text-blue-500"></i>
              <span>support@coolcarepro.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
        <p>© 2024 CoolCare Pro. Serving Panvel & Navi Mumbai.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;