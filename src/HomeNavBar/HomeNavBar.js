import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeNavbar() {
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Poki-X</Text>
            <View style={styles.icon}>
            <Icon name="search" size={24} color="black" />
            </View>

        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '8%',
        borderBottomEndRadius: 6,
        borderBottomStartRadius: 6,
        backgroundColor: '#ffff00',
        padding: 15,
        flexDirection: 'row'
    },
    title: {
        fontFamily: "Segoe UI Bold",
        fontSize: 22,
        color: 'black',
        width: '50%',
        marginLeft: 50,

    },
    icon: {
        marginLeft: 76,
    }
})

export default HomeNavbar;