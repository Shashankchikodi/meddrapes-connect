
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass-panel' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-semibold text-primary">MedDrapes</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="nav-link text-foreground hover:text-primary transition-colors duration-300">
            Home
          </a>
          <a href="#about" className="nav-link text-foreground hover:text-primary transition-colors duration-300">
            About
          </a>
          <a href="#products" className="nav-link text-foreground hover:text-primary transition-colors duration-300">
            Products
          </a>
          <a href="#contact" className="nav-link text-foreground hover:text-primary transition-colors duration-300">
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel py-5 px-6 flex flex-col space-y-4 animate-accordion-down">
          <a 
            href="#" 
            className="text-foreground hover:text-primary transition-colors duration-300"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-foreground hover:text-primary transition-colors duration-300"
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#products" 
            className="text-foreground hover:text-primary transition-colors duration-300"
            onClick={toggleMenu}
          >
            Products
          </a>
          <a 
            href="#contact" 
            className="text-foreground hover:text-primary transition-colors duration-300"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
