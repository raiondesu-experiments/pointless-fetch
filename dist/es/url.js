export function join(parts, separator = '/') {
    const replace = new RegExp(`(.+)(?!:${separator})${separator}{1,}`, 'g');
    return parts
        .filter(_ => typeof _ === 'string' && _.trim())
        .join(separator)
        .replace(replace, (_, $1) => $1 + separator);
}
export const subUrl = function (base) {
    const applyBase = (_base) => (...args) => {
        const concat = () => join([this, _base(...args)]);
        const _subUrl = subUrl.bind(concat());
        _subUrl.toString = concat;
        return _subUrl;
    };
    if (typeof base === 'string') {
        return applyBase(() => base)();
    }
    return applyBase(base);
};
subUrl.toString = () => '';
export function query(url, queryParams) {
    const query = Object.keys(queryParams)
        .filter(k => k && queryParams[k] !== undefined)
        .map((k) => {
        if (Array.isArray(queryParams[k])) {
            return [join(queryParams[k], ','), k];
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
//# sourceMappingURL=url.js.map