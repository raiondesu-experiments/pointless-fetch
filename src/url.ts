import { join } from './util';

/**
 * Creates a sub-url factory
 *
 * Example usage
 *
 * ```ts
 *  const myBlog = subUrl('https://my-blog.com');
 *  'https://my-blog.com'
 *
 *  const user = myBlog('user');
 *  'https://my-blog.com/user'
 *
 *  const userPost = user((id: number) => `${id}/post`);
 *  (id: number) => 'https://my-blog.com/user/${id}/post'
 * ```
 */
export const subUrl = function (
  this: { base?: string },
  url: string | ((...args: any[]) => string)
) {
  const applyBase = (
    _url: (...args: any[]) => string
  ) => (...args: any[]) => {
    const concat = () => join(this ? this.base : undefined, _url(...args));

    const _subUrl = subUrl.bind({ base: concat() });
    _subUrl.toString = concat;

    return _subUrl;
  };

  return typeof url === 'string'
    ? applyBase(() => url)()
    : applyBase(url);
} as string & {
  (base: string): typeof subUrl;

  <F extends (...args: any[]) => string>(
    base: F
  ): (
    ...args: Parameters<F>
  ) => typeof subUrl;

  toString(): string;
};

subUrl.toString = () => '';

/**
 * Encodes an object into the plain URL as url-query-string
 *
 * ```js
 *  query('/list', {
 *    amount: 5,
 *    filters: ['price', 'date']
 *  })
 * ```
 *
 * returns
 * ```js
 *  '/list?amount=5&filters=price,date'
 * ```
 *
 * @param url a url to encode params into
 * @param queryParams query params in object form
 * @returns url with encoded params
 */
export function query(url: string, queryParams: object) {
  const query = Object.keys(queryParams)
    .filter(k => k && queryParams[k] !== undefined)
    .map((k): [string, string] => {
      if (Array.isArray(queryParams[k])) {
        return [queryParams[k].join(','), k];
      } else if (typeof queryParams[k] === 'object') {
        return [JSON.stringify(queryParams[k]), k];
      }

      return [queryParams[k], k];
    })
    .map(([value, key]) => `${encodeURIComponent(key)}=${encodeURI(value)}`)
    .join('&');

  const prefix = (url.indexOf('?') > -1 ? '&' : '?');

  return url + (query.length > 0 ? prefix + query : '');
}
