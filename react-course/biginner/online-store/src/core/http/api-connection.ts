import axios from 'axios';
import { AuthInterceptor } from './auth-interceptor';
import { refreshToken } from './refresh-token';
import { store } from '../../store';
import * as dotenv from 'dotenv';

let axiosInterceptor: number = null; // outer variable

export const apiConnection = (node: string = null) => {
  const state = store.getState();
  const accessTocken = state.auth.accessToken;
  console.log(process.env['BASE_API_URL']);

  let instance = axios.create({
    baseURL: process.env['BASE_API_URL'],
  });
  if (node === 'agp') {
    instance = axios.create({
      baseURL: process.env['AGP_API_URL'],
    });
  } else if (node === 'mock') {
    instance = axios.create({
      baseURL: process.env['MOCK_API_URL'],
    });
  }

  if (!!axiosInterceptor || axiosInterceptor === 0) {
    instance.interceptors.request.eject(axiosInterceptor);
  }

  axiosInterceptor = instance.interceptors.request.use(
    (config) => AuthInterceptor(config, accessTocken),
    (error: any) => {
      Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      await refreshToken(error, instance, accessTocken);
    }
  );

  return instance;
};
