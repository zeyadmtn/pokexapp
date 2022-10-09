import React, { useState } from 'react';
import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { realmConnection } from '../realm/realmConnection';

const LoginScreen = () => {

    //entypo email
    //entypo lock
    //zeyad@gmail.com
    //abc123

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const realm = realmConnection;

    const handleLoginButton = () => {

        try {

            const userLog = realm.objectForPrimaryKey("Accounts", email);
            
            if(userLog == null || userLog.password !== password) {
                console.log("INCORRECT LOGIN");
            } else {
                console.log("LOGGIN SUCCESFUL")
                Actions.home();
            }

        } catch(e) {
            console.log(e);
        }

    }

    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" hidden={false} />

            <Text style={styles.welcome_text}>Welcome Back, Poke-X Master!</Text>
            <Text style={styles.login_title}>Login to your Account</Text>

            <View style={styles.login_container}>


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
            style={styles.login_button}
            onPress={handleLoginButton}>
                <Text style={styles.login_button_text} >Login</Text>
            </Pressable>
        </View>
    )
}
//#9f101f
//#eeedf0

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

    login_title: {
        color: '#9f101f',
        fontSize: 20,
        fontFamily: 'Pixeloid Sans',
    },

    login_container: {
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
    login_button: {
        backgroundColor: '#9f101f',
        height: 40,
        width: '40%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30

    },
    login_button_text: {
        color: 'white',
        fontFamily: 'Pixeloid Sans',
    }
})

export default LoginScreen;


