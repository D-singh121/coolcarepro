
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const telLink = "tel:+918433780484";
  const whatsappUrl = "https://wa.me/918433780484?text=Hi CoolCare Pro, I need an appliance repair service.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <a 
        href={telLink}
        className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition transform active:scale-95 group relative animate-pulse"
      >
        <i className="fas fa-phone-alt text-2xl md:text-3xl"></i>
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Call Us Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition transform active:scale-95 group relative"
      >
        <i className="fab fa-whatsapp text-3xl md:text-4xl"></i>
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          WhatsApp Message
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
