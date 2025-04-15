
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
    'index.csr.html': {size: 23546, hash: 'efa4d01b53208be8181c8837174f84e9571d67d38921c90b949b994c0d6a66b9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17120, hash: 'f4746c13e75e5b3b6188c8aca9fe524e15ee87834e2ae5007ae6d7f5f9547825', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'favourites/index.html': {size: 89993, hash: 'e28e68a7f28d6f99aff15fadc79a68797adbc54582372f0f3bbfcaf82daa0afa', text: () => import('./assets-chunks/favourites_index_html.mjs').then(m => m.default)},
    'index.html': {size: 153390, hash: '2ebf6c3707ca87d467604419b2ea50ada62de4784a8d754422030d58a152caec', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
