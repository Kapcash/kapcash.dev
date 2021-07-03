<template>
  <div>
    <iframe
      src="https://open.spotify.com/embed/playlist/3FwL2AwjNfFjttGT9h1YU7?theme=0"
      width="100%"
      height="80"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

// TODO: Add switch button to show recommendation / work playlist

@Component({
  name: 'SpotifyRecommandation'
})
export default class SpotifyRecommandation extends Vue {
}
</script>

<style lang="postcss" scoped>
</style>
