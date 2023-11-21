// src/RoutesConfig.js
import { lazy } from 'react';

const Home = lazy(() => import('../../Pages/Home'));
const Contact = lazy(() => import('../../Pages/Contact'))
const About = lazy(() => import('../../Pages/About'))
const Products = lazy(() => import('../../Pages/Products'))
const ValueChain = lazy(() => import('../../Pages/Features/ValueChain'))
const Sustainability = lazy(() => import('../../Pages/Features/Sustainability'))
const OurBusiness = lazy(() => import('../../Pages/Features/OurBusiness'))

const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'/contact',
    element: <Contact/>
  },
  {
    path:'/about',
    element: <About/>
  },
  {
    path:'/products',
    element: <Products/>
  },
  {
    path:'/about/value-chain',
    element:<ValueChain/>
  },
  {
    path:'/about/sustainability',
    element:<Sustainability/>
  },
  {
    path:'/about/our-business',
    element:<OurBusiness/>
  }

  
];

export default routesConfig;
