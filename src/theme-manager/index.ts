import { defaultTheme } from './themes/default';
import { greenTheme } from './themes/green';
import { purpleTheme } from './themes/purple';
import { blueTheme } from './themes/blue';

export type ColorScheme = 'light' | 'dark' | 'system';
export type ThemeName = 'default' | 'green' | 'purple' | 'blue';

export interface ThemeConfig {
  name: ThemeName;
  displayName: string;
  theme: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
}

export const themes: Record<ThemeName, ThemeConfig> = {
  default: {
    name: 'default',
    displayName: 'Default',
    theme: defaultTheme,
  },
  green: {
    name: 'green',
    displayName: 'Green',
    theme: greenTheme,
  },
  purple: {
    name: 'purple',
    displayName: 'Purple',
    theme: purpleTheme,
  },
  blue: {
    name: 'blue',
    displayName: 'Blue',
    theme: blueTheme,
  },
};

// State
let currentTheme: ThemeName = 'default';
let currentColorScheme: ColorScheme = 'light';

// Initialize theme system
function initialize() {
  const savedColorScheme = localStorage.getItem('color-scheme') as ColorScheme;
  
 
  if (savedColorScheme) {
    currentColorScheme = savedColorScheme;
  }

  applyTheme();
}

function getEffectiveColorScheme(): 'light' | 'dark' {
  if (currentColorScheme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return currentColorScheme;
}

function applyTheme() {
  const colorScheme = getEffectiveColorScheme();
  const theme = themes[currentTheme];
  
  if (!theme) return;

  document.documentElement.setAttribute('data-theme', colorScheme);
  
  const cssVars = theme.theme[colorScheme];
  Object.entries(cssVars).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
}

export function setColorScheme(colorScheme: ColorScheme) {
  currentColorScheme = colorScheme;
  localStorage.setItem('color-scheme', colorScheme);
  applyTheme();
}


export function getCurrentColorScheme(): ColorScheme {
  return currentColorScheme;
}



// Initialize
initialize();
