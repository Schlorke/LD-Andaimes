'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className={cn('h-9 w-9 px-0', className)}
        disabled
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn(
        'h-9 w-9 px-0 transition-colors duration-300',
        'hover:text-amber-400',
        'dark:hover:text-amber-400',
        className
      )}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 transition-all duration-300" />
      ) : (
        <Moon className="h-4 w-4 transition-all duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
