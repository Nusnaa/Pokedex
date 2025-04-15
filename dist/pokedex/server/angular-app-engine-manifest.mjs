
export default {
  basePath: 'https://nusnaa.github.io/Pokedex',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
