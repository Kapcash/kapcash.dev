import { mount } from '@vue/test-utils'
import { hexToRGB } from './helpers'
import GithubCard from '~/components/GithubCard.vue'

describe('GithubCard.vue', () => {
  it('should include all required props elements', () => {
    const title = 'My project title'
    const description = 'My project description'
    const link = 'http://locahost:1234/my-project-title'

    const wrapper = mount(GithubCard, {
      propsData: {
        title,
        description,
        link,
      },
    })

    const anchor = wrapper.find('a.github-card')
    expect(anchor.attributes('href')).toEqual(link)

    const titleSpan = wrapper.find('.repo-title')
    expect(titleSpan.text()).toEqual(title)

    const descriptionSpan = wrapper.find('.repo-description')
    expect(descriptionSpan.text()).toEqual(description)

    const extraInfos = wrapper.find('p.inline-block')
    expect(extraInfos.element.children).toHaveLength(0)
  })

  it('should include all optional props elements', () => {
    const title = 'My project title'
    const description = 'My project description'
    const link = 'http://locahost:1234/my-project-title'
    const mainLanguage = 'javascript'
    const nbStars = 5
    const nbForks = 8
    const languageColor = '#123456'

    const wrapper = mount(GithubCard, {
      propsData: {
        title,
        description,
        link,
        mainLanguage,
        nbStars,
        nbForks,
        languageColor,
      },
    })

    const anchor = wrapper.find('a.github-card')
    expect(anchor.attributes('href')).toEqual(link)

    const titleSpan = wrapper.find('.repo-title')
    expect(titleSpan.text()).toEqual(title)

    const descriptionSpan = wrapper.find('.repo-description')
    expect(descriptionSpan.text()).toEqual(description)

    const extraSpans = wrapper.findAll('p.inline-block > span')
    const languageElt = extraSpans.at(0)
    const starsElt = extraSpans.at(1)
    const forksElt = extraSpans.at(2)

    expect(languageElt).toBeDefined()
    expect((languageElt.find('i.badge').element as HTMLElement).style.backgroundColor).toEqual(hexToRGB(languageColor))
    expect(starsElt).toBeDefined()
    expect(starsElt.text()).toEqual(nbStars.toString())
    expect(forksElt).toBeDefined()
    expect(forksElt.text()).toEqual(nbForks.toString())
  })
})
