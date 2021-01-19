/* eslint-disable indent */
import React, { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import axios from 'axios'

/**
 * Components
 */
import Input from '../components/Input'
import PokemonCard from '../components/PokemonCard'

// Styles
import styles from '../styles/pages/Home.module.css'

/**
 * Types
 */
import { Pokemon } from '../types/pokemon'

interface Props {
  pokemons: Pokemon[]
}

const Home: NextPage<Props> = ({ pokemons: pokemonsFromBackend }) => {
  const [search, setSearch] = useState('')

  const [pokemons, setPokemons] = useState<Pokemon[]>(pokemonsFromBackend)

  const handleTypeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setPokemons([])
    }

    setSearch(event.target.value)

    const regex = `${event.target.value}.*`

    const filteredPokemons = pokemonsFromBackend.filter(pokemon =>
      pokemon.name.match(new RegExp(regex, 'is'))
    )

    setPokemons(filteredPokemons)
  }

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>Pokedex Fatec</h1>

        <div className={styles.searchContainer}>
          <Input onChange={handleTypeEvent} value={search} />
        </div>

        <div className={styles.resultsContainer}>
          {pokemons?.map(pokemon => {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />
          })}
        </div>
      </section>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get<Pokemon[]>(
    `${process.env.WEB_APP_URL}/api/pokemons`
  )

  const pokemons = response.data

  return { props: { pokemons } }
}

export default Home
