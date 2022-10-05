import React from 'react';
import { View } from "react-native";
import HomeNavbar from "../HomeNavBar/HomeNavBar";
import PokemonList from "../HomePokemonList/PokemonList";

function HomeScreen() {
    return (
        <View>
            <HomeNavbar />
            <PokemonList />

        </View>
    );
}

export default HomeScreen;