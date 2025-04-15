
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://nusnaa.github.io/Pokedex/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Pokedex"
  },
  {
    "renderMode": 2,
    "route": "/Pokedex/favourites"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23594, hash: 'f1de38dd47df86f3f0741b45807fdda546c2bd3e18aaa7dd965536045403eb3a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17172, hash: '0463f000dd8f929e0b68dc9d4778f18866e34d1e5d3eaf686556a0a51f27e7a1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'favourites/index.html': {size: 90039, hash: 'a5e794b0c4de39747aab9e43b687d381ba20f87b18bfad48550a08caf9d71e07', text: () => import('./assets-chunks/favourites_index_html.mjs').then(m => m.default)},
    'index.html': {size: 155886, hash: 'e0fd198e69b41684f1b58c66e48dc9c9cfd5ed5fa33a4f52ce740e0d12eabe91', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
