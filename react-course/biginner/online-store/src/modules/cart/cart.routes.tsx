import React from 'react';
import AuthService from '../../auth/services/auth.service';
import CheckOut from '../../pages/checkout';

export const CartRoutes = [
  {
    path: 'checkout',
    element: <CheckOut />,
  },
];
