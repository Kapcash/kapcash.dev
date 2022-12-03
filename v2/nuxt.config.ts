import svgLoader from 'vite-svg-loader';
import progress from 'rollup-plugin-progress';
import { shortcuts } from './assets/css/shortcuts'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],

  css: [
    '~/assets/css/main.css'
  ],

  unocss: {
    uno: true,
    icons: false,
    attributify: false,

    shortcuts,
    rules: [],
  },

  vite: {
    plugins: [
      // eslintPlugin(), // Forces eslint to be valid on dev server
      svgLoader(),
    ],
    build: {
      sourcemap: true,
      rollupOptions: {
        plugins: [
          progress(),
        ],
      },
    },
  },
})
