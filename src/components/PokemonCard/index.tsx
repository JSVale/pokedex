import React from 'react'
import Image from 'next/image'

/**
 * Components
 */
import Pokeball from '../Pokeball'

/**
 * Styles
 */
import styles from './styles.module.css'
import { colorMapping } from '../../styles/colors'

/**
 * Types
 */
import { Pokemon } from '../../types/pokemon'

interface Props {
  pokemon: Pokemon
}

const PokemonCard: React.FC<Props> = props => {
  const { pokemon } = props

  const backgroundColor: string = colorMapping[pokemon.color]

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.pokemonInfo}>
        <h1>{pokemon.name}</h1>
        <div className={styles.pokemonType}>
          {pokemon.pokemonTypes.map(type => {
            return <span key={type.name}>{type.name}</span>
          })}
        </div>
      </div>

      <div className={styles.pokeball}>
        <Pokeball />
        <div className={styles.pokemonImage}>
          <Image
            src={pokemon.sprites?.other['official-artwork'].front_default}
            alt="Mountains"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
