import React from 'react';
import { Link, Element } from 'react-scroll'
interface HeaderProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems = [
  { href: "#about", label: "О нас" },
  { href: "timeline", label: "Этапы" },
  { href: "#roles", label: "Роли" },
  { href: "#features", label: "Возможности" }
];

const Header: React.FC<HeaderProps> = ({ 
  isScrolled, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  isDarkMode,
  toggleDarkMode
}) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : ''
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="#home" className="" onClick={(e) => handleNavClick(e, '#home')}>
            <img 
              src="/logo.svg" 
              alt="Электронный университет" 
              className=""
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.href} 
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {item.label}
              </Link>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>

            <a 
              href="#career"
              onClick={(e) => handleNavClick(e, '#career')}
              className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              Начать
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
            
            <button 
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Меню</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 py-4 bg-white dark:bg-gray-800 shadow-lg space-y-4">
          {navItems.map(item => (
            <a 
              key={item.href} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#career"
            onClick={(e) => handleNavClick(e, '#career')}
            className="block w-full text-center px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg"
          >
            Начать
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;