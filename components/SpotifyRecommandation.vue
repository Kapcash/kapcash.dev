<template>
  <div>
    {{ lastTrack.name }}
    <iframe
      :src="`https://open.spotify.com/embed/track/${lastTrack.id}?theme=0`"
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
import { SpotifyPlaylist, SpotifyResponse, Track } from '~/types/spotify'

@Component
export default class SpotifyRecommandation extends Vue {
  lastTrack: Track | {} = {}

  async fetch () {
    const base64Token = Buffer.from(`${this.$config.spotifyClientId}:${this.$config.spotifyClientSecret}`).toString('base64')

    const body = new URLSearchParams()
    body.append('grant_type', 'client_credentials')
    const { access_token: accessToken } = await this.$axios.$post<SpotifyResponse>(
      'https://accounts.spotify.com/api/token',
      body,
      {
        headers: {
          Authorization: 'Basic ' + base64Token,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )

    const lastTrack = await this.$axios.$get<SpotifyPlaylist>('https://api.spotify.com/v1/playlists/3FwL2AwjNfFjttGT9h1YU7/tracks', {
      params: {
        market: 'ES',
        limit: 1
      },
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + accessToken
      }
    }).then(res => res.items).then(items => items[0].track)

    this.lastTrack = lastTrack
  }
}
</script>

<style lang="postcss" scoped>
</style>
