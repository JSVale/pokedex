import React from "react";

/**
 * Components
 */
import PokemonCard from "../components/PokemonCard";

/**
 * Styles
 */
import styles from "../styles/pages/Home.module.css";

/**
 * Services
 */
import { fetchPokemons } from "../services/pokemon";

/**
 * Types
 */
import { Pokemon } from "../types/pokemon";

/**
 * É como se fosse uma roupinha
 */
interface Props {
  pokemons: Pokemon[];
}

const Home = (props: Props) => {
  /**
   * Como fazer um map no React
   */
  console.log(props.pokemons);

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>Pokedex Fatec</h1>

        {/* Listagem dos pokemons */}
        <div className={styles.resultsContainer}>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </div>
      </section>
    </main>
  );
};

/**
 * Buscando dados da Pokeapi.co
 * GetStaticProps é responsável por buscar os dados na API
 * Executada em tempo de build.
 * Ela roda somente no servidor.
 */
export async function getStaticProps() {
  const pokemons = await fetchPokemons();

  return {
    props: {
      pokemons: pokemons,
    },
  };
}

export default Home;
