import { join } from '../util';

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
