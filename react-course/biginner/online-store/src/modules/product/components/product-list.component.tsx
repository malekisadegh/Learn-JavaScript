import { t } from 'i18next';
import { number } from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BasketIcon from '../../../shared/snipets/basket-icon.component';
import { Product } from '../models/product.type';
import ProductApiService from '../services/product-api';
import { store } from '../../../store';
import './product-list.scss';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';
const ProductListComponent = (props: any) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [t] = useTranslation(['common']);
  const state = store.getState();
  const dispatch = useDispatch();

  useEffect(() => {
    ProductApiService.getProductList().then((res: any) => {
      setProductList(res.data);
    });
  }, []);

  const addToCart = (product: Product) => {
    product.quantity = 1;
    dispatch(
      cartActions.addToCart({
        shopingCount: 1,
        shopingproduct: product,
      })
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 ">
        {productList.map((product, i) => {
          return (
            <div className="w-full px-4 lg:px-0" key={i}>
              <div className="p-3 bg-white rounded shadow-md">
                <div className="relative w-full mb-3 lg:mb-0">
                  <img
                    src={product.imagePath}
                    className="object-fill w-full rounded h-60"
                  />
                </div>
                <div className="flex-auto p-2 justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="flex items-center justify-between w-full min-w-0 ">
                      <h2 className="mr-auto text-lg cursor-pointer hover:text-gray-900">
                        {product.title}
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="mt-1 text-xl font-semibold">
                      {product.price}
                    </div>
                    <div
                      onClick={() => addToCart(product)}
                      className="mt-3 text-xl font-semibold text-red-700 hover:text-red-800 hover:scale-150 transition-all cursor-pointer"
                    >
                      <BasketIcon></BasketIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductListComponent;
