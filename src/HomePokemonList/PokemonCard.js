import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Actions } from 'react-native-router-flux';
import { back } from 'react-native/Libraries/Animated/Easing';
import { POKEMON_TYPE_COLORS } from '../constants/pokemonTypeColors';

const PokemonCard = (props) => {

    const backgroundColor = POKEMON_TYPE_COLORS[props.pokemon.types[0].type.name].main;

    //Capitalizes the first letter in the pokemon name. pikachu => Pikachu
    const pokemonName = props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1);

    return (
        <Pressable onPress={() => Actions.pokemonDetail({pokemon: props.pokemon, bgColor: backgroundColor})} style={[styles.container, { backgroundColor }]} >
            <View style={styles.left_side_container}>
                <Text style={styles.pokemon_name}>{pokemonName}</Text>
                <View style={styles.pokemon_types_container}>

                    {props.pokemon.types.map((type) =>
                    <View key={type.type.url} style={styles.pokemon_type_container}>
                        <Text  style={styles.pokemon_type_text}>{type.type.name}</Text>
                    </View>
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

        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 78,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 5,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        padding: 10,
        flexDirection: 'row',
        elevation: 20,
        shadowColor: 'black',
        paddingTop: 15,
        overflow: 'visible',

    },
    left_side_container: {
        marginLeft: 10,
        width: 'auto',
        height: '100%',
    },
    pokemon_name: {
        fontFamily: 'Pixeloid Mono',
        opacity: 0.8,
        fontSize: 22,
        color: 'white',
    },
    right_side_container: {
        width: '40%',
        height: '135%',
        //backgroundColor: 'white',
        marginLeft: 'auto',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        position: 'relative',
        bottom: 13,
        right: -20,
        justifyContent: 'center',
        opacity: 0.9,
        overflow: 'visible'

    },
    pokemon_image: {
        width: 'auto',
        height: '170%',
        maxWidth: 160,
        marginLeft: 25,
    },
    pokemon_types_container: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    pokemon_type_container: {
        marginRight: 30,
        borderRadius: 40,
        padding: 5,
        backgroundColor: '#eeedf0',
        opacity: 0.8,
    },

    pokemon_type_text: {
        fontFamily: 'Pocket Monk',
        letterSpacing: 2.5,

    }
    
})

export default PokemonCard;