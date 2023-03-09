import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/logo-symbol.png';

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <div className={style.header__logo}>
          <img
            src={logo}
            alt="shop logo"
            className={style.logo}
          />
        </div>

        <div className={style.header__title}>
          <p className={style.title__task}>Frontend task |&nbsp;</p>
          <p className={style.title__author}>Vadym Baranov</p>
        </div>
      </div>
    </header>
  );
}
