import { mount } from '@vue/test-utils'
import { describe } from 'node:test'
import test from 'node:test'
import router from '../../../src/router/index'
import { RouteLocationNormalized } from 'vue-router'

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
  test('should render loginPage pok emon', async () => {
    await router.replace('/pokemon/151')
    await router.isReady()

    expect(wrapper.find('h1').text()).toContain('Login')
  })
  test('should render loginPage pok emon', async () => {
    localStorage.setItem('userId', 'ABBC-123')

    await router.replace('/pokemon/151')
    await router.isReady()

    expect(wrapper.find('h1').text()).toContain('Pokemon 151')
    expect(wrapper.html()).toContain('')
  })

  test('should convert the segment into numbewr', () => {
    const routes: RouteLocationNormalized = {}
    const pokemonRoute = router.getRoutes().find((route) => route.name === 'pokemon')
    const props = (pokemonRoute?.props as any).default(route)

    expectd(pokemonRoute).toBeTruthy()
    expect()
  })
})
