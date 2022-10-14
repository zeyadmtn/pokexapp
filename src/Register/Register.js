import React, { useState } from 'react'
import { KeyboardAvoidingView, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Actions } from 'react-native-router-flux'
import { realmConnection } from '../realm/realmConnection'

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const realm = realmConnection;

    const handleRegisterButton = async () => {
        let user;

        try {
            realm.write(() => {
                user = realm.create("Accounts",
                    {
                        email: email,
                        password: password,
                        favoritePokemon: []
                    })
            });

            Actions.login();

        } catch (e) {
            console.log(e)
        }

    }

    const handleNavigateToLogin = () => {
        Actions.login();
    }
    return (
        <KeyboardAvoidingView style={styles.body}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" hidden={false} />

            <Text style={styles.welcome_text}>Welcome To Poke-X!</Text>
            <Text style={styles.register_title}>Enter your new account details</Text>

            <View style={styles.register_container}>


                <TextInput
                    style={styles.input_field}
                    placeholder='john_doe@gmail.com'
                    placeholderTextColor={'white'}
                    onChangeText={(value) => setEmail(value)}
                />

                <TextInput
                    style={styles.input_field}
                    placeholder='**********'
                    placeholderTextColor={'white'}
                    onChangeText={(value) => setPassword(value)}

                />

            </View>

            <Pressable
                style={styles.register_button}
                onPress={handleRegisterButton}>
                <Text style={styles.register_button_text} >Register</Text>
            </Pressable>

            <Pressable
                onPress={handleNavigateToLogin}>
                <Text style={styles.register_text} >Already have an account?</Text>
            </Pressable>


        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 20,
    },
    welcome_text: {
        color: '#9f101f',
        fontFamily: 'Pixeloid Sans Bold',
        fontSize: 25,
        marginBottom: 20,
        textAlign: 'center'
    },

    register_title: {
        color: '#9f101f',
        fontSize: 20,
        fontFamily: 'Pixeloid Sans',
    },

    register_container: {
        height: 'auto',
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
        color: 'white'
    },
    register_button: {
        backgroundColor: '#9f101f',
        height: 40,
        width: '40%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30

    },
    register_button_text: {
        color: 'white',
        fontFamily: 'Pixeloid Sans',
    },
    register_text: {
        color: 'blue',
        fontFamily: 'Pixeloid Sans',
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
    }
})
export default Register