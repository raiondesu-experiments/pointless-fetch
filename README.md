<h1 align="center" style="text-align: center">
  <img src="assets/logo.png"/>
</h1>

<p align="center">
Functional point-free utilities for fetch
</p>

<h2 align="center">
[WIP]
</h2>

<p align="center">
<a href="https://travis-ci.com/raiondesu-experiments/pointless-fetch" title="Latest Travis CI build"><img src="https://img.shields.io/travis/com/raiondesu-experiments/pointless-fetch?style=flat-square" alt="travis"></a>
<a href="https://www.npmjs.com/package/pointless-fetch" title="Downloads per month, but who cares?"><img src="https://img.shields.io/npm/dm/pointless-fetch.svg?style=flat-square" alt="npm"></a>
<a href="https://bundlephobia.com/result?p=pointless-fetch@latest" title="minzipped size"><img src="https://img.shields.io/bundlephobia/minzip/pointless-fetch@latest?style=flat-square" alt="size"></a>
<a href="https://coveralls.io/github/raiondesu-experiments/pointless-fetch" title="Code coverage"><img src="https://img.shields.io/coveralls/github/raiondesu-experiments/pointless-fetch?style=flat-square" alt="coveralls"></a>
<a href="https://codeclimate.com/github/raiondesu-experiments/pointless-fetch/maintainability" title="Code quality"><img src="https://img.shields.io/codeclimate/maintainability/raiondesu-experiments/pointless-fetch?style=flat-square" alt="code quality"></a></p>
</p>

<p align="center">
<a href="https://codepen.io/raiondesu/pen/GRRXZBz" title="Link to in-browser playground"><img src="https://img.shields.io/badge/playground-link-blueviolet?style=flat-square" alt="code pen"></a>
</p>

## Table of Contents<!-- omit in toc -->
- [What is this?](#what-is-this)
- [Installation](#installation)
  - [Importing](#importing)

## What is this?

It's a simple collection of functional utilities for [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) written in typesctipt.

---

## Installation

**npm**:
```bash
npm i -S pointless-fetch
```

**browser**:
```html
<!-- ES2015 -->
<script type="module">
  import { subUrl, request, query } from 'https://unpkg.com/pointless-fetch';

  // use it here
</script>

<!-- ES5 with IE11+ general syntax polyfills, global object - `pointless` -->
<!-- Polyfill `window.Promise` and `Object.assign` yourself! -->
<script src="https://unpkg.com/pointless-fetch/dist/umd.js"></script>
```

### Importing

```ts
// TS-module (pure typescript),
// allows compilation settings to be set from the project config
import { subUrl, request, query } from 'pointless-fetch/src';

// ES-module (npm/node, typescript)
import { subUrl, request, query } from 'pointless-fetch';

// ESNext (no polyfills for esnext)
import { subUrl, request, query } from 'pointless-fetch/dist/esnext';

// ES-module (browser, node)
import { subUrl, request, query } from 'https://unpkg.com/pointless-fetch';

// Classic node commonjs
const { subUrl, request, query } = require('pointless-fetch/dist/js');
```



---

Something's missing or found a bug?\
Feel free to [create an issue](https://github.com/raiondesu-experiments/pointless-fetch/issues/new)! 😉
