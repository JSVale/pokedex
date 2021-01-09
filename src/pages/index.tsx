import React, { useState } from 'react'
import { NextPage } from 'next'

// Styles
import HomeStyles from '../styles/pages/Home.module.css'

import Input from '../components/Input'
import PokemonCard from '../components/PokemonCard'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')

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
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  )
}

export default Home
