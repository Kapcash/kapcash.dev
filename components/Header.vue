<template>
  <div class="flex flex-wrap flex-col md:flex-row justify-start items-center md:items-stretch bg-red-50 rounded p-4 -m-3 md:m-0">
    <div>
      <ProfilePicture class="relative" :particles="useParticles" />

      <SocialNetworks />
    </div>
    <div class="text-center md:text-left flex flex-col flex-wrap px-4 flex-1 justify-center md:justify-start">
      <div class="flex flex-col h-full justify-center md:justify-between">
        <h1 class="my-3 font-bold text-4xl">
          Hey! I'm Florent!
        </h1>
        <p class="my-3 tracking-widest text-2xl">
          I am a French web developer based in Barcelona contributing to open source libraries.
        </p>
        <div class="flex flex-col md:flex-row justify-between items-center">
          <ul class="my-3">
            <li v-for="tag of tags" :key="tag" class="tag">
              #{{ tag }}
            </li>
          </ul>
          <a class="text-center md:text-right" href="resume/">
            <button class="px-6 py-2 bg-pink-900 hover:bg-pink-800 text-red-50 rounded">
              See my resume
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ProfilePicture from '@/components/ProfilePicture.vue'
import SocialNetworks from '@/components/SocialNetworks.vue'

@Component({
  name: 'Header',
  components: {
    ProfilePicture,
    SocialNetworks,
  },
})
export default class Header extends Vue {
  readonly tags = ['vue', 'nuxt', 'nestjs']
  useParticles: boolean = false

  mounted () {
    const isTouchScreen = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
    this.useParticles = !isTouchScreen
  }
}
</script>

<style lang="postcss" scoped>
#profilePicture {
  width: 200px;
  height: 200px;
  overflow: hidden;
  ::v-deep .tsparticles-canvas-el {
    position: static !important;
  }
}

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
</style>
