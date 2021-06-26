<template>
  <footer class="mt-10 bg-gray-100 py-6 grid grid-flow-col grid-cols-3 auto-cols-max justify-items-center items-center">
    <div class="col-start-2 text-center">
      <SocialNetworks />
      <p>©{{ currentYear }} Developed by Florent Catiau-Tristant</p>
    </div>

    <BuyMeACoffee class="col-start-3" />
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {
  currentYear = new Date().getFullYear()
}
</script>
