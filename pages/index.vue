<template>
  <div class="max-w-screen-md mx-auto">
    <Header />

    <section>
      <h1 class="text-4xl">
        My projects on Github
      </h1>
      <GithubCard
        v-for="pinnedRepo of githubRepos"
        :key="pinnedRepo.id"
        :title="pinnedRepo.repo"
        :description="pinnedRepo.description"
        :main-language="pinnedRepo.language"
        :language-color="pinnedRepo.languageColor"
        :link="pinnedRepo.link"
        :nb-stars="pinnedRepo.stars"
        :nb-forks="pinnedRepo.forks"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import Header from '~/components/Header.vue'
import GithubCard from '~/components/GithubCard.vue'
import { GithubPinnedRepo } from '~/types/github'

@Component({
  components: {
    Header,
    GithubCard
  }
})
export default class HomePage extends Vue {
  githubRepos!: GithubPinnedRepo[]

  async asyncData ({ $axios }: Context) {
    const githubRepos = await $axios.$get<GithubPinnedRepo[]>('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=kapcash', {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      },
      params: {
        sort: 'updated',
        per_page: 3,
        type: 'owner'
      }
    })

    return {
      githubRepos
    }
  }
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
