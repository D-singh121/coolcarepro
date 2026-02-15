
import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    type: 'AC',
    title: 'AC Repair & Service',
    description: 'Gas filling, installation, cleaning, and compressor repair for all AC brands.',
    icon: 'fas fa-snowflake',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    type: 'Washing Machine',
    title: 'Washing Machine Repair',
    description: 'Front load, top load, and semi-automatic machine repairs with genuine parts.',
    icon: 'fas fa-water',
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    type: 'Fridge',
    title: 'Refrigerator Repair',
    description: 'Expert fixing for cooling issues, gas leakage, and electrical failures.',
    icon: 'fas fa-temperature-low',
    image: 'https://images.unsplash.com/photo-1571175432244-ef0215ad700a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    type: 'Microwave Oven',
    title: 'Microwave Oven Repair',
    description: 'Magnetron replacement, heating issues, and touch panel repairs for all models.',
    icon: 'fas fa-burn',
    image: 'https://images.unsplash.com/photo-1585659722982-789630278249?auto=format&fit=crop&q=80&w=800'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 md:py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">Comprehensive Repair <br className="hidden md:block"/>Solutions for You</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            We specialize in multi-brand home appliance repairs with certified technicians and guaranteed satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a generic appliance image if the specific one fails
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-lg">
                  <i className={`${service.icon} text-xl`}></i>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>
                <a 
                  href={`https://wa.me/918433780484?text=I'm interested in ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 text-gray-800 dark:text-gray-200 group-hover:text-white font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;