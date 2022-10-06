import { View } from "react-native";
import React from 'react';
import PokemonDetailDisplay from "../PokemonDetailPage/PokemonDetailDisplay";

const PokemonDetailScreen = (props) => {
    return ( 
        <PokemonDetailDisplay pokemon={props.pokemon} bgColor={props.bgColor}/>
     );
}

export default PokemonDetailScreen;