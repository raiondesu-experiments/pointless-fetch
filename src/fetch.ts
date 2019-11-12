import { TRequest, combine, request } from './request';

export const createFetch = <T>(
  req: TRequest,
  after: (res: Response) => T | Promise<T>,
  error?: (e: any) => never | T | Promise<T>
) => (
  finalRequest: TRequest = { url: '' }
) => fetch(request(combine(req, finalRequest)))
  .then(after)
  .catch(error);
