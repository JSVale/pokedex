import React, { useState } from "react";

/**
 * Components
 */
import PokemonCard from "../components/PokemonCard";
import Input from "../components/Input";

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
  const [search, setSearch] = useState("");
  // Estado para os pokemons
  // O estado inicial é o que vem das props
  // Estamos fazendo isso pq não podemos alterar a props diretamente
  // Só podemos alterar o estado.
  const [statePokemons, setStatePokemons] = useState(props.pokemons);

  // Lidar com o evento "digitar" no input
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value === "") {
      setStatePokemons(props.pokemons);
    }

    setSearch(event.target.value);

    const regex = `${event.target.value}.*`;

    const filteredPokemons = props.pokemons.filter((pokemon) =>
      pokemon.name.match(new RegExp(regex, "is"))
    );

    setStatePokemons(filteredPokemons);
  }

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>Pokedex Fatec</h1>

        <div className={styles.inputContainer}>
          <Input
            onChange={handleOnChange}
            value={search}
            placeholder="Digite o nome do pokemon"
          />
        </div>

        {/* Listagem dos pokemons */}
        <div className={styles.resultsContainer}>
          {statePokemons?.map(function (pokemon) {
            // Precisa atribuir uma key
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
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
    // INCREMENTAL STATIC REGENERATION
    revalidate: 1,
  };
}

export default Home;
