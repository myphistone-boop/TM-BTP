import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './Icons';

export const InteractiveAreaMap: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.5, 1));

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Reset position if zoomed out completely
  useEffect(() => {
    if (scale === 1) setPosition({ x: 0, y: 0 });
  }, [scale]);

  return (
    <div className="w-full h-[600px] bg-neutral-800 relative overflow-hidden group cursor-move select-none rounded-2xl">
      {/* UI Controls */}
      <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow-xl text-left">
        <h3 className="text-primary font-display font-bold text-lg">Zone d'intervention</h3>
        <p className="text-gray-500 text-xs mt-1">Sud-Ouest (Occitanie)</p>
        <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-accent text-xs font-bold uppercase tracking-wider">Zone Active</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-20 flex flex-col gap-2">
        <button onClick={handleZoomIn} className="p-3 bg-white text-primary rounded-full hover:bg-accent hover:text-white transition-colors shadow-lg border border-gray-200">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
        </button>
        <button onClick={handleZoomOut} className="p-3 bg-white text-primary rounded-full hover:bg-accent hover:text-white transition-colors shadow-lg border border-gray-200">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/></svg>
        </button>
      </div>

      {/* Map Container */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
        style={{ 
          transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)` 
        }}
      >
        <div className="relative w-[1000px] h-[800px] bg-[#e5e7eb]">
            {/* Map Image Background - Map of Occitanie Region */}
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Occitanie_region_location_map.svg/1200px-Occitanie_region_location_map.svg.png" 
                alt="Carte Occitanie Sud Ouest" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
                draggable={false}
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>

            {/* Pins overlaying the map - Adjusted for Occitanie geography */}
            {/* Tarbes is roughly South West (Hautes-Pyrénées) */}
            {/* Montauban is roughly North East of Tarbes (Tarn-et-Garonne) */}
            
            {/* Zone Highlight Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line x1="360" y1="620" x2="520" y2="440" stroke="#C9A227" strokeWidth="3" strokeDasharray="5,5" className="opacity-80" />
             </svg>

            {/* Pin Tarbes (Approx coordinates on this specific map projection) */}
            <div className="absolute top-[620px] left-[360px] transform -translate-x-1/2 -translate-y-full group cursor-pointer z-10">
                <div className="relative">
                    <div className="w-4 h-4 bg-accent rounded-full animate-ping absolute top-1 left-1 opacity-75"></div>
                    <Icons.Location className="w-8 h-8 text-primary drop-shadow-md relative z-10 fill-white" />
                </div>
                <div className="bg-white px-3 py-1 rounded shadow-lg mt-1 whitespace-nowrap border border-gray-200">
                    <span className="font-bold text-primary text-sm">Tarbes</span>
                </div>
            </div>

            {/* Pin Montauban (Approx coordinates on this specific map projection) */}
             <div className="absolute top-[440px] left-[520px] transform -translate-x-1/2 -translate-y-full group cursor-pointer z-10">
                <div className="relative">
                     <Icons.Location className="w-8 h-8 text-primary drop-shadow-md relative z-10 fill-white" />
                </div>
                <div className="bg-white px-3 py-1 rounded shadow-lg mt-1 whitespace-nowrap border border-gray-200">
                    <span className="font-bold text-primary text-sm">Montauban</span>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};