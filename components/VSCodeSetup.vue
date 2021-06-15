<template>
  <pre class="language-typescript text-xs md:text-base" :class="useDark ? 'dark' : 'light'">
    <code v-html="setupCode" />
  </pre>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Prism from 'prismjs'
import GithubProjectLogo from '@/assets/svg/github-project.svg'
import GithubStarLogo from '@/assets/svg/github-star.svg'
import GithubForkLogo from '@/assets/svg/github-fork.svg'

// TODO Update code block theme to light if outside

const setupAsCode =
`
  // Variables
  let useDark = !isOutside || isNight

  const vscodeSettings = {
    font: 'Fira Code',
    theme: useDark ? 'Atomize' : 'Github Light default',
    sidebar: 'right' | 'left': 'right',
    iconTheme: 'Material Icon Theme',
  }
`

@Component({
  components: {
    GithubProjectLogo,
    GithubStarLogo,
    GithubForkLogo
  }
})
export default class VSCodeSetup extends Vue {
  get useDark (): boolean {
    const currentHour = new Date().getHours()
    return currentHour < 9 || currentHour > 20
  }

  get setupCode (): string {
    return Prism.highlight(setupAsCode, Prism.languages.typescript, 'typescript')
  }
}
</script>

<style lang="postcss" scoped>
</style>
