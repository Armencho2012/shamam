import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.background};
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing.md} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
`;

const HomeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Ներեցե՛ք, էջը չի գտնվել</ErrorTitle>
        <ErrorMessage>
          Թվում է, թե ձեր փնտրած էջը տեղափոխվել է, հեռացվել է, վերանվանվել է կամ երբեք չի եղել:
        </ErrorMessage>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HomeButton to="/">Վերադառնալ Գլխավոր Էջ</HomeButton>
        </motion.div>
      </motion.div>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
