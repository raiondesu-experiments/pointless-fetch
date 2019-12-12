"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
exports.createFetch = (req, after, error) => (finalRequest = { url: '' }) => fetch(request_1.request(request_1.combine(req, finalRequest)))
    .then(after)
    .catch(error);
//# sourceMappingURL=fetch.js.map