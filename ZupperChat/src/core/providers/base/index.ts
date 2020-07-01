import Constants from 'expo-constants';

const apiHeaders = new Headers();

apiHeaders.append('Content-Type', 'application/json');

const basePath = Constants.manifest.extra.API_URL;

export const getRequest = (url: string) =>
  fetch(`${basePath}${url}`, {
    method: 'GET',
    headers: apiHeaders,
  });

export const postRequest = (url: string, body: string | undefined | any) =>
  fetch(`${basePath}${url}`, {
    method: 'POST',
    headers: apiHeaders,
    body: JSON.stringify(body),
  });

export const putRequest = (url: string, body?: string | undefined | any) =>
  fetch(`${basePath}${url}`, {
    method: 'PUT',
    headers: apiHeaders,
    body: JSON.stringify(body),
  });

export const deleteRequest = (url: string) =>
  fetch(`${basePath}${url}`, {
    method: 'DELETE',
    headers: apiHeaders,
  });

export default {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
};
