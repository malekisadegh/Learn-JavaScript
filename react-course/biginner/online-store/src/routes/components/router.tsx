import React from 'react';
import { useRoutes } from 'react-router-dom';
import P404 from '../../pages/404';
import Admin from '../../pages/admin';
import Landing from '../../pages/landing';
import Dashboard from '../../pages/dashboard';
import Analytics from '../../pages/analytics';
import AdminpanelLayout from '../../layout/admin-panel/adminpanel-layout';
import CleanLayout from '../../layout/clean-layout';
import LoginPage from '../../pages/login-page';
import P401 from '../../pages/401';
import { ProductRoutes } from '../../modules/product/products.routes';
import SiteLayout from '../../layout/site/site-layout';
import { CartRoutes } from '../../modules/cart/cart.routes';

const AppRouter = () => {
  const publicPages = [
    {
      index: true,
      element: <Landing authority="public" />,
    },
    {
      path: 'landing',
      element: <Landing authority="public" />,
    },
    {
      path: 'login',
      element: <LoginPage authority="public" />,
    },
    {
      path: '/P401',
      element: <P401 authority="public" />,
    },
    {
      path: '*',
      element: <P404 authority="public" />,
    },
  ];

  const adminPages = [
    {
      path: 'dashboard',
      element: (
        <Dashboard authority={'public'} title={'dashboard'} hideHeader={true} />
      ),
    },
    {
      path: 'analytics',
      element: <Analytics authority="public" />,
    },
    {
      path: 'admin',
      element: <Admin authority="public" />,
    },
  ];

  const element = useRoutes([
    {
      path: '/',
      element: <CleanLayout childs={publicPages} authority="public" />,
      children: publicPages,
    },
    {
      path: '/admin',
      element: <AdminpanelLayout childs={adminPages} authority="public" />,
      children: adminPages,
    },
    {
      path: '/product',
      element: <SiteLayout childs={ProductRoutes} authority="public" />,
      children: ProductRoutes,
    },
    {
      path: '/cart',
      element: <SiteLayout childs={CartRoutes} authority="public" />,
      children: ProductRoutes,
    },
  ]);

  return element;
};
export default AppRouter;
