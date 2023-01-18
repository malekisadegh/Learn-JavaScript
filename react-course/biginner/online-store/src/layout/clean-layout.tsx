import React, { useEffect, Children } from 'react';
import { Outlet } from 'react-router-dom';
import RouteGuard from '../routes/components/route-guard';
const CleanLayout = (props) => {
  return (
    <>
      <RouteGuard {...props}>
        <Outlet />
      </RouteGuard>
    </>
  );
};

export default CleanLayout;
