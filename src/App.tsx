import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { RoutesList } from './ReoutesList';

export const App = () => (
  <div className="app">
    <Header />
    <main className="app__page page">
      <div className="page__container">
        <RoutesList />
      </div>
    </main>
  </div>
);
