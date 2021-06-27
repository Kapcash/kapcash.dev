<template>
  <footer class="-mx-3 md:mx-0 mt-10 bg-gray-100 py-6 grid grid-flow-col grid-rows-2 md:grid-rows-none grid-cols-none md:grid-cols-3 gap-y-4 justify-items-center items-center">
    <div class="md:col-start-2 text-center">
      <SocialNetworks />
      <p>©{{ currentYear }} Developed by Florent Catiau-Tristant</p>
    </div>

    <BuyMeACoffee class="md:col-start-3" />
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {
  currentYear = new Date().getFullYear()
}
</script>
