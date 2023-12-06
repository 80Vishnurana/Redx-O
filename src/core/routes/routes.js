// src/Routes.js
import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import routesConfig from './routesConfig';
import NotFound from '../parts/NotFound';

const RoutesComponent = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location.pathname])



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
