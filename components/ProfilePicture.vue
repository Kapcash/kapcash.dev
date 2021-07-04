<script lang="ts">
import { ComponentOptions, CreateElement, VNodeData, RenderContext } from 'vue'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { ParticlesComponent } from 'particles.vue'
import maskParticlesOptions from '@/assets/mask_particles'
import HoverMe from '@/components/HoverMe.vue'

@Component({
  name: 'ProfilePicture',
  functional: true,
  components: {
    HoverMe
  }
} as ComponentOptions<Vue>)
export default class ProfilePicture extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly particles!: boolean

  render (h: CreateElement, { data, props }: RenderContext) {
    const commonAttributes: VNodeData = {
      attrs: {
        id: 'profilePicture'
      },
      staticClass: 'rounded-full object-cover border-4 border-pink-900 ' + data.staticClass
    }

    const mediaQuery = process.client && window.matchMedia('(prefers-reduced-motion: reduce)')
    const reduceMotion = mediaQuery && mediaQuery.matches
    if (props.particles && !reduceMotion) {
      return h('div', {
        staticClass: 'relative pb-8 text-pink-900'
      }, [
        h(HoverMe),
        h(ParticlesComponent, { ...commonAttributes, props: { id: 'profilePicture', options: maskParticlesOptions } })
      ])
    } else {
      return h('img', { ...commonAttributes, attrs: { src: '/moi.jpg', alt: 'My smiling face' } })
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
  transition: border-color 200ms ease-out;
  &:hover {
    border-color: rgb(210 7 87);
  }
}

img {
  width: 200px;
  height: 200px;
}
</style>
