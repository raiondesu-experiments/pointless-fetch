!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).pointless={})}(this,function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){if(null==t)return{};var r,e,o=function(t,n){if(null==t)return{};var r,e,o={},u=Object.keys(t);for(e=0;e<u.length;e++)r=u[e],n.indexOf(r)>=0||(o[r]=t[r]);return o}(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(e=0;e<u.length;e++)r=u[e],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function e(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],e=!0,o=!1,u=void 0;try{for(var i,f=t[Symbol.iterator]();!(e=(i=f.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(t){o=!0,u=t}finally{try{e||null==f.return||f.return()}finally{if(o)throw u}}return r}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.filter(function(t){return t}).join("/").replace(/^(?:\w+:\/\/)?(.*\/+.+)/g,function(t,n){return t.replace(n,n.replace(/\/+/g,"/"))})},u=function t(n){var r=this,e=function(n){return function(){for(var e=arguments.length,u=new Array(e),i=0;i<e;i++)u[i]=arguments[i];var f=function(){return o(r.base,n.apply(void 0,u))},c=t.bind({base:f()});return c.toString=f,c}};return"string"==typeof n?e(function(){return n})():e(n)};u.toString=function(){return""},t.combine=function(t,n){return new Request(Object.assign({},t,{url:(r=n.url,/^(\w+:\/\/.+|\/\/)/.test(r)?n.url:o(t.url,n.url))}),n);var r},t.query=function(t,r){var o=Object.keys(r).filter(function(t){return t&&void 0!==r[t]}).map(function(t){return Array.isArray(r[t])?[r[t].join(","),t]:"object"===n(r[t])?[JSON.stringify(r[t]),t]:[r[t],t]}).map(function(t){var n=e(t,2),r=n[0],o=n[1];return"".concat(encodeURIComponent(o),"=").concat(encodeURI(r))}).join("&"),u=t.indexOf("?")>-1?"&":"?";return t+(o.length>0?u+o:"")},t.request=function(t){var n=t.url,e=r(t,["url"]);return new Request(n,e)},t.subUrl=u,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=umd.js.map
