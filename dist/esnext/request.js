import { mergeHeaders, mergeUrls, defaultMerge } from "./merge.js";
export const request = ({ url, ...init }) => new Request(url, init);
export const combine = (req1, req2) => request(Object.keys(req1).concat(Object.keys(req2))
    .reduce((res, key) => (res[key] = (combine[key] || defaultMerge)(req1[key], req2[key]),
    res), {}));
combine.headers = mergeHeaders;
combine.url = mergeUrls;
//# sourceMappingURL=request.js.map