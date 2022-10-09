import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { POKEMON_TYPE_COLORS } from '../constants/pokemonTypeColors';


const AbilitiesDetails = (props) => {

    const pokemon = props.pokemon;
    const bgColor = POKEMON_TYPE_COLORS[pokemon.types[0].type.name].main;


    return (

        <View style={styles.container}>
            {
                pokemon.abilities.map((stat) => {
                    return (<View key={stat.ability.name} style={[styles.stat_container, {backgroundColor: bgColor}]}>
                        <Text style={styles.stat_text}>{stat.ability.name.toUpperCase()}</Text>
                    </View>)
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginTop: 30,
        alignItems: 'center',

    },
    stat_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        marginBottom: 10,
        borderRadius: 40,
        padding: 10
    },

    stat_title: {
        fontSize: 25,
        fontFamily: 'Pocket Monk',
    },

    stat_text: {
        fontFamily: 'Pocket Monk',
        fontSize: 21,
        color: 'white',

    }

})

export default AbilitiesDetails;