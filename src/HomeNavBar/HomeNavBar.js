import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function HomeNavbar() {
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Poki-X</Text>
            <View></View>
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
        padding: 10,
    },
    title: {
        fontSize: 22,
        color: 'black',
        width: '50%',
        marginLeft: 50,
        fontWeight: 'bold'

    }
})

export default HomeNavbar;