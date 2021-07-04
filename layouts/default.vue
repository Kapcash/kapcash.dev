<template>
  <div class="background-gradient px-3 md:px-0">
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Footer from '@/components/Footer.vue'

@Component({
  name: 'DefaultLayout',
  components: {
    Footer
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

@media screen and (min-width: 780px) {
  .background-gradient {
    background-color: white;
    background: linear-gradient(279deg,#ffffff  75%, #fef1f2 0%);
  }
}
</style>
