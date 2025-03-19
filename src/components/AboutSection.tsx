
import { useEffect, useRef } from 'react';
import { Shield, Award, Factory } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<Array<HTMLDivElement | null>>([]);
  
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
    
    featureRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      featureRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Maximum Protection",
      description: "Our drapes provide a reliable barrier against contamination, fluid and microbial migration."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Quality Certified",
      description: "All products meet or exceed international quality standards for medical equipment."
    },
    {
      icon: <Factory className="h-10 w-10 text-primary" />,
      title: "State-of-the-Art Facility",
      description: "Manufactured in our Bangalore facility using the latest technology and processes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center slide-in-animation" ref={sectionRef}>
          <div className="inline-block bg-blue-50 px-4 py-1.5 rounded-full mb-6">
            <span className="text-primary text-sm font-medium">About Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Advancing Healthcare Through Innovation
          </h2>
          
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            MedDrapes is dedicated to creating high-quality surgical drapes that enhance safety and efficiency in medical procedures. Based in Bangalore, India, we combine precision engineering with medical expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="slide-in-animation bg-white rounded-xl p-8 glass-panel scale-up-animation"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full bg-blue-50 p-3 inline-flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
