<template>
  <div class="flex flex-wrap flex-col md:flex-row justify-start items-center md:items-start bg-red-50 rounded p-4">
    <div>
      <ProfilePicture class="relative" />

      <SocialNetworks />
    </div>
    <div class="text-center md:text-left flex flex-col flex-wrap px-4 justify-center md:justify-start flex-1">
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
import ProfilePicture from '@/components/ProfilePicture.vue'
import SocialNetworks from '@/components/SocialNetworks.vue'
import maskParticlesOptions from '@/assets/mask_particles'

@Component({
  name: 'Header',
  components: {
    ProfilePicture,
    SocialNetworks
  }
})
export default class Header extends Vue {
  readonly tags = ['vue', 'nuxt', 'nestjs']
  particlesOptions = maskParticlesOptions
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
