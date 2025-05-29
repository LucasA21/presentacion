import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_D7lyXTun.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/page1.astro.mjs');
const _page1 = () => import('./pages/page10.astro.mjs');
const _page2 = () => import('./pages/page11.astro.mjs');
const _page3 = () => import('./pages/page12.astro.mjs');
const _page4 = () => import('./pages/page2.astro.mjs');
const _page5 = () => import('./pages/page3.astro.mjs');
const _page6 = () => import('./pages/page4.astro.mjs');
const _page7 = () => import('./pages/page5.astro.mjs');
const _page8 = () => import('./pages/page6.astro.mjs');
const _page9 = () => import('./pages/page7.astro.mjs');
const _page10 = () => import('./pages/page8.astro.mjs');
const _page11 = () => import('./pages/page9.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/page1.mdx", _page0],
    ["src/pages/page10.mdx", _page1],
    ["src/pages/page11.mdx", _page2],
    ["src/pages/page12.mdx", _page3],
    ["src/pages/page2.mdx", _page4],
    ["src/pages/page3.mdx", _page5],
    ["src/pages/page4.mdx", _page6],
    ["src/pages/page5.mdx", _page7],
    ["src/pages/page6.mdx", _page8],
    ["src/pages/page7.mdx", _page9],
    ["src/pages/page8.mdx", _page10],
    ["src/pages/page9.mdx", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6a85d68c-19aa-4d1c-a191-98d55edb05c8"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
