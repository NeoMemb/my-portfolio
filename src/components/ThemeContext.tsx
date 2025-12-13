import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeType = 'dark' | 'light' | 'system';

type ThemeContextProps = {
  theme: ThemeType;
  setTheme: (t: ThemeType) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const applyTheme = (newTheme: ThemeType) => {
  if (newTheme === 'system') {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', systemPrefersDark);
    document.documentElement.classList.toggle('light', !systemPrefersDark);
  } else {
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.classList.toggle('light', newTheme === 'light');
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>('system');

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as ThemeType) || 'system';
    setThemeState(saved);
    applyTheme(saved);

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      // if user picked 'system' update based on OS
      const current = (localStorage.getItem('theme') as ThemeType) || 'system';
      if (current === 'system') applyTheme('system');
    };
    media.addEventListener?.('change', handler);
    return () => media.removeEventListener?.('change', handler);
  }, []);

  const setTheme = (t: ThemeType) => {
    setThemeState(t);
    localStorage.setItem('theme', t);
    applyTheme(t);
  };

  const toggleTheme = () => {
    const themes: ThemeType[] = ['dark', 'light', 'system'];
    const currentIndex = themes.indexOf(theme);
    const next = themes[(currentIndex + 1) % themes.length];
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

export { ThemeContext };
