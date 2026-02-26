import React, { useRef } from 'react';
import { Icons } from './Icons';

interface MobileHorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileHorizontalScroll: React.FC<MobileHorizontalScrollProps> = ({ children, className = "" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group w-full">
      <div 
        ref={scrollRef}
        className={`flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory ${className}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {React.Children.map(children, (child) => (
          <div className="flex-shrink-0 w-[85vw] sm:w-[350px] lg:w-auto snap-center lg:snap-align-none">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Only visible on mobile/tablet when hovering or always if needed */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center text-primary dark:text-white z-10 lg:hidden"
        aria-label="Précédent"
      >
        <Icons.ChevronLeft size={20} />
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center text-primary dark:text-white z-10 lg:hidden"
        aria-label="Suivant"
      >
        <Icons.ChevronRight size={20} />
      </button>
    </div>
  );
};
