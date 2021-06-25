<template>
  <div class="flex flex-wrap flex-col md:flex-row justify-start items-center">
    <img src="~/assets/img/moi.jpg" alt="My smiling face" height="200px" width="200px" class="rounded-full object-cover border-4 border-pink-900">
    <div class="flex flex-col flex-wrap px-4 justify-center md:justify-start flex-1">
      <h1 class="my-3 font-bold small-caps text-4xl">
        Hey! I'm Florent!
      </h1>
      <p class="my-3 tracking-widest uppercase text-3xl">
        I am a French web developer based in Barcelona!
      </p>
      <ul class="my-3">
        <li v-for="tag of tags" :key="tag" class="tag">
          #{{ tag }}
        </li>
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
  readonly tags = ['vue', 'nuxt', 'nestjs']
}
</script>

<style lang="postcss" scoped>
img {
  width: 200px;
  height: 200px;
}

.flex-1 {
  flex: 1;
}

.small-caps {
  font-variant-caps: small-caps;
}

.tag {
  @apply inline text-pink-800 text-xl font-semibold mr-4;
}
</style>
