import Lottie from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { fetchAllPokemonData, fetchPokemonDataByURL } from '../api/fetchPokemonData';
import Footer from '../Footer/Footer';
import HomeNavbar from "../HomeNavBar/HomeNavBar";
import PokemonList from "../HomePokemonList/PokemonList";

function HomeScreen() {

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPaginationLoading, setIsPaginationLoading] = useState(false);
    const [nextURL, setNextURL] = useState('');


    const fetchData = async () => {
        if (nextURL == '') {
            setIsLoading(true)
        } else {
            setIsPaginationLoading(true)
        }
        const [data, next] = await fetchPokemonDataByURL(nextURL);
        setNextURL(next);
        setPokemonList(prev => [...prev, ...data]);
        setIsLoading(false)
        setIsPaginationLoading(false);

    }

    const checkPaginationLoading = () => {
        return isPaginationLoading;
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.body}>
            <HomeNavbar />

            {
                isLoading ?
                    <View style={styles.loading_animation_container}>
                        <Lottie source={require('../../assets/animations/pokeball-loading-animation.json')}
                            autoPlay loop
                            style={styles.loading_animation_style} />

                    </View>
                    :
                    <PokemonList pokemonList={pokemonList} loadMore={fetchData} isPaginationLoading={checkPaginationLoading}/>
                    
            }

            <Footer />

        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white'
    },
    loading_animation_container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    loading_animation_style: {
        height: 200,
        width: 'auto',
        marginBottom: 100,


    }
})

export default HomeScreen;