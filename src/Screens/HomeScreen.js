import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from "react-native";
import { fetchAllPokemonData } from '../api/fetchPokemonData';
import Footer from '../Footer/Footer';
import HomeNavbar from "../HomeNavBar/HomeNavBar";
import PokemonCard from '../HomePokemonList/PokemonCard';
import PokemonList from "../HomePokemonList/PokemonList";

function HomeScreen() {

    const [pokemonList, setPokemonList] = useState();

    const fetchData = async () => {
        const data = await fetchAllPokemonData();
        setPokemonList(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.body}>

            <HomeNavbar />
            <PokemonList pokemonList={pokemonList}/>
            <Footer />

        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white'
    },
})

export default HomeScreen;