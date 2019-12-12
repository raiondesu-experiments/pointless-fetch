export const query = (url) => (queryParams) => {
    const query = Object.keys(queryParams)
        .filter(k => k && queryParams[k] !== undefined)
        .map((k) => Array.isArray(queryParams[k])
        ? [k, queryParams[k].join(',')]
        : typeof queryParams[k] === 'object'
            ? [k, JSON.stringify(queryParams[k])]
            : [k, queryParams[k]])
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURI(value)}`)
        .join('&');
    const prefix = (String(url).indexOf('?') > -1 ? '&' : '?');
    return url + (query.length > 0 ? prefix + query : '');
};
//# sourceMappingURL=query.js.map