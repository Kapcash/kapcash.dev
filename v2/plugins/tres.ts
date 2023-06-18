import Tres from '@tresjs/core'

export default defineNuxtPlugin(nuxtApp => {
  useNuxtApp().vueApp.use(Tres)
})
