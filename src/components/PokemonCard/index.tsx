import React from "react";
import Image from "next/image";

/**
 * Styles
 */
import styles from "./styles.module.css";

/**
 * Components
 */
import Pokeball from "../Pokeball";

const PokemonCard: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Informações do pokemon */}
      <div className={styles.info}>
        <h1>Pikachu</h1>
        <div className={styles.type}>
          <span>Eletric</span>
          <span>Water</span>
        </div>
      </div>

      {/* Pokeball e foto do Pokemon */}
      <div className={styles.pokeball}>
        <Pokeball />

        {/* Imagem do pokemon */}
        <div className={styles.image}>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
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
