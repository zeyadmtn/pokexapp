import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, ScrollView, View } from "react-native";
import { fetchAllPokemonData } from "../api/fetchPokemonData";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {

    const renderPokemonCard = ({ item }) => (
        <PokemonCard pokemon={item} />
    );

    const pokemonList = props.pokemonList;

    return (
        <View style={{ flex: 1, width: '100%', flexGrow: 1, marginBottom: 40, }}>
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