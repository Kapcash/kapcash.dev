import { NuxtConfig } from '@nuxt/types'

export default {
  target: 'static',

  head: {
    title: "Florent Catiau-Tristant's website",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://fav.farm/💻' }
    ]
  },

  css: [
  ],

  tailwindcss: {
    cssPath: '~/assets/tailwind.css'
  },

  plugins: [
  ],

  components: false,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-svg-loader',
    '@nuxtjs/ngrok'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
        'postcss-simple-vars': {}
      }
    },
    babel: {
      plugins: [
        ['prismjs', {
          languages: ['typescript'],
          plugins: [],
          css: false
        }]
      ]
    },
    extend (config, ctx) {
      if (ctx.isDev) {
        // For debugging purposes
        config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
      }

      if (ctx.isClient) {
        const bringUpVueTsSourceFilesForDebug = (info: any) => {
          let $filename = 'sources://' + info.resourcePath
          if (info.resourcePath.endsWith('.vue') && !info.query.includes('type=script')) {
            $filename = 'webpack-generated:///' + info.resourcePath + '?' + info.hash
          }
          return $filename
        }
        if (!config.output) { config.output = {} }
        config.output.devtoolModuleFilenameTemplate = bringUpVueTsSourceFilesForDebug
        config.output.devtoolFallbackModuleFilenameTemplate = 'webpack:///[resource-path]?[hash]'
      }
    }
  }
} as NuxtConfig
