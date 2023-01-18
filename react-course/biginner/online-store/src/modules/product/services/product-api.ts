import { getApi } from '../../../core/http/call-api';
import { productList } from '../../../faker/product-list';

const getProductList = () => {
  // return getApi('/');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 300);
  });
};
const ProductApiService = { getProductList };

export default ProductApiService;
