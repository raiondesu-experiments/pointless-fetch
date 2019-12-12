"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
exports.defaultMerge = (v1, v2) => (typeof v2 === 'undefined'
    ? v1
    : typeof v1 === 'undefined'
        ? v2
        : typeof v1 === typeof v2
            ? Array.isArray(v1) && Array.isArray(v2)
                ? v1.concat(v2)
                : typeof v1 === 'object' && (!Array.isArray(v1) && !Array.isArray(v2))
                    ? Object.assign(Object.assign({}, v1), v2) : v2
            : v2);
exports.mergeUrls = (url1, url2) => util_1.isBase(url2) ? url2 : util_1.joinUrls(url1, url2);
function mergeHeaders(headers1, headers2) {
    const h = new Headers(headers1);
    const h2 = new Headers(headers2);
    h2.forEach((v, k) => h.append(k, v));
    return h;
}
exports.mergeHeaders = mergeHeaders;
//# sourceMappingURL=merge.js.map