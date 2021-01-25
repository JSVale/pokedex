import React from "react";
import { NextPage } from "next";

/**
 * Components
 */
import PokemonCard from "../components/PokemonCard";

/**
 * Styles
 */
import styles from "../styles/pages/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>Pokedex Fatec</h1>

        {/* Listagem dos pokemons */}
        <div>
          <PokemonCard />
        </div>
      </section>
    </main>
  );
};

export default Home;
