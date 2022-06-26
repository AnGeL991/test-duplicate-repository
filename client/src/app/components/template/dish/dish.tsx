import { FC } from "react";
import { BsPlusLg, BsInfoLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addDish } from "app/store/order/reducer";

import styles from "./dish.module.scss";
interface DishProps {
  id: string;
  image: string;
  name: string;
  price: number;
  ingredients: string[];
  description?: string;
  type?: string;
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
    return el + ", ";
  });

  const dispatch = useDispatch();

  const handleAddDish = () => {
    dispatch(
      addDish({
        name,
        image,
        price,
        ingredients,
        description,
        id,
        type: "steaksChops",
        amount: 1,
        status: "in Prepare",
      })
    );
  };

  return (
    <div className={styles.dish}>
      <div className={styles.infoBox}>
        <div className={styles.content}>
          <div>
            <h3 className={styles.title}>{name}</h3>
            <span className={styles.ingredient}>{displayIngredients}</span>
          </div>

          <span className={styles.price}>{Number(price).toFixed(2)} zł</span>
        </div>
        <div className={styles.bar}>
          <BsInfoLg className={styles.icon} />
          <BsPlusLg className={styles.icon} onClick={handleAddDish} />
        </div>
      </div>
      <div className={styles.imageBox}>
        <img src={image} alt={name} className={styles.image} />
      </div>
    </div>
  );
};
