<template>
  <footer class="mt-10 bg-gray-100 py-6 text-center">
    <SocialNetworks />
    <p>©{{ currentYear }} Developed by Florent Catiau-Tristant</p>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {
  currentYear = new Date().getFullYear()
}
</script>

<style lang="postcss" scoped>
</style>
