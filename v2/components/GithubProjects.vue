<template>
  <section>
    <h1 class="font-serif title-decoration text-4xl mt-10 mb-6">
      My projects on Github
    </h1>
    <div class="grid grid-cols-2 gap-4">
      <GithubCard
        v-for="pinnedRepo of githubRepos"
        :key="pinnedRepo.repo"
        :title="pinnedRepo.repo"
        :description="pinnedRepo.description"
        :main-language="pinnedRepo.language"
        :language-color="pinnedRepo.languageColor"
        :link="pinnedRepo.link"
        :nb-stars="pinnedRepo.stars"
        :nb-forks="pinnedRepo.forks"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { GithubPinnedRepo } from '~~/types/github';

const { data: githubRepos } = await useAsyncData(
  'githubProjects',
  async () => {
    return $fetch<GithubPinnedRepo[]>('https://gh-pinned-repos.egoist.dev/?username=Kapcash', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      params: {
        sort: 'updated',
        per_page: 3,
        type: 'owner',
      },
    })
  }, {
    transform(data) {
      return data.map(repo => ({
        ...repo,
        stars: parseInt(repo.stars as string),
        forks: parseInt(repo.forks as string),
        link: `https://github.com/${repo.owner}/${repo.repo}`,
      }))
    }
  })
</script>
