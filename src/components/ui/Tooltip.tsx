import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: string | React.ReactNode;
  title?: string;
  children: React.ReactElement;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
  maxWidth?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  title,
  children,
  position = 'top',
  delay = 150,
  className = '',
  maxWidth = 'max-w-xs',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!content) return children;

  // Position classes
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2.5',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2.5',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2.5',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2.5',
  };

  // Arrow position classes
  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 -mt-1 border-t-brand-cyan/40 border-r-transparent border-b-transparent border-l-transparent',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-1 border-b-brand-cyan/40 border-r-transparent border-t-transparent border-l-transparent',
    left: 'left-full top-1/2 -translate-y-1/2 -ml-1 border-l-brand-cyan/40 border-t-transparent border-r-transparent border-b-transparent',
    right: 'right-full top-1/2 -translate-y-1/2 -mr-1 border-r-brand-cyan/40 border-t-transparent border-l-transparent border-b-transparent',
  };

  return (
    <div
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}

      {isVisible && (
        <div
          role="tooltip"
          className={`absolute z-50 pointer-events-none transition-all duration-200 transform animate-fade-in ${positionClasses[position]}`}
        >
          <div
            className={`relative rounded-xl bg-brand-card/95 backdrop-blur-md border border-brand-cyan/40 px-3.5 py-2 text-left shadow-glow-cyan/25 shadow-xl ${maxWidth}`}
          >
            {title && (
              <div className="text-[11px] font-bold text-brand-cyan flex items-center gap-1 mb-0.5 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-glow-cyan"></span>
                {title}
              </div>
            )}
            <div className="text-xs text-slate-200 font-normal leading-relaxed">
              {content}
            </div>
            {/* Arrow indicator */}
            <div className={`absolute w-0 h-0 border-4 ${arrowClasses[position]}`}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
