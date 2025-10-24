
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

interface VantaBackgroundProps {
  effect?: 'NET' | 'GLOBE' | 'CELLS';
  children?: React.ReactNode;
}

const VantaBackground: React.FC<VantaBackgroundProps> = ({ 
  effect = 'NET', 
  children 
}) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Load Three.js
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    
    // Load Vanta.js
    const vantaScript = document.createElement('script');
    vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
    
    const initVanta = () => {
      if (window.VANTA && window.THREE && vantaRef.current) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3b82f6,
          backgroundColor: 0x0f0f23,
          points: 8.00,
          maxDistance: 25.00,
          spacing: 18.00
        });
      }
    };

    threeScript.onload = () => {
      vantaScript.onload = initVanta;
      document.head.appendChild(vantaScript);
    };
    
    document.head.appendChild(threeScript);

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [effect]);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    >
      <div className="relative z-10" style={{ pointerEvents: 'auto' }}>
        {children}
      </div>
    </div>
  );
};

export default VantaBackground;
