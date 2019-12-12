import { combine, request } from "./request.js";
export const createFetch = (req, after, error) => (finalRequest = { url: '' }) => fetch(request(combine(req, finalRequest)))
    .then(after)
    .catch(error);
//# sourceMappingURL=fetch.js.map