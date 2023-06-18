import svgLoader from 'vite-svg-loader';
import progress from 'rollup-plugin-progress';
import { shortcuts } from './assets/css/shortcuts'
import vue from '@vitejs/plugin-vue'

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
      // vue({
      //   template: {
      //     compilerOptions: {
      //       isCustomElement: tag => tag.startsWith('Tres') && tag !== 'TresCanvas',
      //     },
      //   }
      // })
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
