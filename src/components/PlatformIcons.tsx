import React from 'react';

/**
 * Authentic SVG Logo Icons for DEX Platforms & Social Media
 */

// Raydium Official Brand Icon (Cyan & Magenta angled prism beams)
export const RaydiumIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 20 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="8" fill="#13141F" />
    <path
      d="M8.5 22.5L14 8.5H19.5L14 22.5H8.5Z"
      fill="url(#raydium-cyan)"
    />
    <path
      d="M14 22.5L19.5 8.5H23.5L18 22.5H14Z"
      fill="url(#raydium-magenta)"
    />
    <defs>
      <linearGradient id="raydium-cyan" x1="8.5" y1="8.5" x2="19.5" y2="22.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="raydium-magenta" x1="14" y1="8.5" x2="23.5" y2="22.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E879F9" />
        <stop offset="1" stopColor="#A855F7" />
      </linearGradient>
    </defs>
  </svg>
);

// Jupiter DEX Aggregator Official Brand Icon (Planetary rings / orange-to-green gradient)
export const JupiterIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 20 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="8" fill="#191B1F" />
    {/* Concentric planetary arcs */}
    <circle cx="16" cy="16" r="10" stroke="url(#jup-grad)" strokeWidth="2.5" />
    <path
      d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16"
      stroke="#F58220"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16"
      stroke="#10B981"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="16" cy="16" r="4" fill="url(#jup-grad)" />
    <defs>
      <linearGradient id="jup-grad" x1="8" y1="8" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F58220" />
        <stop offset="0.5" stopColor="#FBBF24" />
        <stop offset="1" stopColor="#10B981" />
      </linearGradient>
    </defs>
  </svg>
);

// Orca Official Brand Icon (Marine yellow & turquoise killer whale emblem)
export const OrcaIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 20 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="8" fill="#0B132B" />
    <path
      d="M10 20C10 14.4772 14.4772 10 20 10C22.5 10 23.5 11.5 22.5 13C21.5 14.5 19 16 19 19C19 21.5 21 22 22 22C19 23.5 15 23.5 12 21.5C10.7 20.6 10 20 10 20Z"
      fill="#FFE804"
    />
    <circle cx="15" cy="14" r="1.5" fill="#0B132B" />
    <path
      d="M17 19C15.5 19 14.5 17.5 14.5 16"
      stroke="#06B6D4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// DexScreener Official Icon
export const DexScreenerIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 20
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="8" fill="#1C1C24" />
    <path
      d="M9 11L16 7L23 11V21L16 25L9 21V11Z"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="16" r="3" fill="#10B981" />
  </svg>
);

// Solscan Official Brand Icon
export const SolscanIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 20
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="8" fill="#0D1B2A" />
    <circle cx="15" cy="15" r="6" stroke="#00C2FF" strokeWidth="2.5" />
    <line x1="19.5" y1="19.5" x2="24" y2="24" stroke="#00C2FF" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Solana Official Logo (3 Horizontal Slanted Gradient Bars)
export const SolanaIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 20
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="8" fill="#09090B" />
    <path
      d="M9.5 21.8H21.5L23.5 19.8H11.5L9.5 21.8Z"
      fill="url(#sol-grad)"
    />
    <path
      d="M11.5 17H23.5L21.5 15H9.5L11.5 17Z"
      fill="url(#sol-grad)"
    />
    <path
      d="M9.5 12.2H21.5L23.5 10.2H11.5L9.5 12.2Z"
      fill="url(#sol-grad)"
    />
    <defs>
      <linearGradient id="sol-grad" x1="9.5" y1="10.2" x2="23.5" y2="21.8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9945FF" />
        <stop offset="0.5" stopColor="#14F195" />
        <stop offset="1" stopColor="#00C2FF" />
      </linearGradient>
    </defs>
  </svg>
);

// Instagram High-Fidelity Official Icon
export const InstagramIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// X (Formerly Twitter) Official Monochrome Glyph
export const XTwitterIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 20 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// GitHub Official Glyph
export const GithubIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 20 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// Telegram Official Glyph
export const TelegramIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 20 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

// YouTube Official Glyph
export const YouTubeIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 20 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
