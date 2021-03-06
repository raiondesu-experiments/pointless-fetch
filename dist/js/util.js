"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = (...parts) => parts
    .filter(_ => _)
    .join('/')
    .replace(/^(?:\w+:\/\/)?(.*\/+.+)/g, (_, $1) => _.replace($1, $1.replace(/\/+/g, '/')));
exports.isBase = (url) => /^(\w+:\/\/.+|\/\/)/.test(url);
//# sourceMappingURL=util.js.map