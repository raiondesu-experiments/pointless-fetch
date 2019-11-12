import { join, isBase } from './util';

export type TRequest = RequestInit & { url: string };

export const request = ({ url, ...init }: TRequest) => new Request(url, init);

/**
 * Combines two Request configs
 */
export const combine = (request: Request, addon: TRequest | Request) => new Request({
  ...request,
  url: isBase(addon.url) ? addon.url : join(request.url, addon.url),
}, addon);
