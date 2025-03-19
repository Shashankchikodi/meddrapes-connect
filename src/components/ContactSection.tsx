
import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (infoRef.current) observer.observe(infoRef.current);
    if (formRef.current) observer.observe(formRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center slide-in-animation" ref={sectionRef}>
          <div className="inline-block bg-blue-50 px-4 py-1.5 rounded-full mb-6">
            <span className="text-primary text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Contact Us
          </h2>
          
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            Have questions about our products or interested in becoming a distributor? Our team is here to help. Reach out to us through any of the channels below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="slide-in-animation" ref={infoRef} style={{ transitionDelay: '100ms' }}>
            <div className="glass-panel rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium">Address</h4>
                    <p className="text-muted-foreground mt-1">
                      MedDrapes Manufacturing Facility<br />
                      Industrial Area, Phase 2<br />
                      Bangalore, Karnataka 560058<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium">Phone</h4>
                    <p className="text-muted-foreground mt-1">
                      +91 80 12345678
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium">Email</h4>
                    <p className="text-muted-foreground mt-1">
                      info@meddrapes.com<br />
                      sales@meddrapes.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="slide-in-animation" ref={formRef} style={{ transitionDelay: '200ms' }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
