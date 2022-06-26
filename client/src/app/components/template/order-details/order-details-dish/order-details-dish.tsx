import { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { StatusType } from 'app/store/inventory';

import classnames from 'classnames';
import styles from './order-details-dish.module.scss';

interface OrderDetailsDishProps {
  description?: string;
  image: string;
  name: string;
  amount: number | string;
  price: number | string;
  status: StatusType;
  ingredients: string[];
}

export const OrderDetailsDish: FC<OrderDetailsDishProps> = ({
  description,
  image,
  name,
  amount,
  price,
  status,
  ingredients,
}) => {
  return (
    <div className={styles.orderDetailsDish}>
      <BsFillInfoCircleFill
        className={styles.icon}
        data-for={name}
        data-tip="React-tooltip"
      />
      <ReactTooltip
        id={name}
        place="top"
        type="dark"
        effect="float"
        className={styles.tooltip}
      >
        {description}
      </ReactTooltip>
      <div className={styles.imageBox}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.infoBox}>
        <h4 className={styles.title}>{name}</h4>
        <div className={styles.ingredients}>
          {ingredients.map((ingredient, index) => {
            if (index + 1 === ingredients.length) {
              return ingredient;
            }
            return `${ingredient}, `;
          })}
        </div>
        <div className={styles.details}>
          <div className={styles.amount}>
            <span>amount: {amount}</span>
          </div>
          <div className={styles.details}>
            <span className={styles.price}>
              <strong>Price:</strong> ${price}
            </span>
            <span className={styles.status}>
              Status:
              <strong>
                <span className={classnames(styles.statusText, styles[status])}>
                  {status}
                </span>
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
