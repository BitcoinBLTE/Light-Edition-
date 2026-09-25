import React, { createContext, useContext, useEffect, useState } from 'react';

export type AppTheme = 'white' | 'black';

interface ThemeContextType {
  theme: AppTheme;
  isBlack: boolean;
  toggleTheme: () => void;
  setTheme: (theme: AppTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'blte_theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<AppTheme>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'black' || saved === 'white') {
        return saved;
      }
    } catch {
      // Ignore storage errors
    }
    return 'white';
  });

  const isBlack = theme === 'black';

  useEffect(() => {
    const root = document.documentElement;
    if (isBlack) {
      root.classList.add('dark');
      root.classList.add('theme-black');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.classList.remove('theme-black');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme, isBlack]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'white' ? 'black' : 'white'));
  };

  const setTheme = (newTheme: AppTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, isBlack, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
