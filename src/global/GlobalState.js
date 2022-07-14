import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [addMorePokemon , setAddPokemon] = useState(20)

  useEffect(() => {getPokemonNames()}, []);
  useEffect(() => {getPokemonDetails()}, [pokemonNames]);

  const getPokemonDetails = () => {
    const newList = [];
    pokemonNames.forEach((item) => {
      axios
        .get(`${BASE_URL}/pokemon/${item.name}`)

        .then((response) => {
          newList.push(response.data);
          if (newList.length === addMorePokemon) {
            setPokemons(newList);
          }
        }
      )
        .catch((error) => 
            console.log(error.message));
      }
    )
  }

  

  const addPokemonOnPage = () => {
   const soma = addMorePokemon + 9
   setAddPokemon(soma)
  }

  const getPokemonNames = () => {
    axios
      .get(`${BASE_URL}/pokemon?limit=${addMorePokemon}`)
      .then((response) => {
        setPokemonNames(response.data.results);
      }
    )
      .catch((error) => {
        console.log(error.message)
      }
    )
  }


  const data = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    getPokemonDetails,
    addPokemonOnPage,
    addMorePokemon,
    getPokemonNames
  };

  return <GlobalStateContext.Provider value={data}>
          {props.children}
        </GlobalStateContext.Provider>

};

export default GlobalState;