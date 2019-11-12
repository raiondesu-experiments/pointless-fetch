import { joinUrls } from './util';

export type TSubUrlFactory = string & {
  (base: string): typeof subUrl;

  <F extends (...args: any[]) => string>(
    base: F
  ): (
    ...args: Parameters<F>
  ) => typeof subUrl;

  toString(): string;
};

/**
 * Creates a sub-url factory
 *
 * Example usage:
 *
 * ```ts
 *  const myBlog = subUrl('https://my-blog.com');
 *  // result:
 *  'https://my-blog.com'
 *
 *  const user = myBlog('user');
 *  // result:
 *  'https://my-blog.com/user'
 *
 *  const userPost = user((userId: number, postId: number) => `${userId}/post/${postId}`);
 *  // result:
 *  (userId: number, postId: number) => 'https://my-blog.com/user/${userId}/post/${postId}'
 * ```
 */
export const subUrl = <TSubUrlFactory> function (
  this: { base?: string },
  url: string | ((...args: any[]) => string)
) {
  const applyBase = (
    _url: (...args: any[]) => string
  ) => (...args: any[]) => {
    const concat = () => joinUrls(this?.base, _url(...args));

    const _subUrl = subUrl.bind({ base: concat() });
    _subUrl.toString = concat;

    return _subUrl;
  };

  return typeof url === 'string'
    ? applyBase(() => url)()
    : applyBase(url);
};

subUrl.toString = () => '';
