<template>
  <div class="social-networks flex my-2 justify-center">
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
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TwitterLogo from '@/assets/svg/social-networks/twitter.svg'
import LinkedInLogo from '@/assets/svg/social-networks/linkedin.svg'
import GithubLogo from '@/assets/svg/social-networks/github.svg'
import DevtoLogo from '@/assets/svg/social-networks/devto.svg'

@Component({
  components: {
    TwitterLogo,
    LinkedInLogo,
    GithubLogo,
    DevtoLogo
  }
})
export default class SocialNetworks extends Vue {}
</script>

<style lang="postcss" scoped>
.social-networks > * {
  margin-left: 8px;
  margin-right: 8px;
}

svg:hover {
  fill: rgb(131, 24, 67);
  transform: rotate(-8deg);
  transition: transform 200ms ease-out;
}
</style>
