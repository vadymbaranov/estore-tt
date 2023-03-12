/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Breadcrumbs.module.scss';
import backArrow from '../../assets/navBackArrow.svg';

type Props = {
  crumbs: Array<{
    title: string,
    path: string,
  }>;
};

export const Breadcrumbs: React.FC<Props> = ({ crumbs }) => (
  <ul className={style.breadcrumbs}>
    {crumbs.map(({ title, path }) => {
      return (
        <li className={style.breadcrumbs__item} key={path}>
          <Link
            to={path}
            className={style.breadcrumbs__link}
          >
            {title !== 'home'
              ? title
              : 'Home'}
            {(window.innerWidth <= 999 && title === 'home') && (
              <img src={backArrow} alt="navigate back" className={style.breadcrumbs__back} />
            )}
          </Link>
        </li>
      );
    })}
  </ul>
);
