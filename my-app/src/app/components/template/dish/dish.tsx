import { FC } from 'react';
import { BsPlusLg, BsInfoLg } from 'react-icons/bs';

import styles from './dish.module.scss';
interface DishProps {
  id: string | number;
  image: string;
  name: string;
  price: number;
  ingredients: string[];
  description?: string;
}

export const Dish: FC<DishProps> = ({
  name,
  id,
  image,
  price,
  ingredients,
  description,
}) => {
  const displayIngredients = ingredients.map((el) => {
    return el + ', ';
  });
  return (
    <div className={styles.dish}>
      <div className={styles.infoBox}>
        <div className={styles.content}>
          <h3 className={styles.title}>{name}</h3>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <span className={styles.ingredient}>{displayIngredients}</span>
        </div>
        <div className={styles.bar}>
          <BsInfoLg className={styles.icon} />
          <BsPlusLg className={styles.icon} />
        </div>
      </div>
      <div className={styles.imageBox}>
        <img src={image} alt={name} className={styles.image} />
      </div>
    </div>
  );
};
