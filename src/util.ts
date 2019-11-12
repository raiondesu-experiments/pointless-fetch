export const joinUrls = (...urls: Array<string | undefined>) => urls
  .filter(_ => _)
  .join('/')
  .replace(
    /^(?:\w+:\/\/)?(.*\/+.+)/g,
    (_, $1) => _.replace($1, $1.replace(/\/+/g, '/'))
  );

export const isBase = (url: string) => /^(\w+:\/\/.+|\/\/)/.test(url);
