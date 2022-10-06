import React from 'react';
import { StyleSheet, View } from "react-native";
import HomeNavbar from "../HomeNavBar/HomeNavBar";
import PokemonList from "../HomePokemonList/PokemonList";
function HomeScreen() {

    return (
        <View style={styles.body}>
            <HomeNavbar />
            <PokemonList />

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