import React from "react";

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  lightText?: boolean;
}

export const LogoSymbol: React.FC<{ size?: number; className?: string }> = ({
  size = 64,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      id="logo-symbol-svg"
    >
      <defs>
        {/* Metallic Gold Gradient for the 5 bar charts */}
        <linearGradient id="gold-bar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B1" />
          <stop offset="25%" stopColor="#E6BD56" />
          <stop offset="50%" stopColor="#C49B30" />
          <stop offset="75%" stopColor="#AA7E1A" />
          <stop offset="100%" stopColor="#815B06" />
        </linearGradient>

        {/* Shiny Silver/Grey Gradient for the Arrow */}
        <linearGradient id="silver-arrow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFE2E4" />
          <stop offset="40%" stopColor="#9CA3A8" />
          <stop offset="80%" stopColor="#646C72" />
          <stop offset="100%" stopColor="#43494D" />
        </linearGradient>

        {/* Silver Hexagon Frame Gradient */}
        <linearGradient id="silver-hexagon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFE1E3" />
          <stop offset="30%" stopColor="#AFB4B8" />
          <stop offset="70%" stopColor="#6C7277" />
          <stop offset="100%" stopColor="#3E4245" />
        </linearGradient>

        {/* Thin Gold Line Gradient */}
        <linearGradient id="gold-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="100%" stopColor="#A27D18" />
        </linearGradient>
      </defs>

      {/* Hexagonal Frame (Outer Border) */}
      <path
        d="M80 15 L135 46.75 L135 113.25 L80 145 L25 113.25 L25 46.75 Z"
        stroke="url(#silver-hexagon-grad)"
        strokeWidth="6"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Inner offset hexagon frame */}
      <path
        d="M80 23 L127 50.15 L127 109.85 L80 137 L33 109.85 L33 50.15 Z"
        stroke="url(#silver-hexagon-grad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.4"
      />

      {/* 5 Vertical Gold Columns representing growth (Lower half) */}
      <g id="bars">
        {/* Bar 1 - Leftmost */}
        <path
          d="M48 84 L48 108 A 1 1 0 0 0 49 109 L56 109 A 1 1 0 0 0 57 108 L57 84 A 1 1 0 0 0 56 83 L49 83 A 1 1 0 0 0 48 84 Z"
          fill="url(#gold-bar-grad)"
        />
        {/* Bar 2 */}
        <path
          d="M60 72 L60 114 A 1 1 0 0 0 61 115 L68 115 A 1 1 0 0 0 69 114 L69 72 A 1 1 0 0 0 68 71 L61 71 A 1 1 0 0 0 60 72 Z"
          fill="url(#gold-bar-grad)"
        />
        {/* Bar 3 */}
        <path
          d="M72 63 L72 121 A 1 1 0 0 0 73 122 L80 122 A 1 1 0 0 0 81 121 L81 63 A 1 1 0 0 0 80 62 L73 62 A 1 1 0 0 0 72 63 Z"
          fill="url(#gold-bar-grad)"
        />
        {/* Bar 4 */}
        <path
          d="M84 55 L84 117 A 1 1 0 0 0 85 118 L92 118 A 1 1 0 0 0 93 117 L93 55 A 1 1 0 0 0 92 54 L85 54 A 1 1 0 0 0 84 55 Z"
          fill="url(#gold-bar-grad)"
        />
        {/* Bar 5 - Rightmost */}
        <path
          d="M96 46 L96 110 A 1 1 0 0 0 97 111 L104 111 A 1 1 0 0 0 105 110 L105 46 A 1 1 0 0 0 104 45 L97 45 A 1 1 0 0 0 96 46 Z"
          fill="url(#gold-bar-grad)"
        />
      </g>

      {/* Silver Growth Trend Arrow */}
      {/* Slides elegantly below the trend-line and bends upwards */}
      <path
        d="M26 84 L72 52 L82 66 L124 37"
        stroke="url(#silver-arrow-grad)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Arrowhead */}
      <path
        d="M109 31 L131 32 L124 54 Z"
        fill="url(#silver-arrow-grad)"
        stroke="url(#silver-arrow-grad)"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Upper Gold Trendline with Points Connect */}
      <circle cx="48" cy="51" r="5" fill="url(#gold-bar-grad)" />
      <circle cx="78" cy="38" r="5" fill="url(#gold-bar-grad)" />
      <circle cx="106" cy="45" r="5" fill="url(#gold-bar-grad)" />
      <path
        d="M48 51 L78 38 L106 45"
        stroke="url(#gold-line-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export const LogoFull: React.FC<LogoProps> = ({
  className = "",
  size = 48,
  showText = true,
  lightText = false,
}) => {
  const numericSize = typeof size === "number" ? size : (typeof size === "string" ? parseInt(size) : 48) || 48;

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`} id="logo-full-container">
      <LogoSymbol size={numericSize} />
      {showText && (
        <div className="flex flex-col tracking-wider font-display">
          <span
            className={`text-xl font-bold tracking-[0.16em] uppercase ${
              lightText ? "text-white" : "text-silver-900"
            }`}
          >
            Belma PM Lab
          </span>
          <span
            className="text-[8.5px] font-semibold tracking-[0.27em] uppercase whitespace-nowrap text-gold-500"
          >
            Where Product Meets Growth
          </span>
        </div>
      )}
    </div>
  );
};
