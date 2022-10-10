import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { fetchPokemonDataByURL } from '../api/fetchPokemonData';
import { POKEMON_INDIVIDUAL_ENDPOINT } from '../constants/pokemonEndpoint';
import Footer from '../Footer/Footer';
import PokemonList from '../HomePokemonList/PokemonList';
import { realmConnection } from '../realm/realmConnection';

const Favorites = () => {

    const [favoritePokemons, setFavoritePokemons] = useState([]);

    const realm = realmConnection;

    const findFavorites = async () => {
        try {
            const currentUserEmail = await AsyncStorage.getItem('@currentUserEmail');
            const user = await realm.objectForPrimaryKey("Accounts", currentUserEmail);
            const favorites = await user.favoritePokemon;
            var pokemonArr = [];
            const pokemonURLS = [];


            if (favorites.length < 0) {
                return <Text>You have no favorite pokemons :(</Text>
            } else {
                favorites.map((pokemonName) => {
                    let url = POKEMON_INDIVIDUAL_ENDPOINT + pokemonName;
                    pokemonURLS.push(url);
                });

                for (const url of pokemonURLS) {
                    await fetchPokemonDataByURL(url).then((pokemon) => {
                        setFavoritePokemons(x => [...x, pokemon]);
                    })

                }
            }

        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        findFavorites();
    }, [])


    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" hidden={false} />

            <View style={styles.nav_bar_container}>
                <Text style={styles.favorites_text}>Favorites</Text>
            </View>
            <PokemonList pokemonList={favoritePokemons} />
        <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white'
    },
    nav_bar_container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        elevation: 20,
        shadowColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',

    },
    favorites_text: {
        color: '#9f101f',
        fontFamily: 'Pocket Monk',
        fontSize: 30,
    }
})


export default Favorites