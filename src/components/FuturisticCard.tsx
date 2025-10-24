
import React from 'react';
import { cn } from '@/lib/utils';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className, 
  glow = false,
  hover = true 
}) => {
  return (
    <div className={cn(
      "glass backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-xl p-6 transition-all duration-300",
      hover && "hover:bg-slate-900/60 hover:border-blue-500/50 hover:scale-[1.02]",
      glow && "shadow-lg shadow-blue-500/20 border-blue-500/30",
      className
    )}>
      {children}
    </div>
  );
};

export default FuturisticCard;
