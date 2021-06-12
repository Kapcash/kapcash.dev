<template>
  <div class="flex flex-wrap">
    <img src="~/assets/img/moi.jpg" alt="My smiling face" height="200px" width="200px" class="rounded-full object-cover border-4 border-pink-900">
    <div class="flex flex-col flex-wrap px-4 items-start justify-center md:justify-start">
      <h1 class="my-3 font-bold uppercase text-5xl">
        Hey! I'm Florent!
      </h1>
      <p class="my-3 tracking-widest uppercase text-4xl">
        I am a French web developer based in Barcelona!
      </p>
      <ul class="my-3">
        <li class="tag">#vue</li>
        <li class="tag">#nuxt</li>
        <li class="tag">#nestjs</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import GithubCard from '~/components/GithubCard.vue'

@Component({
  components: {
    GithubCard
  }
})
export default class HomePage extends Vue {

}
</script>

<style lang="postcss" scoped>
img {
  width: 200px;
  height: 200px;
}

.tag {
  @apply inline text-pink-800 text-xl font-semibold mr-4;
}
</style>
