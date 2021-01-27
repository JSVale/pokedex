import React from "react";
import Image from "next/image";

/**
 * Styles
 */
import styles from "./styles.module.css";
import { colorMapping } from "../../styles/colors";

/**
 * Components
 */
import Pokeball from "../Pokeball";

/**
 * Types
 */
import { Pokemon } from "../../types/pokemon";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = (props) => {
  // props.pokemon.color = black | blue | pink | red
  const backgroundColor = colorMapping[props.pokemon.color];

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      {/* Informações do pokemon */}
      <div className={styles.info}>
        <h1>{props.pokemon.name}</h1>

        {/* Div tipos do Pokemon */}
        <div className={styles.type}>
          {props.pokemon.pokemonTypes.map(function (type) {
            return <span key={type.name}>{type.name}</span>;
          })}
        </div>
      </div>

      {/* Pokeball e foto do Pokemon */}
      <div className={styles.pokeball}>
        <Pokeball />

        {/* Imagem do pokemon */}
        <div className={styles.image}>
          <Image
            src={props.pokemon.sprites.other["official-artwork"].front_default}
            alt="Pokemon"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
