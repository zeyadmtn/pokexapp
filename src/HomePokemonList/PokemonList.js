import React, { useState } from 'react';
import { ActivityIndicator, FlatList, View } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, loadMore, isPaginationLoading }) => {

    const [scrollPos, setScrollPos] = useState(0);


    const renderPokemonCard = ({ item }) => (
        <PokemonCard pokemon={item} />
    );

    return (
        <View style={{ flex: 1, width: '100%', flexGrow: 1, marginBottom: 40, overflow: 'hidden'}}>
            <FlatList
                data={pokemonList}
                renderItem={renderPokemonCard}
                keyExtractor={item => item.name}
                scrollEnabled={true}
                onEndReached={loadMore}
                ListFooterComponent={
                    isPaginationLoading ?
                    <ActivityIndicator size={40} color="red" style={{marginTop: 20, marginBottom: 60,}}/>
                    : null
                }
                
                removeClippedSubviews={true}
            />
        </View>
    );
}

export default PokemonList;