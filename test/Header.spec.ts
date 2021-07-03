import { mount } from '@vue/test-utils'
import Header from '~/components/Header.vue'
import ProfilePicture from '~/components/ProfilePicture.vue'

describe('Header.vue', () => {
  it('should include ProfilePicture component', () => {
    const wrapper = mount(Header)

    const profilePicture = wrapper.findComponent(ProfilePicture)
    expect(profilePicture.exists()).toBeTruthy()
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
