import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, StatusBar, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { Actions } from 'react-native-router-flux';
import IconFW from 'react-native-vector-icons/FontAwesome';
import IconMT from 'react-native-vector-icons/MaterialIcons';
import { POKEMON_TYPE_COLORS } from '../constants/pokemonTypeColors';
import Footer from '../Footer/Footer';
import { realmConnection } from '../realm/realmConnection';
import DetailsSection from './DetailsSection';


const PokemonDetailDisplay = (props) => {

    const [isFavorite, setIsFavorite] = useState();

    
    const realm = realmConnection
    const pokemon = props.pokemon;
    const bgColor = POKEMON_TYPE_COLORS[pokemon.types[0].type.name].main;
    const accentColor = POKEMON_TYPE_COLORS[pokemon.types[0].type.name].accent;
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);


    const checkIsFavorite = async () => {
        const currentUserEmail = await AsyncStorage.getItem('@currentUserEmail');
        const currentUser = await realm.objectForPrimaryKey("Accounts", await currentUserEmail);
        const pokemonIndex = await currentUser.favoritePokemon.indexOf(pokemon.name);

        if (pokemonIndex < 0) {
            setIsFavorite(false)
        } else {
            setIsFavorite(true)
        }

    }

    useEffect(() => {
        checkIsFavorite();
    }, [])


    const handleFavoriteToggle = async () => {
        const currentUserEmail = await AsyncStorage.getItem('@currentUserEmail');
        const currentUser = await realm.objectForPrimaryKey("Accounts", await currentUserEmail);

        try {

            if (!isFavorite) {
                realm.write(() => {
                    currentUser.favoritePokemon.push(pokemon.name)
                })

                setIsFavorite(true);
                ToastAndroid.show(`${pokemonName} Added To Favorites`, ToastAndroid.SHORT);


            } else {
                const pokemonIndex = await currentUser.favoritePokemon.indexOf(pokemon.name);

                realm.write(() => {
                    currentUser.favoritePokemon.splice(pokemonIndex, 1);
                })

                setIsFavorite(false);
                ToastAndroid.show(`${pokemonName} Removed From Favorites`, ToastAndroid.SHORT);
            }

        } catch (e) {
            console.log(e);
        }


    }


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

                <Pressable
                    style={[styles.favorite_icon]}
                    onPress={handleFavoriteToggle}>

                    {isFavorite ? (<IconMT name="favorite" size={35} style={[styles.favorite_icon, { color: 'red' }]} />)
                        :
                        (<IconMT name="favorite-outline" size={35} style={styles.favorite_icon} />)
                    }

                </Pressable>

                <Image
                    source={
                        { uri: pokemon.sprites.other['official-artwork'].front_default }
                    }
                    style={styles.pokemon_image}
                    resizeMode='cover'
                />
            </View>
            <View style={[styles.types_container, { backgroundColor: bgColor }]}>
                {pokemon.types.map((type) =>
                    <View key={type.type.name} style={[styles.pokemon_type_container, { backgroundColor: accentColor }]}>
                        <Text style={styles.pokemon_type_text}>{type.type.name.toUpperCase()}</Text>
                    </View>
                )}
            </View>
            <DetailsSection pokemon={pokemon} mainColor={bgColor} />

            
            <Footer />
        </View>
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