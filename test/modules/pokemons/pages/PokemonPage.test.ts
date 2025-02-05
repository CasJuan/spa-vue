import test, { describe } from 'node:test'
import PokemonPage from '../../../../src/modules/pokemons/pages/PokemonPage.vue'
import { RouterLink } from 'vue-router'
import { wrap } from 'module'

describe('<PokemonPage />', () => {
  const wrapper = mount(PokemonPage, {
    props: {
      id: 25,
    },
    global: {
      stubs: {
        RouterLink: RouterlinkStub,
      },
    },
  })

  test('should render the component correctly', () => {
    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg',
    )

    console.log(wrapper.html())
  })

  test('should redirect to the next pokemon', () => {
    const link = wrapper.findComponent(RouterlinkStub)
    expect(link.props().to).toEqual({ name: 'pokemon', params: { id: 26 } })
  })
})
