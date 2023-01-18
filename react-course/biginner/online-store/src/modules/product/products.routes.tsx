import React from 'react';
import AuthService from '../../auth/services/auth.service';
import CheckOut from '../../pages/checkout';
import Products from '../../pages/products';
import PurchesDone from '../../pages/purch-done';

export const ProductRoutes = [
  {
    path: 'product-list',
    element: <Products />,
  },
  {
    path: 'purch-done',
    element: <PurchesDone />,
  },
  {
    path: 'checkout',
    element: <CheckOut />,
  },
];
