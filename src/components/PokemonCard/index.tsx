import React from 'react'
import Image from 'next/image'

import Pokeball from '../Pokeball'

import styles from './styles.module.css'

interface Props {
  url?: string
}

const PokemonCard: React.FC<Props> = ({ url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.pokemonInfo}>
        <h1>Pikachu</h1>
        <div className={styles.pokemonType}>
          <span>Grass</span>
        </div>
      </div>

      <div className={styles.pokeball}>
        <Pokeball />
      </div>

      <div className={styles.pokemonImage}>
        <Image
          src={
            url ||
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
          }
          alt="Mountains"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default PokemonCard
