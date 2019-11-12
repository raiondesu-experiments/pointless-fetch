import { combine } from "./request.js";
export const createFetch = (request, after, error) => (finalRequest = { url: '' }) => fetch(combine(request, finalRequest)).then(after, error);
//# sourceMappingURL=fetch.js.map