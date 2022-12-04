<template>
  <a class="github-card bg-white p-5 border border-grey-400 rounded-md flex flex-col" :href="link">
    <div class="flex w-full items-center justify-start">
      <GithubProjectLogo class="mr-3 text-gray-500 fill-current" />
      <span class="repo-title text-bold flex-auto min-width-0 text-blue-800">
        {{ title }}
      </span>
    </div>

    <p class="mt-2 mb-3" data-test-id="repo-description">
      {{ description }}
    </p>

    <p class="mb-0 mt-auto color-text-secondary flex gap-2">
      <span v-if="mainLanguage">
        <i class="badge bg-green-300 mr-2" :style="`background-color: ${languageColor}`" />
        <span>{{ mainLanguage }}</span>
      </span>

      <span v-if="nbStars > 0">
        <GithubStarLogo class="inline" />
        {{ nbStars }}
      </span>

      <span v-if="nbForks > 0">
        <GithubForkLogo class="inline" />
        {{ nbForks }}
      </span>
    </p>
  </a>
</template>

<script setup lang="ts">
import GithubProjectLogo from '@/assets/svg/github-project.svg'
import GithubStarLogo from '@/assets/svg/github-star.svg'
import GithubForkLogo from '@/assets/svg/github-fork.svg'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  mainLanguage: { type: String, required: false, default: null },
  nbStars: { type: Number, default: 0 },
  nbForks: { type: Number, default: 0 },
  languageColor: { type: String, default: '#f1e05a' },
})
</script>

<style scoped>
.github-card:hover {
  border: 1px solid #b7a6ad;
  cursor: pointer;
}

.badge {
  border-radius: 50%;
  display: inline-block;
  vertical-align: text-bottom;
  height: 1em;
  width: 1em;
}
</style>
