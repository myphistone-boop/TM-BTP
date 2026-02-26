import React, { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  maxLines?: number;
  className?: string;
}

export const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLines = 3, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={className}>
      <p className={`${!isExpanded ? `line-clamp-${maxLines}` : ''} transition-all duration-300`}>
        {text}
      </p>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-accent font-bold text-sm mt-2 hover:underline lg:hidden"
      >
        {isExpanded ? 'Voir moins' : 'En savoir plus'}
      </button>
    </div>
  );
};
