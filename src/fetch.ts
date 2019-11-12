import { TRequest, combine } from './request';

export const createFetch = <T, E = void>(
  request: TRequest,
  after: (res: Response) => T,
  error: (e: any) => E
) => (
  finalRequest: TRequest = { url: '' }
) => fetch(combine(request, finalRequest)).then(after, error);
