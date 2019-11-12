import { TRequest, combine, request } from './request';

export const createFetch = <T, E = void>(
  req: TRequest,
  after: (res: Response) => T,
  error: (e: any) => E
) => (
  finalRequest: TRequest = { url: '' }
) => fetch(request(combine(req, finalRequest))).then(after, error);
