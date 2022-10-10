import { LIMIT, POKEMON_ENDPOINT } from "../constants/pokemonEndpoint";
import { pokemonApi } from "./pokemonApi";

export const fetchPokemonList = async () => {
    try {
        const params = '?limit=' + LIMIT;
        const url = POKEMON_ENDPOINT + params;

        const response = await pokemonApi.get(url)
        return response.data.results;
    } catch (error) {
        throw error;
    }
}

export const fetchPokemonDataByURL = async (pokemonUrl) => {
    try {
        const response = await pokemonApi.get(pokemonUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchAllPokemonData = async () => {
    try {
        const pokemonList = await fetchPokemonList();

        let pokemonDataArray = [];

        for(const pokemon of pokemonList) {
            let res = await pokemonApi.get(pokemon.url);
            pokemonDataArray.push(res.data);
        }

        return pokemonDataArray;


    } catch (e) {
        console.error(e);
    }
}