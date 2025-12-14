import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MenuContainer = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  background-color: ${({ theme }) => theme.colors.background};
`;

const MenuHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const MenuTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const TabButton = styled.button<{ $isActive: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.primary : 'transparent'};
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.white : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  
  &:hover {
    background: ${({ theme, $isActive }) => 
      $isActive ? theme.colors.primary : 'rgba(0, 0, 0, 0.05)'};
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const MenuCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    padding-bottom: ${({ theme }) => theme.spacing.sm};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const MenuItem = styled(motion.div)`
  background: white;
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  
  .item-info {
    flex: 1;
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.9rem;
    margin-bottom: 0;
  }
  
  .price {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.accent};
    white-space: nowrap;
  }
`;

const SpecialOffer = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 12px;
  margin: ${({ theme }) => theme.spacing.xxl} auto;
  max-width: 800px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  h2 {
    color: white;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 1.1rem;
  }
  
  .special-price {
    font-size: 2rem;
    font-weight: bold;
    margin: ${({ theme }) => theme.spacing.md} 0;
    display: block;
  }
`;

const menuItems = {
  macarons: [
    { id: 1, name: 'Դասական Վանիլ', description: 'Նուրբ վանիլի կրեմ թարմ վանիլի հատիկներով', price: '800 դրամ' },
    { id: 2, name: 'Շոկոլադե', description: 'Հարուստ դարչնագույն շոկոլադի կրեմ', price: '850 դրամ' },
    { id: 3, name: 'Լավանդա-Մեղր', description: 'Լավանդայի անուշաբույր կրեմ մեղրի նրբհամով', price: '900 դրամ' },
    { id: 4, name: 'Ծիրան-Բալ', description: 'Թարմ ծիրանի և բալի ջեմով', price: '850 դրամ' },
    { id: 5, name: 'Կիտրոն-Մատակ', description: 'Թարմ կիտրոնի կրեմ մատակի նրբհամով', price: '850 դրամ' },
  ],
  croissants: [
    { id: 6, name: 'Կարամելային Կրուասան', description: 'Փափուկ կարամելացված կրուասան կարամելի լցոնով', price: '1000 դրամ' },
    { id: 7, name: 'Շոկոլադե Կրուասան', description: 'Փափուկ կարամելացված կրուասան կաթնային շոկոլադի լցոնով', price: '1100 դրամ' },
    { id: 8, name: 'Պանրով Կրուասան', description: 'Խմորիչային կրուասան հալվող պանիրով', price: '1200 դրամ' },
  ],
  baklava: [
    { id: 9, name: 'Դասական Փախլավա', description: 'Փխրուն շերտեր ընկույզի միջուկով և մեղրի օշարակով', price: '1500 դրամ' },
    { id: 10, name: 'Մեղրային Փախլավա', description: 'Ընտիր ընկույզներով և մեղրի օշարակով', price: '1600 դրամ' },
    { id: 11, name: 'Շոկոլադե Փախլավա', description: 'Դասական փախլավա դարչնագույն շոկոլադի շերտով', price: '1700 դրամ' },
  ],
  coffee: [
    { id: 12, name: 'Էսպրեսսո', description: 'Ուժեղ և արոմատիկ', price: '800 դրամ' },
    { id: 13, name: 'Ամերիկանո', description: 'Էսպրեսսո տաք ջրով', price: '900 դրամ' },
    { id: 14, name: 'Կապուչինո', description: 'Էսպրեսսո տաք կաթով և կաթնային փրփուրով', price: '1200 դրամ' },
    { id: 15, name: 'Լատտե', description: 'Էսպրեսսո շատ տաք կաթով', price: '1300 դրամ' },
    { id: 16, name: 'Մոկա', description: 'Էսպրեսսո, տաք շոկոլադ, տաք կաթ', price: '1400 դրամ' },
  ],
};

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('macarons');

  const categories = [
    { id: 'macarons', name: 'Մակարոններ' },
    { id: 'croissants', name: 'Կրուասաններ' },
    { id: 'baklava', name: 'Փախլավաներ' },
    { id: 'coffee', name: 'Սուրճ և Խմիչքներ' },
  ];

  return (
    <MenuContainer>
      <div className="container">
        <MenuHeader>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Մեր Մենյուն
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Բոլոր մեր խմորեղենները պատրաստվում են օրական թարմ բաղադրիչներով՝ հարգելով
            ավանդական բաղադրատոմսերը և ավելացնելով մեր սեփական հատուկ հպումը:
          </motion.p>
        </MenuHeader>

        <MenuTabs>
          {categories.map((category) => (
            <TabButton
              key={category.id}
              $isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </TabButton>
          ))}
        </MenuTabs>

        <MenuGrid>
          <MenuCategory>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {categories.find(c => c.id === activeCategory)?.name}
            </motion.h2>
            
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <MenuItem
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="price">{item.price}</span>
              </MenuItem>
            ))}
          </MenuCategory>
        </MenuGrid>

        <SpecialOffer
          as={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Օրվա Հատուկ Առաջարկ</h2>
          <p>Զույգ մակարոններ և մեկ սուրճ ընդամենը</p>
          <span className="special-price">2000 դրամ</span>
          <p>Վայելեք ձեր սիրելի համադրությունը մեր թարմ խմորեղենից և սուրճից:</p>
        </SpecialOffer>
      </div>
    </MenuContainer>
  );
};

export default MenuPage;
