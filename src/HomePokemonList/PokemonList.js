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

    // const renderItem = ({ item }) => (
    //     <Item title={item.title} />
    //   );

    //   return (
    //     <SafeAreaView style={styles.container}>
    //       <FlatList
    //         data={DATA}
    //         renderItem={renderItem}
    //         keyExtractor={item => item.id}
    //       />

    const renderPokemonCard = ({ pokemonParam }) => (
        <PokemonCard pokemon={pokemonParam} />
    );

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1, width: '100%', flexGrow: 1 }}>
            <FlatList
                data={pokemonList}
                renderItem={({item}) => <PokemonCard pokemon={item} />}
                keyExtractor={item => item.name} 
                scrollEnabled={true}
                />
        </View>
    );
}

export default PokemonList;