export const theme = {
  colors: {
    primary: '#F8BBD0', // Soft pink
    secondary: '#B2EBF2', // Mint green
    accent: '#E1BEE7', // Lavender
    background: '#FFF9C4', // Creamy white
    text: '#5D4037', // Dark brown
    white: '#FFFFFF',
    black: '#212121',
  },
  fonts: {
    heading: '"Dancing Script", cursive, "Arial", sans-serif',
    body: '"Open Sans", "Helvetica", sans-serif',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    large: '1440px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.1)',
    large: '0 8px 16px rgba(0,0,0,0.1)',
  },
  transitions: {
    default: 'all 0.3s ease-in-out',
    fast: 'all 0.15s ease-in-out',
  },
} as const;

export type ThemeType = typeof theme;
