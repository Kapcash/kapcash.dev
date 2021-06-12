<template>
  <a class="github-card flex flex-col pa-3 border border-grey-400 rounded-md p-5 my-3" :href="link">
    <div class="flex w-full items-center justify-start">
      <GithubProjectLogo class="mr-3 text-gray-500 fill-current" />
      <span class="repo-title text-bold flex-auto min-width-0 text-blue-800">
        {{ title }}
      </span>
    </div>

    <p class="mt-2 mb-3">
      {{ description }}
    </p>

    <p class="inline-block mb-0 f6 color-text-secondary">
      <span v-if="mainLanguage" class="mr-3">
        <i class="badge bg-green-300" :style="`background-color: ${languageColor}`" />
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

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import GithubProjectLogo from '@/assets/svg/github-project.svg'
import GithubStarLogo from '@/assets/svg/github-star.svg'
import GithubForkLogo from '@/assets/svg/github-fork.svg'

@Component({
  components: {
    GithubProjectLogo,
    GithubStarLogo,
    GithubForkLogo
  }
})
export default class GithubCard extends Vue {
  @Prop({ type: String, required: true })
  readonly title!: string

  @Prop({ type: String, required: true })
  readonly description!: string

  @Prop({ type: String, required: false, default: null })
  readonly mainLanguage!: string | null

  @Prop({ type: String, required: true })
  readonly link!: string

  @Prop({ type: Number, default: 0 })
  readonly nbStars!: number

  @Prop({ type: Number, default: 0 })
  readonly nbForks!: number

  @Prop({ type: String, default: '#f1e05a' })
  readonly languageColor!: string
}
</script>

<style lang="postcss" scoped>
.github-card:hover {
  border: 1px solid #b7a6ad;
  cursor: pointer;
}
</style>
