import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import AuthApiService from '../../../auth/services/auth.api.services';
import { store } from '../../../store';
import { cartActions } from '../../../store/cart-slice';
import { agpActions } from '../../../store/agp-slice';
import { Product } from '../../product/models/product.type';
import CartApiService from '../services/cart.api.service';
import { useSearchParams } from 'react-router-dom';
const CartComponent = (props: any) => {
  const state = store.getState();
  const dispatch = useDispatch();
  let totalAmnt = 0;

  const [searchParams, setSearchParams] = useSearchParams();
  const agpParam = searchParams.get('agp');
  const [t] = useTranslation(['common']);
  let shopingList: Product[] = state.cart.shopingList;
  if (agpParam) {
    shopingList = [
      {
        id: 4690,
        title: 'شیر کاکائو خانگی',
        price: 430500,
        productId: 8904290526277,
        description: 'تهیه شده از شیر تازه',
        categoryTitle: 2,
        categoryId: 1,
        imagePath: 'assets/public/images/products/homem-made-coca-milk.jpg',
        status: 'ended',
        quantity: 1,
      },
      {
        id: 67181,
        title: 'شیر بادام خانگی',
        price: 415651,
        productId: 4564572119464,
        description: 'تهیه شده از شیر تازه',
        categoryTitle: 0,
        categoryId: 1,
        imagePath: 'assets/public/images/products/homem-made-almond-milk.jpg',
        status: 'avalable',
        quantity: 1,
      },
    ];
  }

  const calculateTotalAmnt = (amnt: number, qty: number) => {
    const _t = amnt * qty;
    totalAmnt += _t;
    return _t;
  };

  const loginToAgp = () => {
    AuthApiService.loginToAgp().then((res) => {
      dispatch(
        agpActions.login({
          accessToken: res.data.access_token,
        })
      );
      sendInvoiceToAgp();
    });
  };

  const sendInvoiceToAgp = () => {
    const _invoice = {
      amount: totalAmnt,
      paymentReason: 'خرید اینترنتی',
    };
    CartApiService.payByAgp(_invoice).then((res: any) => {
      const _invoiceid = res.data.invoiceId;
      const ru =
        window.location.protocol +
        '//' +
        window.location.host.substring(0, window.location.host.indexOf(':'));
      window.location.href =
        ru + ':4400/app/#/acp/confirm-invoice?invoiceid=' + _invoiceid;
    });
  };

  return (
    <>
      <div className="flex justify-center my-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <h1 className="text-xl text-red-500">{t('shoping.basket')}</h1>
          <div className="flex-1">
            <table className="w-full text-sm lg:text-base">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="text-center">{t('product')}</th>
                  <th className="text-center pl-5">{t('quantity')}</th>
                  <th className="text-center md:table-cell">
                    {t('unit.price')}
                  </th>
                  <th className="text-center">{t('total.price')}</th>
                </tr>
              </thead>
              <tbody>
                {shopingList.map((prod: Product, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center">
                        <p className="mb-2 text-center">{prod.title}</p>
                      </td>
                      <td className="justify-center flex mt-6">
                        <div className="w-20 h-10">
                          <div className="relative flex flex-row w-full h-8">
                            {prod.quantity}
                          </div>
                        </div>
                      </td>
                      <td className="hidden text-center md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          {prod.price}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="text-sm lg:text-base font-medium">
                          {calculateTotalAmnt(prod.quantity, prod.price)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gray-100 py-3 rounded-lg">
                  <td></td>
                  <td></td>
                  <td className="text-center">{t('total.amount')}</td>
                  <td className="text-center text-lg">{totalAmnt}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            {!agpParam && (
              <button
                onClick={() => loginToAgp()}
                className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-green-800 rounded-full shadow item-center hover:bg-green-700 focus:shadow-outline focus:outline-none"
              >
                <span className="ml-2 mt-5px">{t('procceed.checkout')}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
