
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(localStorage.theme || 'light');

  const phoneNumber = "+91 84337 80484";
  const telLink = "tel:+918433780484";
  const whatsappUrl = "https://wa.me/918433780484?text=Hello CoolCare Pro, I need repair assistance in Panvel/Navi Mumbai.";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 20);
      
      if (scrollPos < 100) {
        setActiveSection('home');
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionIds = ['home', 'services', 'pricing', 'location', 'emergency'];
    
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.theme = newTheme;
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Location', href: '#location', id: 'location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
      setActiveSection(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto w-full px-4 flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="flex items-center">
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`text-xl md:text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-blue-600' : 'text-gray-900 dark:text-white'}`}
          >
            CoolCare<span className="text-blue-500">Pro</span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`relative transition-all duration-300 py-2 ${
                activeSection === link.id 
                ? 'text-blue-600' 
                : scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-800 dark:text-gray-200'
              } hover:text-blue-600`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </a>
          ))}
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Call Link - Visible on large screens and above */}
          <a 
            href={telLink} 
            className={`hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 font-bold transition-all ${scrolled ? 'text-blue-600' : 'text-gray-900 dark:text-white'} hover:bg-blue-600 hover:text-white`}
          >
            <i className="fas fa-phone-alt"></i>
            <span className="text-sm whitespace-nowrap">{phoneNumber}</span>
          </a>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${scrolled ? 'hover:bg-gray-200 dark:hover:bg-gray-800' : 'hover:bg-white/10'} text-lg`}
            aria-label="Toggle Theme"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun text-yellow-400' : 'fa-moon text-blue-600'}`}></i>
          </button>

          {/* WhatsApp Button */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-green-500 hover:bg-green-600 text-white px-5 lg:px-6 py-2.5 rounded-full font-bold items-center gap-2 transition shadow-lg transform hover:-translate-y-0.5 active:scale-95"
          >
            <i className="fab fa-whatsapp"></i>
            <span className="hidden xl:inline">Book Now</span>
            <span className="xl:hidden">Book</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-white'}`}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[550px] border-t border-gray-100 dark:border-gray-700' : 'max-h-0'}`}>
        <div className="flex flex-col p-4 gap-2 font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest text-sm">
          <a 
            href={telLink}
            className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center gap-3"
          >
            <i className="fas fa-phone-alt"></i>
            Call Us: {phoneNumber}
          </a>
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.id)} 
              className={`p-3 rounded-xl transition-colors ${activeSection === link.id ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#emergency" 
            onClick={(e) => handleLinkClick(e, 'emergency')} 
            className={`p-3 rounded-xl transition-colors ${activeSection === 'emergency' ? 'bg-red-50 dark:bg-red-900/30 text-red-600' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
          >
            Emergency
          </a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-green-500 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
          >
            <i className="fab fa-whatsapp"></i>
            WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
