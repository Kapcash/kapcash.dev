<script lang="ts">
import { ComponentOptions, CreateElement, VNodeData } from 'vue'
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import { ParticlesComponent } from 'particles.vue'
import maskParticlesOptions from '@/assets/mask_particles'

@Component({
  functional: true
} as ComponentOptions<Vue>)
export default class Header extends Vue {
  render (h: CreateElement, _ctx: Context) {
    const commonAttributes: VNodeData = {
      attrs: {
        id: 'profilePicture'
      },
      staticClass: 'rounded-full object-cover border-4 border-pink-900'
    }

    const mediaQuery = process.client && window.matchMedia('(prefers-reduced-motion: reduce)')
    const reduceMotion = mediaQuery && mediaQuery.matches
    if (reduceMotion) {
      return h('img', { ...commonAttributes, attrs: { src: '/moi.jpg', alt: 'My smiling face' } })
    } else {
      return h(ParticlesComponent, { ...commonAttributes, props: { id: 'profilePicture', options: maskParticlesOptions } })
    }
  }
}
</script>

<style lang="postcss" scoped>
#profilePicture {
  width: 200px;
  height: 200px;
  overflow: hidden;
  ::v-deep .tsparticles-canvas-el {
    position: static !important;
  }
}

img {
  width: 200px;
  height: 200px;
}
</style>
