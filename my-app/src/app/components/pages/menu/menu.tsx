import { FC, useState } from 'react';
import { Container } from 'app/components/layout/container';
import { NavMenu } from 'app/components/template/nav/menu/navMenu';
import { Dish } from 'app/components/template/dish/dish';
import mignon from 'assets/images/filet-mignon.jpg';
import jackDaniels from 'assets/images/JackDaniels.jpg';
import juicyChicken from 'assets/images/JuicyChicken.jpg';

import styles from './menu.module.scss';

interface DishProps {
  id: string | number;
  image: string;
  name: string;
  price: number;
  ingredients: string[];
  description?: string;
  type: string;
}

const dishes: DishProps[] = [
  {
    id: '1',
    name: 'Filet Mignon',
    price: 69,
    ingredients: [
      '220g polędwicy wołowej',
      'frytki',
      'sałatka z papryczka piquillo',
    ],
    image: mignon,
    type: 'starters',
  },
  {
    id: '2',
    name: `Jack Daniel's Rib Eye Steak`,
    price: 58,
    ingredients: [
      '220g antrykotu z grilla',
      'frytki',
      'roszponka',
      'pomidorki koktajlowe',
      'sos barbecue',
      'czosnek',
    ],
    image: jackDaniels,
    type: 'steak',
  },
  {
    id: '3',
    name: 'Juicy Chicken Breast',
    price: 34,
    ingredients: [
      '200g piersi z kurczaka marynowanej w cytrusach',
      'frytki',
      'roszpunka',
    ],
    image: juicyChicken,
    type: 'potatoes',
  },
];

export const Menu: FC = () => {
  const [active, setActive] = useState('starters');
  const displayMenu = dishes.map((dish, index) => {
    if (dish.type === active) {
      return <Dish key={index} {...dish} />;
    }
    return null;
  });

  return (
    <div className={styles.menu}>
      <Container className={styles.container}>
        <NavMenu {...{ active, setActive }} />
      </Container>
      <Container>
        <div className={styles.card}>{displayMenu}</div>
      </Container>
    </div>
  );
};
