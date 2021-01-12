import React, { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import axios from 'axios'

/**
 * Components
 */
import Input from '../components/Input'
import PokemonCard from '../components/PokemonCard'

// Styles
import HomeStyles from '../styles/pages/Home.module.css'

/**
 * Types
 */
import { Pokemon } from '../types/pokemon'

interface Props {
  pokemons: Pokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {
  const [search, setSearch] = useState('')

  console.log(pokemons)

  return (
    <div className={HomeStyles.container}>
      <h1 className={HomeStyles.title}>Pokedex Fatec</h1>

      <div className={HomeStyles.searchContainer}>
        <Input
          onChange={event => setSearch(event.target.value)}
          value={search}
        />
      </div>

      <div className={HomeStyles.resultsContainer}>
        <PokemonCard />
        <PokemonCard url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
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
