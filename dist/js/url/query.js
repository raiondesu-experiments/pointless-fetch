"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=query.js.map