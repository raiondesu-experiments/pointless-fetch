"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
exports.createFetch = (request, after, error) => (finalRequest = { url: '' }) => fetch(request_1.combine(request, finalRequest)).then(after, error);
//# sourceMappingURL=fetch.js.map