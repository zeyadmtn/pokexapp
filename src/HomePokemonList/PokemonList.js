import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, ScrollView, View } from "react-native";
import { fetchAllPokemonData } from "../api/fetchPokemonData";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState();

    const fetchData = async () => {
        const data = await fetchAllPokemonData();
        setPokemonList(data);
    }

    const renderPokemonCard = ({ item }) => (
        <PokemonCard pokemon={item} />
    );

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1, width: '100%', flexGrow: 1, }}>
            <FlatList
                data={pokemonList}
                renderItem={renderPokemonCard}
                keyExtractor={item => item.name} 
                scrollEnabled={true}
                />
        </View>
    );
}

export default PokemonList;