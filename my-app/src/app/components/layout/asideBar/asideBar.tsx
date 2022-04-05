import { FC } from 'react';

import { MdMenuBook } from 'react-icons/md';
import { GrNotes } from 'react-icons/gr';
import { BiCommentDetail } from 'react-icons/bi';
import { SiContactlesspayment } from 'react-icons/si';
import { FaUserTie } from 'react-icons/fa';

import classNames from 'classnames';
import styles from './asideBar.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

const MainNav = [
  { Icon: MdMenuBook, name: 'Menu', path: '/menu' },
  { Icon: GrNotes, name: 'Order', path: '/order' },
  { Icon: BiCommentDetail, name: 'Review', path: '/review' },
  { Icon: SiContactlesspayment, name: 'Payment', path: '/payment' },
  { Icon: FaUserTie, name: 'Call waiter', path: '/waiter' },
];

export const AsideBar: FC = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>Logo</div>
      <nav>
        <ul className={styles.list}>
          {MainNav.map(({ Icon, name, path }, index) => (
            <li
              key={index}
              className={classNames(styles.item, {
                [styles.active]: pathName === path,
              })}
            >
              <NavLink to={path}>
                <Icon className={styles.icon} /> <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
