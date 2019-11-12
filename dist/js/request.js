"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
exports.request = (_a) => {
    var { url } = _a, init = __rest(_a, ["url"]);
    return new Request(url, init);
};
exports.combine = (req1, req2) => exports.request(Object.keys(req1).concat(Object.keys(req2))
    .reduce((res, key) => (res[key] = (exports.combine[key] || merge_1.defaultMerge)(req1[key], req2[key]),
    res), {}));
exports.combine.headers = merge_1.mergeHeaders;
exports.combine.url = merge_1.mergeUrls;
//# sourceMappingURL=request.js.map