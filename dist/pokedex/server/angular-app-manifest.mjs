
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
    'index.csr.html': {size: 23594, hash: 'e11578cac3a73373e5e423580d09fb190cc6495b077d8add2cd1828d9dfebe89', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17172, hash: 'c58cbc3cd2776c7d794c86cc4dcc491adb6a54f1bcc1a785d4aa42f409c4b0dc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'favourites/index.html': {size: 90039, hash: '2189374b0fb33dc91488574496c2942ebbad279a20ce30bdc031490671cd6a95', text: () => import('./assets-chunks/favourites_index_html.mjs').then(m => m.default)},
    'index.html': {size: 153436, hash: '86c8764be23712eeb7bd24beba73ba6c104d56276a9c2ec0fc91911f66ad8ce2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
