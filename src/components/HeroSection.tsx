
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse-subtle"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center slide-in-animation" ref={heroRef}>
          <div className="inline-block bg-blue-50 px-4 py-1.5 rounded-full mb-6">
            <span className="text-primary text-sm font-medium">Medical Manufacturer in Bangalore, India</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Superior Surgical Drapes for Modern Healthcare
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Engineered with precision to ensure safety, comfort, and reliability for both medical professionals and patients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium btn-primary"
            >
              Explore Products
              <ArrowRight size={18} className="ml-2" />
            </a>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/5 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
