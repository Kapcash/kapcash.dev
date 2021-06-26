<template>
  <a href="https://www.buymeacoffee.com/kapcash" class="font-bree px-6 py-4 bg-pink-900 text-2xl text-white rounded-xl">
    🍺 Buy me a Beer
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'

@Component
export default class Footer extends Vue {
  @Prop({ type: String, default: '#FFDD00' })
  readonly color!: string

  head (): MetaInfo {
    return {
      link: [
        { hid: 'bree-font', href: 'https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap', rel: 'stylesheet' }
      ]
    }
  }
}
</script>

<style scoped>
.font-bree {
  font-family: 'Bree Serif', serif;
}
</style>
