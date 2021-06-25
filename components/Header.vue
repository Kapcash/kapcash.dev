<template>
  <div class="flex flex-wrap flex-col md:flex-row justify-start items-start">
    <div>
      <img src="~/assets/img/moi.jpg" alt="My smiling face" height="200px" width="200px" class="rounded-full object-cover border-4 border-pink-900">
      <div id="social-networks" class="flex justify-between my-2 px-8">
        <a href="https://twitter.com/Kapcash">
          <TwitterLogo height="24" width="24" fill="black" />
        </a>
        <a href="https://github.com/Kapcash">
          <GithubLogo height="24" width="24" fill="black" />
        </a>
        <a href="https://dev.to/Kapcash">
          <DevtoLogo height="24" width="24" fill="black" />
        </a>
        <a href="https://www.linkedin.com/in/florent-catiau-tristant/">
          <LinkedInLogo height="24" width="24" fill="black" />
        </a>
      </div>
    </div>
    <div class="flex flex-col flex-wrap px-4 justify-center md:justify-start flex-1">
      <h1 class="my-3 font-bold text-4xl">
        Hey! I'm Florent!
      </h1>
      <p class="my-3 tracking-widest text-3xl">
        I am a French web developer based in Barcelona contributing to open source libraries.
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
import GithubCard from '@/components/GithubCard.vue'
import TwitterLogo from '@/assets/svg/social-networks/twitter.svg'
import LinkedInLogo from '@/assets/svg/social-networks/linkedin.svg'
import GithubLogo from '@/assets/svg/social-networks/Github.svg'
import DevtoLogo from '@/assets/svg/social-networks/devto.svg'

@Component({
  components: {
    GithubCard,
    TwitterLogo,
    LinkedInLogo,
    GithubLogo,
    DevtoLogo
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

.tag {
  @apply inline text-pink-800 text-xl font-semibold mr-4;
}

svg:hover {
  fill: rgb(131, 24, 67);
  transform: rotate(-8deg);
  transition: transform 200ms ease-out;
}
</style>
