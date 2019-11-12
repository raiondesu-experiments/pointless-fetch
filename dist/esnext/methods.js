export const method = (method) => (request) => ({
    ...request,
    method,
});
export const get = method('GET');
export const head = method('HEAD');
export const post = method('POST');
export const put = method('PUT');
export const del = method('DELETE');
export const connect = method('CONNECT');
export const options = method('OPTIONS');
export const trac = method('TRAC');
//# sourceMappingURL=methods.js.map