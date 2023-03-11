import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
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
        element={<Navigate to="/" replace />}
      />
      <Route
        path="electronics/:electronicsId"
        element={<ProductPage />}
      />
    </Routes>
  );
};
