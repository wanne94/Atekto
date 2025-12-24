import React from 'react';

interface AtektoLogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export const AtektoLogo: React.FC<AtektoLogoProps> = ({ className = '', showText = true, size = 40 }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Symbol */}
      <img
        src="/atekto-logo.png"
        alt="Atekto Logo"
        width={size}
        height={size}
        className="object-contain"
      />

      {/* Text */}
      {showText && (
        <span
          className="ml-3 text-lg font-bold tracking-[0.15em] text-white uppercase"
          style={{ fontFamily: 'Outfit, system-ui, -apple-system, sans-serif' }}
        >
          ATEKTO
        </span>
      )}
    </div>
  );
};
