<template>
  <div id="twitter-timeline">
    <a class="twitter-timeline" data-tweet-limit="5" data-height="800" data-theme="light" href="https://twitter.com/Kapcash?ref_src=twsrc%5Etfw">Tweets by Kapcash</a>
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
export default class TwitterTimeline extends Vue {
  head () {
    return {
      script: [
        {
          src: 'https://platform.twitter.com/widgets.js'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
#twitter-timeline {
  max-height: 500px;
  overflow: auto;
}
</style>
