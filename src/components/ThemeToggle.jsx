import React from 'react';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      title={isDark ? "Switch to Light Creative Theme" : "Switch to Dark Neon Theme"}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-md ${
        isDark
          ? 'bg-[#151520] text-amber-300 border border-white/10 hover:border-amber-400 hover:bg-[#1f1f2e] hover:scale-105'
          : 'bg-[#1C1C1E] text-white border border-gray-700 hover:border-[#FF5C2B] hover:scale-105'
      } ${className}`}
      aria-label="Toggle portfolio theme"
    >
      <span className="flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300">
        {isDark ? (
          <Sun size={15} className="text-amber-400 animate-spin-slow" />
        ) : (
          <Moon size={15} className="text-indigo-400" />
        )}
      </span>

      {showLabel ? (
        <span className="hidden sm:inline-block pr-1 font-medium">
          {isDark ? 'Light Theme' : 'Dark Theme'}
        </span>
      ) : (
        <span className="hidden lg:inline-block text-[11px] opacity-80 pr-1">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
