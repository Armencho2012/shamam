import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled.li<{ $isActive: boolean }>`
  a {
    color: ${({ theme, $isActive }) => 
      $isActive ? theme.colors.primary : theme.colors.text};
    font-weight: ${({ $isActive }) => $isActive ? '600' : '400'};
    text-decoration: none;
    padding: ${({ theme }) => `${theme.spacing.sm} 0`};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      transform: scaleX(${({ $isActive }) => $isActive ? '1' : '0'});
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Main = styled.main`
  flex: 1;
  margin-top: 80px; // Account for fixed header
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: 1.25rem;
  }
  
  p, a {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    display: block;
    
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  
  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
      transform: translateY(-3px);
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { path: '/', label: 'Գլխավոր' },
        { path: '/menu', label: 'Մենյու' },
        { path: '/visit', label: 'Մեր մասին' },
    { path: '/contact', label: 'Կապ' },
  ];

  return (
    <LayoutContainer>
      <Header>
        <Nav>
          <Logo to="/">Shamam's Macarons</Logo>
          
          <NavLinks>
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                $isActive={location.pathname === link.path}
              >
                <Link to={link.path}>{link.label}</Link>
              </NavLink>
            ))}
          </NavLinks>
          
          <MobileMenuButton 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </MobileMenuButton>
        </Nav>
        
        {/* Mobile menu would go here */}
      </Header>
      
      <Main>{children}</Main>
      
      <Footer>
        <FooterContent>
          <FooterSection>
            <h3>Shamam's Macarons</h3>
            <p>Յուրաքանչյուր քաղցրավենիք պատրաստվում է սիրով և հոգատարությամբ:</p>
            <SocialIcons>
                 <a href="https://www.instagram.com/shamams_macarons/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
                 <a href="https://www.facebook.com/shamamsmacaroons" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
            </SocialIcons>
          </FooterSection>
          
          <FooterSection>
            <h3>Հասցե</h3>
            <p><FaMapMarkerAlt style={{ marginRight: '8px' }} /> Վանաձոր, Մյասնիկյան 19</p>
            <p><FaPhone style={{ marginRight: '8px' }} /> +374 93 788 083</p>
            <p><FaEnvelope style={{ marginRight: '8px' }} /> info@shamam-macarons.am</p>
          </FooterSection>
          
          <FooterSection>
            <h3>Բացման ժամեր</h3>
            <p>Երկ-Ուրբ: 09:00 - 22:00</p>
            <p>Շաբաթ: 10:00 - 23:00</p>
            <p>Կիրակի: 10:00 - 21:00</p>
          </FooterSection>
        </FooterContent>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Shamam's Macarons. Բոլոր իրավունքները պաշտպանված են:
        </Copyright>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
