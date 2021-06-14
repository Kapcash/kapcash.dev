import { mount } from '@vue/test-utils'
import Header from '~/components/Header.vue'

describe('Header.vue', () => {
  it('should include photo', () => {
    const wrapper = mount(Header)

    const img = wrapper.find('img')
    expect(img.attributes('src')).toContain('assets/img/moi.jpg')
  })

  it('should include at least three tags', () => {
    const wrapper = mount(Header)

    const tags = wrapper.findAll('.tag')
    expect(tags.length).toBeGreaterThanOrEqual(3)
    tags.wrappers.forEach((tag) => {
      expect(tag.text().startsWith('#')).toBeTruthy()
    })
  })
})
