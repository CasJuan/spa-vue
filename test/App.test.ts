import { mount, shallowMount } from '@vue/test-utils'
import router from '../src/router/index'
import { describe } from 'node:test'

describeribe('<App/>', () => {
  testt('should be render correctly with RouterView', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    })

    const routerView = wrapper.findComponent({ name: 'RouterView' })
    expect(routerView.exists()).toBe(true)
  })
})
