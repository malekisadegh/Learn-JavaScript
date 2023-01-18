import { AxiosInstance } from 'axios';
import { isEmptyObj } from '../../utils';
import dotenv from 'dotenv';
import { refreshTokenRequest } from './refresh-token-request';

export const refreshToken = async (
  error: any,
  instance: AxiosInstance,
  accessTocken: string
) => {
  const refreshTokenUrl = process.env['REFRESH_TOKEN_URL'];
  const loginUrl = '/login';
  const originalRequest = error?.config;
  const dontRefresh = false;
    // originalRequest?.url.includes(refreshTokenUrl) ||
    // originalRequest?.url.includes(loginUrl) ||
    // error.response.data.code === 'InvalidCredentials';
  const unAuthorized =
    error.response &&
    (error.response.status === 401 || error.response.status === 403);

  if (isEmptyObj(error.response)) {
    return Promise.reject(error);
  }
  if (unAuthorized && dontRefresh) {
    return Promise.reject(error);
  }

  // if (unAuthorized && !originalRequest._retry) {
  //   refreshTokenRequest(originalRequest, instance, accessTocken);
  // }
  return Promise.reject(error);
};
