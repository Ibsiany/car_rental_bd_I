import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { CreateCar } from '../pages/CreateCar';
import { CreateRent } from '../pages/CreateRent';
import { GiveBack } from '../pages/GiveBack';
import { Home } from '../pages/Home';
import { Rent } from '../pages/Rent';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/give-back" element={<GiveBack />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/rent/create" element={<CreateRent />} />
        <Route path="/create-car" element={<CreateCar />} />
      </Router>
    </BrowserRouter>
  );
}
