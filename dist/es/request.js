var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { mergeHeaders, mergeUrls, defaultMerge } from "./merge.js";
export const request = (_a) => {
    var { url } = _a, init = __rest(_a, ["url"]);
    return new Request(url, init);
};
export const jsonBody = (_a) => {
    var { body } = _a, stuff = __rest(_a, ["body"]);
    return (Object.assign(Object.assign({}, stuff), { body: typeof body !== 'string' && typeof body !== 'undefined'
            ? JSON.stringify(body)
            : body }));
};
export const combine = (req1, req2) => (Object.keys(req1).concat(Object.keys(req2))
    .reduce((res, key) => (res[key] = (combine[key] || defaultMerge)(req1[key], req2[key]),
    res), {}));
combine.headers = mergeHeaders;
combine.url = mergeUrls;
//# sourceMappingURL=request.js.map