import { joinUrls } from "./util.js";
export const subUrl = function (url) {
    const applyBase = (_url) => (...args) => {
        const concat = () => joinUrls(this?.base, _url(...args));
        const _subUrl = subUrl.bind({ base: concat() });
        _subUrl.toString = concat;
        return _subUrl;
    };
    return typeof url === 'string'
        ? applyBase(() => url)()
        : applyBase(url);
};
subUrl.toString = () => '';
//# sourceMappingURL=suburl.js.map