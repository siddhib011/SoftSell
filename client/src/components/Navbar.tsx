import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="text-2xl mr-1">🔄</span>
              <span className="font-bold text-xl text-secondary dark:text-white">
                Soft<span className="text-primary">Sell</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => {
                console.log('Theme button clicked');
                toggleTheme();
              }}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
          
          <div className="flex md:hidden items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg pb-4 px-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3 pt-2 pb-3">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium block px-3 py-2"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </a>
              ))}
              <button 
                className="flex items-center text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary px-3 py-2"
                onClick={() => {
                  console.log('Mobile theme button clicked');
                  toggleTheme();
                }}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="mr-2" size={20} />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="mr-2" size={20} />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
