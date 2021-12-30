import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { Routes as RoutePaths } from './routes';
import MainPage from 'app/pages/main-page/main-page';

const RouterComponent = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={RoutePaths.DEFAULT} element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);

export default RouterComponent;
