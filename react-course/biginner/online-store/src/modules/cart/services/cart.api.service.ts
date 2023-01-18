import { postApi, getApi } from '../../../core/http/call-api';

const payByAgp = (data: any) => {
  return postApi(
    '/payment-initiation-service/api/v1/consent/initial',
    data,
    'agp'
  );

  // return new Promise((resolve, reject) => {
  //   resolve({
  //     body: {
  //       data: {
  //         invoiceid: 2121255463354415,
  //       },
  //     },
  //   });
  // });
};

const CartApiService = { payByAgp };

export default CartApiService;
