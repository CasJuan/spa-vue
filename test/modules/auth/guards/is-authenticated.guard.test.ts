import { beforeEach, describe } from 'node:test'
import test from 'node:test'
import isAuthenticatedGuard from '../../../../src/modules/auth/guards/is-authenticated.guard'
import type { RouteLocationNormalized } from 'vue-router'

describe('<is-authenticated.guard />', () => {
  const to: RouteLocationNormalized = {
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    name: undefined,
    path: '/home-screen',
    params: {},
    meta: {},
  }

  const from: any = {}

  const next = vi.fn()

  beforeEach(() => {
    localStorage.clear()
  })

  test('should block if not authenticated', async () => {
    await isAuthenticatedGuard(to, to, next)

    expect(next).toHaveBeenCalledWith({
      name: 'login',
    })
  })

  test('should called localStorage if not authenticated', async () => {
    await isAuthenticatedGuard(to, to, next)

    const lastPath = localStorage.getItem('lastPath')

    expect(lastPath).toBe(to.path)
  })

  test('should block if not authenticated with spies', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')

    await isAuthenticatedGuard(to, from, next)

    expect(setItemSpy).toHaveBeenCallWith('lastPath', to.path)
  })
})
