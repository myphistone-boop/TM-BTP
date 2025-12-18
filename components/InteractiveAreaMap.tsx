
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export const InteractiveAreaMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMap = useRef<any>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      const toulouse = { lat: 43.6047, lng: 1.4442 };
      const tarbes = { lat: 43.2333, lng: 0.0833 };
      const montauban = { lat: 44.0167, lng: 1.35 };

      const isDarkMode = document.documentElement.classList.contains('dark');
      
      const mapStyles = isDarkMode ? [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
      ] : [];

      googleMap.current = new window.google.maps.Map(mapRef.current, {
        center: toulouse,
        zoom: 8.5,
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      // Add Markers
      new window.google.maps.Marker({
        position: tarbes,
        map: googleMap.current,
        title: "TM BTP - Tarbes",
        icon: {
          path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
          scale: 6,
          fillColor: "#C9A227",
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: "#FFFFFF",
        }
      });

      new window.google.maps.Marker({
        position: montauban,
        map: googleMap.current,
        title: "TM BTP - Montauban",
        icon: {
          path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
          scale: 6,
          fillColor: "#C9A227",
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: "#FFFFFF",
        }
      });

      // Draw a line/area between the key cities to show the corridor
      const flightPath = new window.google.maps.Polyline({
        path: [tarbes, montauban],
        geodesic: true,
        strokeColor: "#C9A227",
        strokeOpacity: 0.5,
        strokeWeight: 3,
        icons: [{
          icon: { path: 'M 0,-1 0,1', strokeOpacity: 1, scale: 4 },
          offset: '0',
          repeat: '20px'
        }],
      });
      flightPath.setMap(googleMap.current);
    };

    loadGoogleMaps();
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[400px] bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden rounded-2xl shadow-inner border border-gray-200 dark:border-neutral-700">
      <div ref={mapRef} className="w-full h-full" />
      
      {/* Floating Info Overlay */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-3 rounded-xl border border-gray-200 dark:border-neutral-700 shadow-xl pointer-events-none">
        <h3 className="text-primary dark:text-white font-display font-bold text-sm">Zone Sud-Ouest</h3>
        <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">Tarbes — Montauban</span>
        </div>
      </div>
    </div>
  );
};
