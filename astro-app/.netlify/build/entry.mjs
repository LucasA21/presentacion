import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BiabqmmP.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/shadcn/page1.astro.mjs');
const _page1 = () => import('./pages/shadcn/page2.astro.mjs');
const _page2 = () => import('./pages/shadcn/page3.astro.mjs');
const _page3 = () => import('./pages/shadcn/page4.astro.mjs');
const _page4 = () => import('./pages/shadcn/page5.astro.mjs');
const _page5 = () => import('./pages/shadcn/page6.astro.mjs');
const _page6 = () => import('./pages/shadcn/page7.astro.mjs');
const _page7 = () => import('./pages/shadcn/page8.astro.mjs');
const _page8 = () => import('./pages/tailwind/page1.astro.mjs');
const _page9 = () => import('./pages/tailwind/page10.astro.mjs');
const _page10 = () => import('./pages/tailwind/page2.astro.mjs');
const _page11 = () => import('./pages/tailwind/page3.astro.mjs');
const _page12 = () => import('./pages/tailwind/page4.astro.mjs');
const _page13 = () => import('./pages/tailwind/page5.astro.mjs');
const _page14 = () => import('./pages/tailwind/page6.astro.mjs');
const _page15 = () => import('./pages/tailwind/page7.astro.mjs');
const _page16 = () => import('./pages/tailwind/page8.astro.mjs');
const _page17 = () => import('./pages/tailwind/page9.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/shadcn/page1.mdx", _page0],
    ["src/pages/shadcn/page2.mdx", _page1],
    ["src/pages/shadcn/page3.mdx", _page2],
    ["src/pages/shadcn/page4.mdx", _page3],
    ["src/pages/shadcn/page5.mdx", _page4],
    ["src/pages/shadcn/page6.mdx", _page5],
    ["src/pages/shadcn/page7.mdx", _page6],
    ["src/pages/shadcn/page8.mdx", _page7],
    ["src/pages/tailwind/page1.mdx", _page8],
    ["src/pages/tailwind/page10.mdx", _page9],
    ["src/pages/tailwind/page2.mdx", _page10],
    ["src/pages/tailwind/page3.mdx", _page11],
    ["src/pages/tailwind/page4.mdx", _page12],
    ["src/pages/tailwind/page5.mdx", _page13],
    ["src/pages/tailwind/page6.mdx", _page14],
    ["src/pages/tailwind/page7.mdx", _page15],
    ["src/pages/tailwind/page8.mdx", _page16],
    ["src/pages/tailwind/page9.mdx", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "acb411f5-d398-456e-96b9-af3b2948e275"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
