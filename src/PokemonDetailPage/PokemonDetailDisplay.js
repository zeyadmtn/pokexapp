import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const PokemonDetailDisplay = (props) => {

    return (
        <ImageBackground source={{ uri: 'https://i.ibb.co/WgTZWXm/gameboy-frame-master.png' }}
            style={[styles.container, { backgroundColor: props.bgColor }]}>

            <View style={styles.content_container}>
                <Text style={styles.pokemon_name}>{props.pokemon.name}</Text>

                <ImageBackground source={require('../../assets/images/pokeball.png')}
                    style={styles.pokeball_image}>
                    <Image
                        source={
                            { uri: props.pokemon.sprites.front_default }
                        }
                        style={styles.pokemon_image}
                        resizeMode='cover'
                    />
                </ImageBackground>

                <View style={styles.bottom_container}>

                    <View style={styles.pokemon_types_container}>
                        {props.pokemon.types.map((type) =>
                            <View key={type.type.url} style={[styles.pokemon_type_container, { backgroundColor: props.bgColor }]}>
                                <Text style={styles.pokemon_type_text}>{type.type.name}</Text>
                            </View>
                        )}

                    </View>
                    <View style={styles.info_container}>
                        <View styles={styles.height_container}>
                            <Text styles={styles.height_title}>Height</Text>
                            <Text styles={styles.height_text}>{props.pokemon.height}</Text>

                        </View>
                        <View styles={styles.weight_container}>
                            <Text styles={styles.weight_title}>Weight</Text>
                            <Text styles={styles.weight_text}>{props.pokemon.weight}</Text>
                        </View>
                    </View>
                </View>



            </View>
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
    },

    pokemon_name: {
        fontFamily: 'Pocket Monk',
        fontSize: 40,
        color: 'white',
        letterSpacing: 4
    },

    pokemon_image: {
        width: '100%',
        height: "70%",
        maxWidth: 160,
        maxHeight: 200,

    },
    pokeball_image: {
        marginTop: 20,
        width: '100%',
        height: "70%",
        maxWidth: 180,
        maxHeight: 265,
        alignItems: 'center'
    },
    content_container: {
        height: '100%',
        width: '62.7%',
        alignItems: 'center',
        paddingTop: 50,
        borderWidth: 5,
        borderColor: 'black'

    },
    pokemon_types_container: {
        flexDirection: 'row',
        marginBottom: 10,
        alignSelf: 'center'
    },
    pokemon_type_container: {
        borderRadius: 40,
        padding: 5,
        paddingHorizontal: 10,
        opacity: 0.8,
        marginRight: 10,
    },

    pokemon_type_text: {
        fontFamily: 'Pokemon GB',
        letterSpacing: -4.5,
        color: 'white',

    },
    bottom_container: {
        marginTop: -60,
        width: '90%',
        height: '57.5%',
        paddingTop: 20,
        backgroundColor: 'white',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
    },
    info_container: {
        width: '90%',
        height: 70,
        alignSelf: 'center',
        backgroundColor: 'white',
        elevation: 7,
        shadowColor: 'black',
        borderRadius: 15,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
        

    },
    // height_container: {
    //     width: '50%',
    //     height: 'auto',
    // },
    // weight_container: {
    //     width: '50%',
    //     height: '100%',
    //     marginRight: 'auto',
    // },
    height_text: {
    }
});

export default PokemonDetailDisplay;