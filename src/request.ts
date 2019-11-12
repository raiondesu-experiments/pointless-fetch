import { mergeHeaders, mergeUrls, defaultMerge } from './merge';

export type TRequest =
  | RequestInit & { url: string }
  | Request;

export const request = ({ url, ...init }: TRequest) => new Request(url, init);

export type TCombiner = {
  (r: TRequest, addon: TRequest): Request;
} & {
  -readonly[key in keyof TRequest]?: (value1: TRequest[key], value2: TRequest[key]) => TRequest[key];
};

/**
 * Combines two Request configs using special merge strategies for each field.
 *
 * Each merge strategy is stored in a property with the same name
 * as the corresponding Request property
 * and can be replaced at any time.
 */
export const combine: TCombiner = (req1: TRequest, req2: TRequest) => request(
  Object.keys(req1).concat(Object.keys(req2))
  .reduce((res, key) => (
    res[key] = (combine[key] || defaultMerge)(req1[key], req2[key]),
    res
  ), {} as TRequest)
);

combine.headers = mergeHeaders;
combine.url = mergeUrls;
