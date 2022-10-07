import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeNavbar = () => {
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
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row',
        // borderBottomColor: 'black',
        // borderBottomWidth: 2,
        elevation: 10,
        shadowColor: 'black',

    },
    title: {
        fontFamily: 'Pocket Monk',
        fontSize: 27,
        color: 'black',
        width: '50%',
        marginLeft: 50,
        letterSpacing: 2.5

    },
    icon: {
        marginLeft: 76,
    }
})

export default HomeNavbar;