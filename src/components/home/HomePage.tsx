import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
              url('https://images.unsplash.com/photo-1551024601-bec78aea704c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  margin-top: -80px;
  padding: 0 20px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const FeaturedSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.primary};
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const ProductImage = styled.div<{ image: string }>`
  height: 250px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

const ProductInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const Price = styled.span`
  display: block;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.25rem;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const AboutSection = styled.section`
  background-color: white;
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
  
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.8;
  }
`;

const TestimonialsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const TestimonialCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  p {
    font-style: italic;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  .author {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const HomePage: React.FC = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Դասական Մակարոններ',
      description: 'Բազմագույն, նուրբ հոտով և անմոռանացի համով մակարոններ',
      price: '800 դրամ',
      image: 'https://images.unsplash.com/photo-1558326565719-907c4e7b5a3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      name: 'Փախլավա',
      description: 'Ավանդական, թարմ պատրաստված փխրուն փախլավա ընտանեկան բաղադրատոմսով',
      price: '1500 դրամ',
      image: 'https://images.unsplash.com/photo-1607923431113-8e2c0e7f3c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      name: 'Կրուասան',
      description: 'Թարմ խմորից պատրաստված կարամելացված կրուասաններ',
      price: '1000 դրամ',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: 'Ամենալավ մակարոնները, որ երբևէ համտեսել եմ: Ամեն անգամ այցելում եմ, երբ Վանաձորում եմ:',
      author: 'Աննա Մկրտչյան',
    },
    {
      id: 2,
      text: 'Փախլավան պարզապես անմոռանալի է: Ընտանեկան բաղադրատոմսը զգում ես յուրաքանչյուր կծումով:',
      author: 'Արմեն Պետրոսյան',
    },
    {
      id: 3,
      text: 'Հիանալի սրճարան հանգստանալու և համեղ ապուրներով ժամանակ անցկացնելու համար: Բարեկամասեր անձնակազմ և հիանալի մթնոլորտ:',
      author: 'Նարե Դավթյան',
    },
  ];

  return (
    <>
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>Բարի գալուստ Shamam's Macarons</HeroTitle>
            <HeroSubtitle>Յուրաքանչյուր կտոր՝ ինչպես տանը</HeroSubtitle>
            <ButtonGroup>
              <PrimaryButton to="/menu">Տեսեք մեր մենյուն</PrimaryButton>
              <SecondaryButton to="/visit">Այցելեք մեզ այսօր</SecondaryButton>
            </ButtonGroup>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Մեր Առաջարկը</SectionTitle>
        <ProductsGrid>
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProductImage image={product.image} />
              <ProductInfo>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Price>{product.price}</Price>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductsGrid>
      </FeaturedSection>

      <AboutSection>
        <AboutContent>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Մեր Պատմությունը</h2>
            <p>
              Shamam's Macarons-ը սկսել է որպես փոքրիկ ընտանեկան բիզնես 2015 թվականին:
              Մեր նպատակն է ստեղծել բարձրորակ, թարմ և համեղ խմորեղեն, որը կհիշեցնի տան հոտն ու համը:
              Մենք օգտագործում ենք միայն լավագույն բաղադրիչները և ավանդական բաղադրատոմսերը:
            </p>
            <p>
              Մեր սրճարանը դարձել է Վանաձորի սիրելի վայրերից մեկը՝ իր տաք մթնոլորտի,
              համեղ խմորեղենի և սուրճի շնորհիվ: Մենք հպարտանում ենք մեր հաճախորդների հետ ստեղծած կապերով
              և ձեզ նույնպես ենք հրավիրում մեր ընտանիքի մաս կազմելու:
            </p>
          </motion.div>
        </AboutContent>
      </AboutSection>

      <TestimonialsSection>
        <SectionTitle>Հաճախորդների կարծիքները</SectionTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TestimonialCard>
                <p>"{testimonial.text}"</p>
                <div className="author">- {testimonial.author}</div>
              </TestimonialCard>
            </motion.div>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>
    </>
  );
};

export default HomePage;
