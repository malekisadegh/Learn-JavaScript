import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CartComponent from '../modules/cart/components/cart.component';
const CheckOut = (props: any) => {
  const [t] = useTranslation(['common']);
  return (
    <>
      <CartComponent></CartComponent>
    </>
  );
};

export default CheckOut;
