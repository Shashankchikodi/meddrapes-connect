
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductSection from '@/components/ProductSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Handle GitHub Pages 404 redirect
    // This helps with direct URL access on GitHub Pages
    const path = window.location.pathname;
    if (path !== '/' && path !== '/index.html' && !path.includes('.')) {
      window.history.replaceState(null, '', '/');
    }
    
    // Intersection Observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with slide-in-animation class
    document.querySelectorAll('.slide-in-animation').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen page-transition">
      <Navbar />
      
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
