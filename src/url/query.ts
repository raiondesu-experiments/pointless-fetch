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
