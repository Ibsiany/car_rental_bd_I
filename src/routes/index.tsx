import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </BrowserRouter>
  );
}
