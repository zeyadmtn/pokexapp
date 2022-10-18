import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconEN from 'react-native-vector-icons/Entypo';
import IconFW5 from 'react-native-vector-icons/FontAwesome5';
import IconMTC from 'react-native-vector-icons/MaterialCommunityIcons';


const BaseStatsDetails = (props) => {

    const pokemon = props.pokemon;

    return (
        <View style={styles.container}>
            {
                pokemon.stats.map((stat) => {
                    return (<View key={stat.stat.name} style={styles.stat_container}>
                        <Text style={styles.stat_text}>{stat.stat.name.toUpperCase()}:</Text>
                        <Text style={styles.stat_text}>{stat.base_stat}</Text>
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
    },
    stat_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    stat_title: {
        fontSize: 25,
        marginLeft: 10,
        fontFamily: 'Pocket Monk',
        letterSpacing: 0
    },

    stat_text: {
       fontFamily: 'Pixeloid Mono',
       fontSize: 16,
       marginTop: 10,
       color: '#5c5c5c',

    }

})

export default BaseStatsDetails;