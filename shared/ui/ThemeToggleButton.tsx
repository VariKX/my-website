'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeToggleButton = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='text-xl flex gap-2 items-center'
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
      <span className='text-sm'>
        {isDark ? 'Светлая тема' : 'Темная тема'}
      </span>
    </button>
  )
};