import React, { useEffect, Children, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';
import { cartActions } from '../../store/cart-slice';
import { useNavigate } from 'react-router-dom';

const SiteNavbar = (props: any) => {
  const state = store.getState();

  const [t] = useTranslation(['common']);
  let navigate = useNavigate();
  const [shopingCount, setShopingCount] = useState(state.cart.shopingCount);
  const [shoppingAnimation, setShoppingAnimation] = useState('');
  const shopingBasketCount = useSelector(
    (state: any) => state.cart.shopingCount
  );
  useEffect(() => {
    addToCart();
  }, [shopingBasketCount]);

  const addToCart = () => {
    setShopingCount(shopingBasketCount);
    setShoppingAnimation('scale-150');
    setTimeout(() => {
      setShoppingAnimation('');
    }, 1000);
  };
  const checkoutShoping = () => {
    return navigate('/product/checkout');
  };

  return (
    <>
      <nav className="navbar avbar-wr">
        <div className="navbar-container">
          <div className="flex">
            <img
              className="w-8 "
              src="assets/images/logo/shopping-bag-logo.png"
            />
            <div className="mt-3 mr-4">
              <h1>
                <a href="/#/product/product-list/">{t('app.name')}</a>
              </h1>
            </div>
          </div>
          <div className="flex items-center relative">
            <div className="dropdown relative">
              <div
                className={'basket-icon transition-all ' + shoppingAnimation}
                onClick={() => checkoutShoping()}
                id="dropdownMenuButton1"
                role="button"
              >
                <svg
                  aria-hidden="true"
                  data-icon="shopping-cart "
                  className={'w-4 transition-all ' + shoppingAnimation}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                  ></path>
                </svg>
                <span className="basket-counter">{shopingCount}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SiteNavbar;
