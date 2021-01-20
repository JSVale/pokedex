import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

// Pokemon colors
import pokemonColors from '../../constants/pokemonColors'

/**
 * Types
 */
import { Pokemon } from '../../types/pokemon'

const LIMIT_OF_POKEMONS_TO_SEARCH = 100

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

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const pokemonsData = await axios.get<PokemonResponseObject>(
    `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT_OF_POKEMONS_TO_SEARCH}`
  )

  const pokemonsInformation = pokemonsData.data.results

  const pokemons = (
    await Promise.all(
      pokemonsInformation.map(info => {
        return axios.get(info.url)
      })
    )
  ).map(response => response.data) as Pokemon[]

  const formattedPokemons: Pokemon[] = pokemons
    .map(pokemon => {
      const color = pokemonColors.find(color => {
        const specie = color.pokemon_species.find(
          specie => specie.name === pokemon.species.name
        )

        return !!specie
      })

      return {
        id: pokemon.id,
        name: pokemon.name,
        species: pokemon.species,
        sprites: {
          front_default: pokemon.sprites.front_default,
          other: {
            'official-artwork': pokemon.sprites.other['official-artwork'],
            dream_world: pokemon.sprites.other.dream_world
          }
        },
        color: color.name
      }
    })
    // This shuffles the array
    .sort(() => Math.random() - 0.5)

  res.status(200).json(formattedPokemons)
}
