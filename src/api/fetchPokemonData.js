import { POKEMON_ENDPOINT } from "../constants/pokemonEndpoint";
import { pokemonApi } from "./pokemonApi";

export const fetchPokemonList = async (offset, limit) => {
    try {
        const params = '?offset=' + 0 + '&limit=' + 10;
        const url = POKEMON_ENDPOINT + params;

        const response = await pokemonApi.get(url)
        return response.data.results;
    } catch (error) {
        throw error;
    }
}

export const fetchPokemonDataByURL = async (pokemonUrl) => {
    const initial_url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=5'

    let pokemonDataArray = [];
    let data, next;

    try {

        if (pokemonUrl.length < 1) {
            const response = await pokemonApi.get(initial_url);
            [data, next] = [response.data.results, response.data.next];

        } else {
            const response = await pokemonApi.get(pokemonUrl);
            [data, next] = [response.data.results, response.data.next];
        }

        for (const pokemon of data) {
            let res = await pokemonApi.get(pokemon.url);
            pokemonDataArray.push(res.data);
        }

        return [pokemonDataArray, next];

    } catch (error) {
        throw error;
    }
}

export const fetchIndividualPokemon = async (pokemonUrl) => {
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

        for (const pokemon of pokemonList) {
            let res = await pokemonApi.get(pokemon.url);
            pokemonDataArray.push(res.data);
        }

        return pokemonDataArray;


    } catch (e) {
        console.error(e);
    }
}