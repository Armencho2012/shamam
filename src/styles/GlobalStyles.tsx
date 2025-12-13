import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text};
    line-height: 1.6;
    background-color: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: ${theme.spacing.md};
  }
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.accent};
    }
  }
  
  button, .btn {
    cursor: pointer;
    font-family: ${theme.fonts.body};
    font-size: 1rem;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    border: none;
    border-radius: 4px;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    transition: ${theme.transitions.default};
    
    &:hover {
      background: ${theme.colors.accent};
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.medium};
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
  }
  
  section {
    padding: ${theme.spacing.xxl} 0;
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: ${theme.spacing.xl} 0;
    }
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: ${theme.spacing.xxl};
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -${theme.spacing.sm};
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
    }
  }
`;
