import Vue, { VueConstructor } from 'vue'
import { createLocalVue, mount } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import TwitterTimeline from '~/components/TwitterTimeline.vue'

describe('TwitterTimeline.vue', () => {
  let localVue: VueConstructor<Vue>
  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(VueMeta, { keyName: 'head' })
  })

  it('should include the twitter timeline', () => {
    const wrapper = mount(TwitterTimeline, { localVue })

    const anchorTag = wrapper.find('.timeline-wrapper a')

    expect(anchorTag.attributes('href')).toEqual('https://twitter.com/Kapcash')
    expect(anchorTag.classes()).toContain('twitter-timeline')

    const head = (wrapper.vm as any).$metaInfo
    expect(head.script).toBeDefined()
    expect(head.script[0].src).toEqual('https://platform.twitter.com/widgets.js')
  })
})
