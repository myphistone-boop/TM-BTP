
import React, { useEffect, useRef } from 'react';
import { Icons } from './Icons';

declare global {
  interface Window {
    L: any;
  }
}

export const InteractiveAreaMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  useEffect(() => {
    if (!mapContainerRef.current || !window.L) return;

    // Center on Toulouse
    const toulouse: [number, number] = [43.6047, 1.4442];
    const tarbes: [number, number] = [43.2333, 0.0833];
    const montauban: [number, number] = [44.0167, 1.35];

    // Detect theme
    const isDarkMode = document.documentElement.classList.contains('dark');

    // Initialize Map
    mapInstanceRef.current = window.L.map(mapContainerRef.current, {
      center: toulouse,
      zoom: 8,
      zoomControl: false,
      scrollWheelZoom: false,
      dragging: !window.L.Browser.mobile,
      tap: !window.L.Browser.mobile,
      attributionControl: false
    });

    // Tiles selection based on theme
    const tileUrl = isDarkMode 
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

    window.L.tileLayer(tileUrl, {
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(mapInstanceRef.current);

    // Custom Marker Icon
    const customIcon = window.L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="w-4 h-4 bg-accent border-2 border-white dark:border-neutral-900 rounded-full shadow-lg pulse-marker"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    // Add Markers
    window.L.marker(tarbes, { icon: customIcon }).addTo(mapInstanceRef.current).bindPopup('<b class="text-primary">TM BTP Tarbes</b>');
    window.L.marker(montauban, { icon: customIcon }).addTo(mapInstanceRef.current).bindPopup('<b class="text-primary">TM BTP Montauban</b>');

    // Service Area Circle
    window.L.circle(toulouse, {
      color: '#C9A227',
      fillColor: '#C9A227',
      fillOpacity: 0.1,
      radius: 85000, // 85km radius
      weight: 2,
      dashArray: '5, 10'
    }).addTo(mapInstanceRef.current);

    // Style for marker pulse
    const style = document.createElement('style');
    style.innerHTML = `
      .pulse-marker {
        box-shadow: 0 0 0 rgba(201, 162, 39, 0.4);
        animation: pulse 2s infinite;
      }
      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(201, 162, 39, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(201, 162, 39, 0); }
        100% { box-shadow: 0 0 0 0 rgba(201, 162, 39, 0); }
      }
      .leaflet-popup-content-wrapper {
        border-radius: 12px;
        padding: 4px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (style.parentNode) document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[350px] bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-800 shadow-inner group">
      <div ref={mapContainerRef} className="w-full h-full z-0" />
      
      {/* Custom Zoom Controls */}
      <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
        <button 
          onClick={handleZoomIn}
          className="w-10 h-10 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md rounded-xl border border-gray-200 dark:border-neutral-700 shadow-lg flex items-center justify-center text-primary dark:text-white hover:text-accent dark:hover:text-accent transition-all active:scale-90"
          aria-label="Zoom avant"
        >
          <Icons.Plus size={20} strokeWidth={2.5} />
        </button>
        <button 
          onClick={handleZoomOut}
          className="w-10 h-10 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md rounded-xl border border-gray-200 dark:border-neutral-700 shadow-lg flex items-center justify-center text-primary dark:text-white hover:text-accent dark:hover:text-accent transition-all active:scale-90"
          aria-label="Zoom arrière"
        >
          <Icons.Minus size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* Indicator Overlay */}
      <div className="absolute bottom-4 left-4 z-[1000] pointer-events-none">
        <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 dark:border-neutral-700 shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider">Zone Sud-Ouest : Rayon 85km autour de Toulouse</span>
        </div>
      </div>
    </div>
  );
};
