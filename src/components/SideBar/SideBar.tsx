import React from 'react';

export const SideBar: React.FC = () => {
  return (
    <div className="sidebar__container">
      <div className="brands__filter">
        <h5>Brands</h5>
        <input
          type="checkbox"
          value=""
        />
      </div>

      <div className="price__filter">
        <h5>Price range</h5>
        <div className="range__wrap">
          <input min="0" max="3000" type="range" />
          <input min="0" max="3000" type="range" />
        </div>
        <div className="range__box">
          <label htmlFor="min-input">
            Min
            <input id="min-input" type="number" />
          </label>
          <label htmlFor="max-input">
            Max
            <input id="max-input" type="number" />
          </label>
        </div>
      </div>
    </div>
  );
};
