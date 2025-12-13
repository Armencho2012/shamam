import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const VisitContainer = styled.section`
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

const InfoCard = styled(motion.div)`
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

const ContactItem = styled.div`
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
    h3 {
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

const MapContainer = styled.div`
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: 50%;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      transform: translateY(-3px);
    }
  }
`;

const WorkingHours = styled.div`
  .hours-list {
    list-style: none;
    padding: 0;
    
    li {
      display: flex;
      justify-content: space-between;
      padding: ${({ theme }) => `${theme.spacing.sm} 0`};
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      
      &:last-child {
        border-bottom: none;
      }
      
      .day {
        font-weight: 600;
      }
      
      .time {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const VisitPage: React.FC = () => {
  const workingHours = [
    { day: 'Երկուշաբթի - Ուրբաթ', time: '09:00 - 22:00' },
    { day: 'Շաբաթ', time: '10:00 - 23:00' },
    { day: 'Կիրակի', time: '10:00 - 21:00' },
  ];

  return (
    <VisitContainer>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Այցելեք Մեզ</SectionTitle>
        </motion.div>

        <ContentWrapper>
          <div>
            <InfoCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2><FaMapMarkerAlt /> Հասցե</h2>
              <ContactItem>
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="content">
                  <h3>Մեր գտնվելու վայրը</h3>
                  <p>Վանաձոր, Մյասնիկյան 19</p>
                </div>
              </ContactItem>
              
              <ContactItem>
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="content">
                  <h3>Հեռախոսահամար</h3>
                  <a href="tel:+37493788083">+374 93 788 083</a>
                </div>
              </ContactItem>
              
              <ContactItem>
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="content">
                  <h3>Էլ. փոստ</h3>
                  <a href="mailto:info@shamam-macarons.am">info@shamam-macarons.am</a>
                </div>
              </ContactItem>
              
              <SocialLinks>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
              </SocialLinks>
            </InfoCard>
            
            <InfoCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              style={{ marginTop: '2rem' }}
            >
              <h2><FaClock /> Աշխատանքային ժամեր</h2>
              <WorkingHours>
                <ul className="hours-list">
                  {workingHours.map((item, index) => (
                    <li key={index}>
                      <span className="day">{item.day}</span>
                      <span className="time">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </WorkingHours>
              
              <div style={{ marginTop: '2rem' }}>
                <h3>Ինչպես հասնել</h3>
                <p>Մենք գտնվում ենք Վանաձորի կենտրոնում՝ Մյասնիկյան փողոցում: Մեր սրճարանի մոտ կան ավտոկայանատեղեր: Ամենամոտ կանգառը գտնվում է 5 րոպե քայլելու հեռավորության վրա:</p>
              </div>
            </InfoCard>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MapContainer>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.6935710000003!2d44.494615!3d40.202583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2d7c8e3e8a5%3A0x3a3b8d1c9b0b0b0b!2sMyasnikyan%20St%2C%20Vanadzor%2C%20Armenia!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                loading="lazy"
                title="Shamam's Macarons Location"
              ></iframe>
            </MapContainer>
            
            <InfoCard
              style={{ marginTop: '2rem' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2>Խմբային այցեր</h2>
              <p>Ցանկանու՞մ եք կազմակերպել միջոցառում կամ խնջույք: Մենք հնարավորություն ենք տալիս 10 և ավելի հոգանոց խմբերի համար նախապես զբաղեցնել սեղաններ:</p>
              <p style={{ marginTop: '1rem' }}>Խմբային պատվերների համար խնդրում ենք զանգահարել մեզ կամ ուղարկել հաղորդագրություն:</p>
            </InfoCard>
          </motion.div>
        </ContentWrapper>
      </div>
    </VisitContainer>
  );
};

export default VisitPage;
