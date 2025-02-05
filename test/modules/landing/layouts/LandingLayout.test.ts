import { shallowMount } from '@vue/test-utils'
import { describe } from 'node:test'
import test from 'node:test'
import LandingLayout from '../../../../src/modules/landing/layouts/LandingLayout.vue'
import router from '../../../../src/router'
import { RouterView } from 'vue-router'

describe('<LandingLayout />', () => {
  test('should be render correctly', () => {
    const wrapper = shallowMount(LandingLayout, {
      global: {
        plugins: [router],
      },
    })
    console.log(wrapper)
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('main').exists()).toBe(true)
    expect(wrapper.find('footer').exists()).toBe(true)
    expect(wrapper.find('footer').html()).toContain('Acme Corporation')
    //expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
    expect(wrapper.findComponent(RouterView).exists()).toBe(true)
  })
})
