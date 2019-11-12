import { isBase, joinUrls } from './util';

export const defaultMerge = (v1: unknown, v2: unknown) => (
  typeof v1 === typeof v2
    ? Array.isArray(v1) && Array.isArray(v2)
        ? v1.concat(v2)
      : typeof v1 === 'object' && (!Array.isArray(v1) && !Array.isArray(v2))
        ? { ...v1, ...v2 as object }
    : v2
  : v2
);

export const mergeUrls = (url1: string, url2: string) => isBase(url2) ? url2 : joinUrls(url1, url2);

export function mergeHeaders(headers1?: HeadersInit, headers2?: HeadersInit) {
  const h = new Headers(headers1);
  const h2 = new Headers(headers2);

  h2.forEach((v, k) => h.append(k, v));

  return h;
}
