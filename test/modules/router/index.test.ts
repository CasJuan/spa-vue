import { mount } from '@vue/test-utils'
import { describe } from 'node:test'
import test from 'node:test'
import router from '../../../src/router/index'

describe('Router', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  })

  test('should homepage when visiting', async () => {
    await router.replace('/')
    await router.isReady()
    expect(wrapper.html()).toContain('Bienvenido a nuestro sitio web')
  })
  test('should feactures when visiting', async () => {
    await router.replace('/features')
    await router.isReady()
    await router.push({ name: 'features' })
    expect(wrapper.html()).toContain('Bienvenido a nuestro sitio web')
  })
  test('should pricing when visiting', async () => {
    await router.replace('/pricing')
    await router.isReady()
    await router.push({ name: 'pricing' })
  })
  test('should contact when visiting', async () => {
    await router.replace('/contact')
    await router.isReady()
    await router.push({ name: 'contact' })
  })
})
