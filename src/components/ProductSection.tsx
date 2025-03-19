
import { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const products = [
    {
      title: "Standard Surgical Drapes",
      description: "General-purpose surgical drapes designed for a wide range of procedures.",
      imageUrl: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Specialized Procedure Drapes",
      description: "Tailored designs for specific surgical specialties and procedures.",
      imageUrl: "https://images.unsplash.com/photo-1581595219315-a342bb7333db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fluid-Resistant Drapes",
      description: "Enhanced protection against fluid penetration during high-fluid procedures.",
      imageUrl: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Antimicrobial Drapes",
      description: "Featuring antimicrobial properties to reduce the risk of surgical site infections.",
      imageUrl: "https://images.unsplash.com/photo-1576671414121-aa0c53fa9e34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Custom Procedural Kits",
      description: "Complete procedural kits containing all necessary drapes and accessories.",
      imageUrl: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Environmentally Conscious Options",
      description: "Eco-friendly drapes made with sustainable materials and manufacturing processes.",
      imageUrl: "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center slide-in-animation" ref={sectionRef}>
          <div className="inline-block bg-blue-50 px-4 py-1.5 rounded-full mb-6">
            <span className="text-primary text-sm font-medium">Our Products</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Premium Surgical Drapes for Every Need
          </h2>
          
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            We offer a comprehensive range of surgical drapes, each designed with precision to meet the specific requirements of different medical procedures.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
