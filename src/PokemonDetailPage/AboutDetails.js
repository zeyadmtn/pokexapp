import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconEN from 'react-native-vector-icons/Entypo';
import IconFW5 from 'react-native-vector-icons/FontAwesome5';
import IconMTC from 'react-native-vector-icons/MaterialCommunityIcons';
const AboutDetails = (props) => {

    const pokemon = props.pokemon;
    const pokemon_height = (pokemon.height/10);

    return (
        <View style={styles.container}>

            <View style={styles.stat_container}>
                <IconEN name={'star'} size={25} color={'gold'} />
                <Text style={styles.stat_title}>Base Experience</Text>
            </View>
            <Text style={styles.stat_text}>{pokemon.base_experience}</Text>

            <View style={styles.stat_container}>
                <IconMTC name={'human-male-height'} size={25} color={'gold'} />
                <Text style={styles.stat_title}>Height (m)</Text>
            </View>
            <Text style={styles.stat_text}>{pokemon_height}</Text>

            <View style={styles.stat_container}>

                <IconFW5 name={'weight-hanging'} size={25} color={'gold'} />
                <Text style={styles.stat_title}>Weight (kg)</Text>
            </View>
            <Text style={styles.stat_text}>{pokemon.weight}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginTop: 30,
    },
    stat_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    stat_title: {
        fontSize: 19,
        marginLeft: 10,
        fontFamily: 'Pixeloid Sans Bold',
        letterSpacing: 0
    },
    stat_text: {
       alignSelf: 'center',
       fontFamily: 'Pixeloid Sans',
       fontSize: 19,
       marginBottom: 20,
       marginTop: 10,
    }

})

export default AboutDetails;