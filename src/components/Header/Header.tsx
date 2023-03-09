import React from 'react';
import style from './Header.module.scss';

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <div className={style.header__logo}>
          <img
            src="./assets/logo-symbol.png"
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
