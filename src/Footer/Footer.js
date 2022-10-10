import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import IconMT from 'react-native-vector-icons/MaterialIcons';

const Footer = () => {

    const handleButtonPress = (pageName) => {
        //Navigates to specified page
        Actions[pageName]();
    }


    return (
        <View style={styles.container}>

            <Pressable
                onPress={() => handleButtonPress('favorites')}>
                <IconMT name="favorite" size={30} style={[styles.favorite_icon, { color: '#ea2a3e' }]} />
            </Pressable>

            <Pressable
                style={styles.pokeball_icon_container}
                onPress={() => handleButtonPress('home')}>
                <Image
                    source={require('../../assets/images/pokeball_pixelated.png')}
                    style={styles.pokeball_icon} />

            </Pressable>

            <Pressable
                onPress={() => handleButtonPress('home')}>
                <IconMT name="account-circle" size={30} style={[styles.favorite_icon, { color: '#ea2a3e' }]} />
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#faf5f5',
        height: 45,
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 50,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,


    },
    pokeball_icon_container: {
        backgroundColor: '#faf5f5',
        width: 90,
        height: 90,
        alignItems: 'center',
        borderRadius: 50,

    },
    pokeball_icon: {
        marginTop: 10,
        height: 55,
        width: 55,
    }
})

export default Footer;