export const joinUrls = (...urls) => urls
    .filter(_ => _)
    .join('/')
    .replace(/^(?:\w+:\/\/)?(.*\/+.+)/g, (_, $1) => _.replace($1, $1.replace(/\/+/g, '/')));
export const isBase = (url) => /^(\w+:\/\/.+|\/\/)/.test(url);
//# sourceMappingURL=util.js.map