import React from 'react';
import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

const LoginScreen = () => {

    //entypo email
    //entypo lock

    const handleLoginButton = () => {
        Actions.home();
    }

    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" hidden={false} />

            <Text style={styles.welcome_text}>Welcome Back, Poke-X Master!</Text>
            <Text style={styles.login_title}>Login to your Account</Text>

            <ImageBackground source={require('../../assets/images/pokeballDarker.png')}
                style={styles.login_container}
                imageStyle={{
                    width: 'auto', height: '80%', opacity: 0.05,
                }}>


                <TextInput
                    style={styles.input_field}
                    placeholder='john_doe@gmail.com'
                    placeholderTextColor={'white'}
                />

                <TextInput
                    style={styles.input_field}
                    placeholder='**********'
                    placeholderTextColor={'white'}
                />

            </ImageBackground>

            <Pressable 
            style={styles.login_button}
            onPress={handleLoginButton}>
                <Text style={styles.login_button_text} >Login</Text>
            </Pressable>
        </View>
    )
}
//#9f101f

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#eeedf0',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 35,
    },
    welcome_text: {
        color: '#9f101f',
        fontFamily: 'Pixeloid Sans Bold',
        fontSize: 25,
        marginBottom: 20,
        textAlign: 'center'
    },

    login_title: {
        color: '#9f101f',
        fontSize: 20,
        fontFamily: 'Pixeloid Sans',
    },

    login_container: {
        height: '60%',
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
    },
    input_field: {
        width: '100%',
        height: 40,
        backgroundColor: '#9f101f',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 40,
        fontSize: 17,
        textAlign: 'center',
    },
    login_button: {
        backgroundColor: '#9f101f',
        height: 40,
        width: '40%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    login_button_text: {
        color: 'white',
        fontFamily: 'Pixeloid Sans',
    }
})

export default LoginScreen;


