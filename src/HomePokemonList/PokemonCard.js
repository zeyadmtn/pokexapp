import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

const PokemonCard = (props) => {

    const mockPokemon = {
        name: 'Charizard',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        type: 'fire',

    }
    return (
        <View style={styles.container}>
            <View style={styles.left_side_container}>
                <Text style={styles.pokemon_name}>{props.pokemon.name}</Text>
                <View style={styles.pokemon_types_container}>
                    <Text>{props.pokemon.types[0].type.name}</Text>
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
        backgroundColor: '#fb7c7c',
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
        marginTop: 'auto',
        marginBottom: 10,
    }
})

export default PokemonCard;