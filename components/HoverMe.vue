<template>
  <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <path
        id="circlePath"
        fill="none"
        stroke="black"
        stroke-width="1"
        d="M -15 100 A 1 1 0 0 0 220 100 A 1 1 0 0 0 -15 100"
      />
    </defs>
    <text id="myText">
      <textPath xlink:href="#circlePath" startOffset="80" class="fill-current">
        <tspan dy="0.3em">Hover me!</tspan>
      </textPath>
    </text>
  </svg>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'HoverMe',
})
export default class HoverMe extends Vue {
  head () {
    return {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { href: 'https://fonts.googleapis.com/css2?family=Yomogi&display=swap', rel: 'stylesheet' },
      ],
    }
  }
}
</script>

<style>
svg {
  font-family: 'Yomogi', cursive;
}
</style>
