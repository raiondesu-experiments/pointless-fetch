"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.method = (method) => (request) => (Object.assign(Object.assign({}, request), { method }));
exports.get = exports.method('GET');
exports.head = exports.method('HEAD');
exports.post = exports.method('POST');
exports.put = exports.method('PUT');
exports.del = exports.method('DELETE');
exports.connect = exports.method('CONNECT');
exports.options = exports.method('OPTIONS');
exports.trac = exports.method('TRAC');
//# sourceMappingURL=methods.js.map