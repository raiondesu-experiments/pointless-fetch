import { TRequest } from './request';

export type TRequestMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRAC';

export const method = (method: string) => (request: TRequest) => ({
  ...request,
  method,
});

/**
 * Sets request's method to `GET`.
 */
export const get = method('GET');

/**
 * Sets request's method to `HEAD`.
 */
export const head = method('HEAD');

/**
 * Sets request's method to `POST`.
 */
export const post = method('POST');

/**
 * Sets request's method to `PUT`.
 */
export const put = method('PUT');

/**
 * Sets request's method to `DELETE`.
 */
export const del = method('DELETE');

/**
 * Sets request's method to `CONNECT`.
 */
export const connect = method('CONNECT');

/**
 * Sets request's method to `OPTIONS`.
 */
export const options = method('OPTIONS');

/**
 * Sets request's method to `TRAC`.
 */
export const trac = method('TRAC');
