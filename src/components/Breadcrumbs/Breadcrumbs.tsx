/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Breadcrumbs.module.scss';
import backArrow from '../../assets/navBackArrow.svg';

type Props = {
  crumbs: Array<{
    title: string;
    path: string;
  }>;
};

export const Breadcrumbs: React.FC<Props> = ({ crumbs }) => {
  const visibleArea = window.innerWidth;

  return (
    <ul className={style.breadcrumbs}>
      {crumbs.map(({ title, path }) => {
        return (
          <li className={style.breadcrumbs__item} key={path}>
            <Link to={path} className={style.breadcrumbs__link}>
              {title !== 'home' ? title : (
                visibleArea <= 999 ? (
                  <img
                    src={backArrow}
                    alt="Back"
                    className={style.breadcrumbs__arrow}
                  />
                ) : 'Home')}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
