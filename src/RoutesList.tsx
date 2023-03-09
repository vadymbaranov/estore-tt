import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ElectronicsPage } from './pages/ElectronicsPage';
import { ProductPage } from './pages/ProductPage';

export const RoutesList: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="electronics"
        element={<ElectronicsPage />}
      />
      <Route
        path="electronics/:electronicsid"
        element={<ProductPage />}
      />
    </Routes>
  );
};
