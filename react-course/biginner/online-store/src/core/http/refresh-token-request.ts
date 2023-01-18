import { AxiosInstance } from 'axios';
import { store } from '../../store';
import { authActions } from '../../store/auth-slice';

export const refreshTokenRequest = async (
  originalRequest: any,
  instance: AxiosInstance,
  accessToken: string
) => {
  originalRequest._retry = true;

  return await instance
    .request({
      baseURL: process.env['BASE_API_URL'],
      url: process.env['REFRESH_TOKEN_URL'],
      method: 'POST',
      data: { 'refresh-token': process.env['REFRESH_TOKEN'] },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    })
    .then((response: any) => {
      if (response.status === 200) {
        const accessTokenExpired = false;
        const accessToken = response?.data?.accessToken;
        store.dispatch(authActions.login({ accessToken, accessTokenExpired }));
        //  const state = store.getState();
        // console.log(state);
        originalRequest.headers.Authorization = 'Bearer ' + accessToken;
        return instance(originalRequest);
      }
      return instance(originalRequest);
    });
};
