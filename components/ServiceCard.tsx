import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick?: (e: React.MouseEvent) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 1024) return; // Disable 3D tilt on mobile
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-10 to 10 degrees)
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  // Default to NewBuild (Home) if icon key is not found
  const Icon = Icons[service.icon as keyof typeof Icons] || Icons.NewBuild;

  return (
    <div className="perspective-1000 w-full h-full" style={{ perspective: '1000px' }}>
      <Link
        to={service.link}
        onClick={handleClick}
        className="block h-full"
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full h-full bg-white dark:bg-neutral-900 rounded-2xl p-4 md:p-8 border border-gray-100 dark:border-neutral-800 shadow-lg relative overflow-hidden transition-all duration-200 ease-out group hover:border-accent/50 dark:hover:border-accent/50"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
            boxShadow: isHovered 
              ? '0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px #C9A227' 
              : '0 10px 20px rgba(0,0,0,0.05)',
          }}
        >
          {/* Luminous Edge Effect Gradient */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} 
          />

          <div className="relative z-10 flex flex-col h-full items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/5 dark:bg-white/5 rounded-xl flex items-center justify-center mb-4 md:mb-6 text-primary dark:text-accent group-hover:bg-primary dark:group-hover:bg-accent group-hover:text-white dark:group-hover:text-primary transition-colors duration-300">
              <Icon className="w-6 h-6 md:w-7 md:h-7" />
            </div>

            <h3 className="font-display font-bold text-sm md:text-xl text-primary dark:text-white mb-2 md:mb-3 leading-tight">{service.title}</h3>
            
            <p className="hidden md:block text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {service.description}
            </p>

            <ul className="hidden md:block space-y-2 mb-8 w-full">
              {service.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-500 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>

            <div 
              className="flex items-center text-xs md:text-sm font-bold text-primary dark:text-accent group-hover:text-accent dark:group-hover:text-white transition-colors mt-auto"
            >
              <span className="md:hidden">Voir</span>
              <span className="hidden md:inline">En savoir plus</span>
              <Icons.ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};