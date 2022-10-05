import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import {fetchAllPokemonData, fetchPokemonList} from "../api/fetchPokemonData";
import React from 'react';

function PokemonList() {

    const [pokemonList, setPokemonList] = useState();

    const fetchData = async () => {
        const data = await fetchAllPokemonData();
        setPokemonList(data);
    }

    useEffect(() => {
        fetchData();
      }, []);

    return ( 
        <View><Text>hi </Text></View>
     );
}

export default PokemonList;