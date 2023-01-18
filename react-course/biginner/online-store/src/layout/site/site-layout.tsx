import React, { useEffect, Children } from 'react';
import { Outlet } from 'react-router-dom';
import RouteGuard from '../../routes/components/route-guard';
import SiteNavbar from './site-navbar';
import './site-layout.scss';

const SiteLayout = (props) => {
  return (
    <>
      <RouteGuard {...props}>
        <SiteNavbar></SiteNavbar>
        <Outlet />
      </RouteGuard>
    </>
  );
};

export default SiteLayout;
