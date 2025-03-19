
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
}

const ProductCard = ({ title, description, imageUrl, delay = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="product-card rounded-xl overflow-hidden bg-white slide-in-animation"
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <button className={cn(
          "group flex items-center text-sm font-medium text-primary",
          "transition-all duration-300",
          isHovered && "text-primary-foreground bg-primary rounded-full px-4 py-2"
        )}>
          Learn more
          <ArrowUpRight 
            size={16} 
            className={cn(
              "ml-1 transition-transform", 
              isHovered ? "transform rotate-45 text-primary-foreground" : "text-primary"
            )} 
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
