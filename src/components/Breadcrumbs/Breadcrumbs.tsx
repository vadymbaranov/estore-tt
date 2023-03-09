import React from 'react';
import style from './Breadcrumbs.module.scss';

export const Breadcrumbs: React.FC = ({ breads }) => {
  return (
    <ul className={style.breadcrumbs}>
      <li className={style.breadcrumbs__item}>
        <Link>
        </Link>
      </li>
    </ul>
  );
};
