import api from './api'

export interface Result {
  name: string
  url: string
}

export interface PokemonResponseObject {
  count: number
  next?: string
  previous?: string
  results: Result[]
}

export const fetchHomePagePokemons = async () => {
  // Fetch for 20 pokemons
  const pokemonsData = await api.get<PokemonResponseObject>('/pokemons')
  const pokemons = pokemonsData.data.results

  // Fetch each pokemon
}
