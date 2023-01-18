import { apiConnection } from './api-connection';
import { Method } from 'axios';
import { errorHandling } from './error-handling';

const requestMethods = {
  get: 'GET',
  post: 'post',
  put: 'put',
  delete: 'delete',
  head: 'head',
  patch: 'patch',
  link: 'link',
  unlink: 'unlink',
  options: 'options',
  purge: 'purge',
};

export const apiCall = async (
  url: string,
  method: string,
  data?: any,
  secure?: string
) => {
  try {
    const response = await apiConnection(secure).request({
      url,
      method,
      data,
    });
    return response.data;
  } catch (error: any) {
    errorHandling(error);
    return Promise.reject(error);
  }
};

export const getApi = (url: string, data?: any, secure?: string) => {
  return apiCall(url, requestMethods.get, data, secure);
};

export const postApi = (url: string, data?: any, secure?: string) => {
  return apiCall(url, requestMethods.post, data, secure);
};

export const putApi = (url: string, data?: any, secure?: string) => {
  return apiCall(url, requestMethods.put, data, secure);
};

export const deleteApi = (url: string, data?: any, secure?: string) => {
  return apiCall(url, requestMethods.delete, data, secure);
};
