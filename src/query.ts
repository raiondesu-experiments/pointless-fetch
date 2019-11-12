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
export const query = (url: string) => (queryParams: Record<PropertyKey, any>) => {
  const query = Object.keys(queryParams)
    .filter(k => k && queryParams[k] !== undefined)
    .map((k): [string, string] =>
      Array.isArray(queryParams[k])
        ? [k, queryParams[k].join(',')]
      : typeof queryParams[k] === 'object'
        ? [k, JSON.stringify(queryParams[k])]
      : [k, queryParams[k]]
    )
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURI(value)}`)
    .join('&');

  const prefix = (String(url).indexOf('?') > -1 ? '&' : '?');

  return url + (query.length > 0 ? prefix + query : '');
};
