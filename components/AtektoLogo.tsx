import React from 'react';

interface AtektoLogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export const AtektoLogo: React.FC<AtektoLogoProps> = ({ className = '', showText = true, size = 40 }) => {
  const gradientId = `logoGradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Symbol */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#D4A574" />
            <stop offset="100%" stopColor="#C49A6C" />
          </linearGradient>
        </defs>

        {/* A-Frame House Shape with Hexagon cutout */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M250 0L500 220V500H330L250 420L170 500H0V220L250 0ZM250 60L60 240V440H140L250 330L360 440H440V240L250 60Z"
          fill={`url(#${gradientId})`}
        />

        {/* Inner Hexagon outline */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M250 140L340 195V305L250 360L160 305V195L250 140ZM250 190L195 222V278L250 310L305 278V222L250 190Z"
          fill={`url(#${gradientId})`}
        />
      </svg>

      {/* Text */}
      {showText && (
        <span
          className="ml-3 text-lg font-bold tracking-[0.15em] text-white uppercase"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          ATEKTO
        </span>
      )}
    </div>
  );
};
