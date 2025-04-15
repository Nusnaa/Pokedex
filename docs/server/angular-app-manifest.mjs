
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Pokedex/',
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
    'index.csr.html': {size: 23570, hash: '2e1e47d01a170c4eed4cfe4374f8cef7bf32b669c25b9d4f1870146aad6e88df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17148, hash: 'e708eb7b7ade22436405ac4a70eef606e2145beba1d4eea85caa3aeec2414afa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'favourites/index.html': {size: 90015, hash: '85d4b382848417b56565e8fade7261741be0f61da58331377e9832ddfb4a7563', text: () => import('./assets-chunks/favourites_index_html.mjs').then(m => m.default)},
    'index.html': {size: 153412, hash: '89f3644f3cfcd523763a47512cc19a753c7af3e11cc2b1de169de71670806b54', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
