import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { POKEMON_TYPE_COLORS } from '../constants/pokemonTypeColors';

const PokemonCard = (props) => {

    const backgroundColor = POKEMON_TYPE_COLORS[props.pokemon.types[0].type.name];

    //Capitalizes the first letter in the pokemon name. pikachu => Pikachu
    const pokemonName = props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1);

    return (
        <View style={[styles.container, {backgroundColor}]}>
            <View style={styles.left_side_container}>
                <Text style={styles.pokemon_name}>{pokemonName}</Text>
                <View style={styles.pokemon_types_container}>

                    {props.pokemon.types.map((type) =>
                        <Text key={type.type.url} style={styles.pokemon_type_text}>{type.type.name}</Text> 
                    )}

                </View>
            </View>

            <View style={styles.right_side_container}>
                <Image
                    source={
                        { uri: props.pokemon.sprites.front_default }
                    }
                    style={styles.pokemon_image}
                    resizeMode='cover'
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 85,
        marginTop: 20,
        marginLeft: 5,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        padding: 10,
        flexDirection: 'row',
        elevation: 20,
        shadowColor: 'black',
    },
    left_side_container: {
        marginLeft: 10,
        width: 'auto',
        height: '100%',
    },
    pokemon_name: {
        fontFamily: 'Segoe UI bold',
        opacity: 0.8,
        fontSize: 25,
        color: 'black',
    },
    right_side_container: {
        width: '40%',
        height: '135%',
        backgroundColor: 'white',
        marginLeft: 'auto',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        position: 'relative',
        bottom: 13,
        right: -20,
        justifyContent: 'center',
        opacity: 0.9
    },
    pokemon_image: {
        // height: 90,
        // maxHeight: 100,
        // width: 'auto',
        width: 'auto',
        height: '95%',
        maxWidth: 110,
        marginLeft: 25,
        // maxHeight: 90,

    },
    pokemon_types_container: {
        flexDirection: 'row',
        marginTop: 'auto',
        marginBottom: 10,
    },
    pokemon_type_text: {
        marginRight: 30,

    }
})

export default PokemonCard;