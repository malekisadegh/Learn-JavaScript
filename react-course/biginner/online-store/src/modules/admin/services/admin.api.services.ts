import { getApi } from '../../../core/http/call-api';
import { AdminMenuData } from '../faker/admin.menu';

const getAdminMenu = () => {
  // return getApi('/');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(AdminMenuData);
    }, 300);
  });
};
const AdminApiService = { getAdminMenu };

export default AdminApiService;
