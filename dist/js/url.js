"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = (parts) => parts
    .filter(_ => _)
    .join('/')
    .replace(/^(?:\w+:\/\/)?(.*\/+.+)/g, (_, $1) => _.replace($1, $1.replace(/\/+/g, '/')));
exports.subUrl = function (url) {
    const applyBase = (_url) => (...args) => {
        const concat = () => exports.join([this.base, _url(...args)]);
        const _subUrl = exports.subUrl.bind({ base: concat() });
        _subUrl.toString = concat;
        return _subUrl;
    };
    return typeof url === 'string'
        ? applyBase(() => url)()
        : applyBase(url);
};
exports.subUrl.toString = () => '';
function query(url, queryParams) {
    const query = Object.keys(queryParams)
        .filter(k => k && queryParams[k] !== undefined)
        .map((k) => {
        if (Array.isArray(queryParams[k])) {
            return [queryParams[k].join(','), k];
        }
        else if (typeof queryParams[k] === 'object') {
            return [JSON.stringify(queryParams[k]), k];
        }
        return [queryParams[k], k];
    })
        .map(([value, key]) => `${encodeURIComponent(key)}=${encodeURI(value)}`)
        .join('&');
    const prefix = (url.indexOf('?') > -1 ? '&' : '?');
    return url + (query.length > 0 ? prefix + query : '');
}
exports.query = query;
//# sourceMappingURL=url.js.map