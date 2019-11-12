import { join, isBase } from "./util.js";
export const request = ({ url, ...init }) => new Request(url, init);
export const combine = (request, addon) => new Request({
    ...request,
    url: isBase(addon.url) ? addon.url : join(request.url, addon.url),
}, addon);
//# sourceMappingURL=request.js.map