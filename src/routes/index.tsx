import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Rent } from '../pages/Rent';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
      </Router>
    </BrowserRouter>
  );
}
