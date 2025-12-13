import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const ContactContainer = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background: white;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  label {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm};
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px rgba(248, 187, 208, 0.3);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled(motion.div)`
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  .icon {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    margin-right: ${({ theme }) => theme.spacing.md};
    margin-top: 4px;
  }
  
  .content {
    h4 {
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.spacing.xs};
    }
    
    p, a {
      color: ${({ theme }) => theme.colors.text};
      margin: 0;
      line-height: 1.6;
      text-decoration: none;
      display: block;
      
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: 50%;
    font-size: 1.5rem;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      transform: translateY(-3px);
    }
  }
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <ContactContainer>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Կապ Մեզ Հետ</SectionTitle>
        </motion.div>

        <ContentWrapper>
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2><FaPaperPlane /> Ուղարկեք Մեզ Հաղորդագրություն</h2>
            
            {isSubmitted && (
              <div style={{ 
                background: '#e8f5e9', 
                color: '#2e7d32', 
                padding: '1rem', 
                borderRadius: '4px',
                marginBottom: '1.5rem',
                borderLeft: '4px solid #4caf50'
              }}>
                Շնորհակալություն ձեր հաղորդագրության համար: Մենք արագ կպատասխանենք ձեզ:
              </div>
            )}
            
            <FormGroup>
              <label htmlFor="name">Անուն *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Էլ. փոստ *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="subject">Թեմա</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Հաղորդագրություն *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              <FaPaperPlane />
              {isSubmitting ? 'Ուղարկվում է...' : 'Ուղարկել'}
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2>Կապի Տվյալներ</h2>
            
            <InfoCard>
              <h3>Կապ Մեզ Հետ</h3>
              
              <InfoItem>
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="content">
                  <h4>Հասցե</h4>
                  <p>Վանաձոր, Մյասնիկյան 19</p>
                </div>
              </InfoItem>
              
              <InfoItem>
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="content">
                  <h4>Հեռախոսահամար</h4>
                  <a href="tel:+37493788083">+374 93 788 083</a>
                </div>
              </InfoItem>
              
              <InfoItem>
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="content">
                  <h4>Էլ. փոստ</h4>
                  <a href="mailto:info@shamam-macarons.am">info@shamam-macarons.am</a>
                </div>
              </InfoItem>
              
              <div style={{ marginTop: '2rem' }}>
                <h4>Սոցիալական Ցանցեր</h4>
                <SocialLinks>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook />
                  </a>
                </SocialLinks>
              </div>
            </InfoCard>
            
            <InfoCard>
              <h3>Աշխատանքային Ժամեր</h3>
              <p>Երկուշաբթի - Ուրբաթ: 09:00 - 22:00</p>
              <p>Շաբաթ: 10:00 - 23:00</p>
              <p>Կիրակի: 10:00 - 21:00</p>
            </InfoCard>
          </ContactInfo>
        </ContentWrapper>
      </div>
    </ContactContainer>
  );
};

export default ContactPage;
