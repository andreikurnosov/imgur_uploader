import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home'
import VueRouter from 'vue-router'
import AppHeader from '@/components/AppHeader'

const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter()

describe('Home', () => {
  const build = () => {
    const wrapper = shallowMount(Home, {
      localVue,
      router
    })

    return {
      wrapper,
      appHeader: () => wrapper.findComponent(AppHeader)
    }
  }

  it('renders the component', () => {
    const { wrapper } = build()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    const { appHeader } = build()

    expect(appHeader().exists()).toBe(true)
  })
})
