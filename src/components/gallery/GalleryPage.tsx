import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GalleryContainer = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  padding: 0 ${({ theme }) => theme.spacing.md};
  max-width: 1400px;
  margin: 0 auto;
`;

const GalleryItem = styled(motion.div)<{ image: string }>`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: ${({ theme }) => theme.transitions.default};
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  .gallery-overlay {
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    padding: ${({ theme }) => theme.spacing.md};
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: white;
    transition: ${({ theme }) => theme.transitions.default};
    opacity: 0;
  }
  
  &:hover .gallery-overlay {
    bottom: 0;
    opacity: 1;
  }
`;

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1551024601-bec78aea704c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Թարմ մակարոններ' },
  { id: 2, src: 'https://images.unsplash.com/photo-1607923431113-8e2c0e7f3c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Փախլավա' },
  { id: 3, src: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Թարմ կրուասաններ' },
  { id: 4, src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Սրճարան' },
  { id: 5, src: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Մեր թիմը' },
  { id: 6, src: 'https://images.unsplash.com/photo-1551024601-bec78aea704c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Մակարոնների տեսականի' },
  { id: 7, src: 'https://images.unsplash.com/photo-1603052875302-d1563f08d9c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Հատուկ մակարոններ' },
  { id: 8, src: 'https://images.unsplash.com/photo-1563720223180-12e0e57a63f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Փոքրիկ խնջույք' },
  { id: 9, src: 'https://images.unsplash.com/photo 1571115173807-3b3bbd973e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Մեր խոհանոցը' },
];

const GalleryPage: React.FC = () => {
  return (
    <GalleryContainer>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Պատկերասրահ</SectionTitle>
        </motion.div>
        
        <GalleryGrid>
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
              </div>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </div>
    </GalleryContainer>
  );
};

export default GalleryPage;
