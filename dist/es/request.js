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
import { join, isBase } from "./util.js";
export const request = (_a) => {
    var { url } = _a, init = __rest(_a, ["url"]);
    return new Request(url, init);
};
export const combine = (request, addon) => new Request(Object.assign(Object.assign({}, request), { url: isBase(addon.url) ? addon.url : join(request.url, addon.url) }), addon);
//# sourceMappingURL=request.js.map