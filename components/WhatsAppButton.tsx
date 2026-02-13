
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a 
        href="https://wa.me/918433780484?text=Hi CoolCare Pro, I need an appliance repair service."
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition transform active:scale-95 group relative"
      >
        <i className="fab fa-whatsapp text-4xl"></i>
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Message Us on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
