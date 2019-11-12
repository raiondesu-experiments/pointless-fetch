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
const util_1 = require("./util");
exports.request = (_a) => {
    var { url } = _a, init = __rest(_a, ["url"]);
    return new Request(url, init);
};
exports.combine = (request, addon) => new Request(Object.assign(Object.assign({}, request), { url: util_1.isBase(addon.url) ? addon.url : util_1.join(request.url, addon.url) }), addon);
//# sourceMappingURL=request.js.map