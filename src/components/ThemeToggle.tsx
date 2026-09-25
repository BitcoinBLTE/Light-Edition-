import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

interface ThemeToggleProps {
  floating?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ floating = true, className = '' }) => {
  const { isBlack, toggleTheme } = useTheme();

  const label = isBlack ? 'Switch to white background theme' : 'Switch to black background theme';

  const buttonContent = (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={label}
      title={label}
      className={`relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 cursor-pointer select-none active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8661B] ${
        isBlack
          ? 'bg-[#18181B]/90 hover:bg-[#242428] text-[#F4F4F5] hover:text-[#E9C9A5] border border-[#2E2E32] shadow-[0_4px_18px_rgba(0,0,0,0.5)] backdrop-blur-md'
          : 'bg-white/95 hover:bg-white text-[#080808] hover:text-[#B8661B] border border-[#E5E5E5] shadow-[0_4px_18px_rgba(0,0,0,0.08)] backdrop-blur-md'
      } ${className}`}
    >
      {isBlack ? (
        <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#F59E0B] transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#4A4A4A] transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );

  if (floating) {
    return (
      <aside aria-label="Theme selection" className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6 animate-in fade-in zoom-in-95 duration-200">
        {buttonContent}
      </aside>
    );
  }

  return buttonContent;
};
