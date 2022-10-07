import React, { useEffect, useState } from 'react';
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { Actions } from 'react-native-router-flux';
import IconFW from 'react-native-vector-icons/FontAwesome';
import IconMT from 'react-native-vector-icons/MaterialIcons';
import { POKEMON_TYPE_COLORS } from '../constants/pokemonTypeColors';
import DetailsSection from './DetailsSection';

const PokemonDetailDisplay = (props) => {

    const [isFavorite, setIsFavorite] = useState(false)

    const pokemon = props.pokemon;
    const bgColor = POKEMON_TYPE_COLORS[pokemon.types[0].type.name].main;
    const accentColor = POKEMON_TYPE_COLORS[pokemon.types[0].type.name].accent;

    
    return (
        <View style={styles.container}>
            
            <StatusBar backgroundColor={bgColor} barStyle="light-content" hidden={false} />
            <View style={[styles.top_bar, { backgroundColor: bgColor }]}>

                <Pressable onPress={() => {
                    Actions.pop();
                }}
                    style={styles.back_icon_pressable}>

                    <IconFW name='arrow-left'
                        color={'white'}
                        style={styles.back_icon_pressable}
                        size={15} />

                </Pressable>

                <Text style={styles.pokemon_name}>{pokemon.name}</Text>
            </View>

            <View style={[styles.image_parent_container, { backgroundColor: accentColor }]}>
                {isFavorite ? (<IconMT name="favorite" size={35} style={[styles.favorite_icon, {color: 'red'}]} />) 
                :
                (<IconMT name="favorite-outline" size={35} style={styles.favorite_icon} />)
                }

                <Image
                    source={
                        { uri: pokemon.sprites.other['official-artwork'].front_default }
                    }
                    style={styles.pokemon_image}
                    resizeMode='cover'
                />
            </View>
            <View style={[styles.types_container, {backgroundColor: bgColor}]}>
            {pokemon.types.map((type) =>
                            <View  style={[styles.pokemon_type_container, {backgroundColor: accentColor}]}>
                                <Text style={styles.pokemon_type_text}>{type.type.name.toUpperCase()}</Text>
                            </View>
                        )}
            </View>
            <DetailsSection pokemon={pokemon} mainColor={bgColor}/>
        </View>
        // <ImageBackground 
        // source={require('../../assets/images/pokeballDarker.png')}
        // style={styles.container}
        // resizeMode='contain'
        // imageStyle={{bottom: 280, opacity: 0.1}}>


        //     <View style={styles.content_container}>
        //         <Text style={styles.pokemon_name}>{props.pokemon.name}</Text>

        //         <ImageBackground source={{ uri: 'https://i.ibb.co/WgTZWXm/gameboy-frame-master.png' }}
        //         style={[styles.pokemon_image_container, {backgroundColor: props.bgColor}]}
        //         // imageStyle={{ borderRadius: 40 }}
        //         >


        //             {/* <ImageBackground source={require('../../assets/images/pokeball.png')} */}
        //                 {/* style={styles.pokeball_image}> */}

        //                 <Image
        //                     source={
        //                         { uri: props.pokemon.sprites.front_default }
        //                     }
        //                     style={styles.pokemon_image}
        //                     resizeMode='cover'
        //                 />
        //             {/* </ImageBackground> */}
        //         </ImageBackground>


        //         <View style={[styles.bottom_container, {backgroundColor: props.bgColor,}]}>

        //             <View style={styles.pokemon_types_container}>
        //                 {props.pokemon.types.map((type) =>
        //                     <View key={type.type.url} style={styles.pokemon_type_container}>
        //                         <Text style={styles.pokemon_type_text}>{type.type.name}</Text>
        //                     </View>
        //                 )}

        //             </View>
        //             <View style={styles.info_container}>
        //                 <View styles={styles.height_container}>
        //                     <Text styles={styles.height_title}>Height</Text>
        //                     <Text styles={styles.height_text}>{props.pokemon.height}</Text>

        //                 </View>
        //                 <View styles={styles.weight_container}>
        //                     <Text styles={styles.weight_title}>Weight</Text>
        //                     <Text styles={styles.weight_text}>{props.pokemon.weight}</Text>
        //                 </View>
        //             </View>
        //         </View>



        //     </View>
        // </ImageBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    top_bar: {
        width: '100%',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },

    back_icon_pressable: {
        width: 'auto',
        height: 15,
        marginRight: 'auto'
    },
    pokemon_name: {
        fontFamily: 'Pocket Monk',
        fontSize: 23,
        color: 'white',
        letterSpacing: 3,
        marginTop: -17
    },
    image_parent_container: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pokemon_image: {
        height: '85%',
        width: '40%',
        marginTop: -35
    },
    favorite_icon: {
        marginLeft: 'auto',
        marginRight: 20
    },
    types_container: {
        width: '100%',
        height: '6.5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pokemon_type_container: {
        width: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        borderRadius: 10,
    },
    pokemon_type_text: {
        fontFamily: 'Pokemon GB',
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 10,
    }
});

export default PokemonDetailDisplay;