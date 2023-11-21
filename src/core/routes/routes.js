// src/Routes.js
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routesConfig from './routesConfig';
import NotFound from '../parts/NotFound';

const RoutesComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
