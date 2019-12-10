import { joinUrls, isBase } from './util';

export type TSubUrlContext = { base?: string; url?: string } | null | undefined;

export type TSubUrlFactory = string & {
  <F extends (...args: any[]) => string>(
    this: TSubUrlContext | void,
    base: F
  ): (...args: Parameters<F>) => TSubUrlFactory;

  (
    this: TSubUrlContext | void,
    base?: string
  ): TSubUrlFactory;

  toString(): string;
};

/**
 * Creates a sub-url factory
 *
 * Example usage:
 *
 * ```ts
 *  const myBlog = subUrl('https://my-blog.com');
 *  result: 'https://my-blog.com'
 *
 *  const user = myBlog('user');
 *  result: 'https://my-blog.com/user'
 *
 *  user('https://google.com')
 *  result: 'https://google.com/user'
 *
 *  user.call({ base: 'https://google.com' })
 *  result: 'https://google.com/user'
 *
 *  user.call({ base: 'https://google.com', url: 'blog' })
 *  result: 'https://google.com/user/blog'
 *
 *  user.call({ base: 'https://google.com', url: 'blog' }, 'post')
 *  result: 'https://google.com/user/blog/post'
 *
 *  const userPost = user((userId: number, postId: number) => `${userId}/post/${postId}`);
 *  result: (userId: number, postId: number) => 'https://my-blog.com/user/${userId}/post/${postId}'
 * ```
 */
export const suburl = <TSubUrlFactory> function (
  this: TSubUrlContext,
  url?: string | ((...args: any[]) => string)
) {
  if (typeof url === 'function') {
    return (...args: any[]) => suburl.call(this, url(...args));
  }

  // If context is present, but trying to set a new base
  // - reset the context
  if (this?.base && isBase(url)) {
    return suburl(joinUrls(url, this.url));
  }

  const context: TSubUrlContext = url ? {
    base: this?.base ?? url,
    url: this?.base
      ? joinUrls(this.url, url)
      : '',
  } : this;

  const _subUrl = function (
    this: TSubUrlContext,
    ...args: Parameters<TSubUrlFactory>
  ) {
    return suburl.apply({
      ...context,
      ...this,
    }, args);
  };

  _subUrl.toString = () => context ? joinUrls(context.base, context.url) : '';

  return _subUrl;
};

suburl.toString = () => '';
