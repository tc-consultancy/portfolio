import { useState, useEffect, useCallback } from 'react';
import { 
  getCurrentColorScheme, 
  setColorScheme,
  type ColorScheme 
} from '../../theme-manager';

import { ThemeToggleButton, useThemeTransition } from './shadcn-io/theme-toggle-button'

export function ThemeSelector() {
  const [currentColorScheme, setCurrentColorScheme] = useState<ColorScheme>('light');
  const { startTransition } = useThemeTransition();

  useEffect(() => {
    setCurrentColorScheme(getCurrentColorScheme());
  }, []);

  const handleThemeToggle = useCallback(() => {
    const newColorScheme: ColorScheme = currentColorScheme === 'light' ? 'dark' : 'light';
    
    startTransition(() => {
      setColorScheme(newColorScheme);
      setCurrentColorScheme(newColorScheme);
    });
  }, [currentColorScheme, setColorScheme, startTransition]);


    return (
    <div className="flex items-center gap-2">
      {/* Animated Theme Toggle Button */}
      <ThemeToggleButton 
        theme={currentColorScheme === 'system' ? 'light' : currentColorScheme}
        onClick={handleThemeToggle}
        variant="polygon"
        className="border-none dark:bg-transparent"
      />
   
    </div>
  );
}
