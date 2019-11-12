"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
exports.subUrl = function (url) {
    const applyBase = (_url) => (...args) => {
        const concat = () => util_1.join(this ? this.base : undefined, _url(...args));
        const _subUrl = exports.subUrl.bind({ base: concat() });
        _subUrl.toString = concat;
        return _subUrl;
    };
    return typeof url === 'string'
        ? applyBase(() => url)()
        : applyBase(url);
};
exports.subUrl.toString = () => '';
//# sourceMappingURL=suburl.js.map