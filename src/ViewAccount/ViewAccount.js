import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import IconEN from 'react-native-vector-icons/Entypo'
import Footer from '../Footer/Footer'
import { realmConnection } from '../realm/realmConnection'

//TODO: Add email & password validation

const ViewAccount = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisibile] = useState(false);
    var icon_name = 'eye';
    //Entypo eye / eye-with-line

    const realm = realmConnection;

    const getUserInfo = async () => {
        const currentUserEmail = await AsyncStorage.getItem('@currentUserEmail');

        let user = await realm.objectForPrimaryKey('Accounts', currentUserEmail);

        setEmail(user.email);
        setPassword(user.password);
    }

    useEffect(() => {
        getUserInfo();
    }, [])


    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" hidden={false} />
            <View style={styles.nav_bar_container}>
                <Text style={styles.favorites_text}>Account</Text>
            </View>

            <View style={styles.account_container}>
                <Text style={styles.info_title}>Email:</Text>
                <View style={styles.info_container}>
                    <Text style={styles.info_text}>{email}</Text>
                </View>
                <Text style={styles.info_title}>Password:</Text>
                <View style={styles.info_container}>

                    {
                        passwordVisible ?
                        <Text style={styles.info_text}>{password}</Text>
                        :
                        <Text style={styles.info_text}>**********</Text>
                    }

                    {
                        passwordVisible ?
                            <Pressable onPress={() => setPasswordVisibile(!passwordVisible)}
                            style={styles.visibility_icon}>
                                <IconEN name='eye'
                                    color={'white'}

                                    size={20} />
                            </Pressable>
                            :
                            <Pressable onPress={() => setPasswordVisibile(!passwordVisible)}
                            style={styles.visibility_icon}>
                                <IconEN name='eye-with-line'
                                    color={'white'}

                                    size={20} />
                            </Pressable>
                    }

                </View>
            </View>



            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    nav_bar_container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        elevation: 20,
        shadowColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,

    },
    account_container: {
        top: 150,
        width: '70%',
        alignItems: 'center',
    },
    favorites_text: {
        color: '#9f101f',
        fontFamily: 'Pocket Monk',
        fontSize: 30,
    },
    info_container: {
        width: '100%',
        height: 45,
        backgroundColor: '#9f101f',
        marginBottom: 30,
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    info_title: {
        fontSize: 20,
        fontFamily: 'Pixeloid Sans Bold',
        marginBottom: 10,
    },
    info_text: {
        color: 'white',
        fontSize: 15,
    },
    visibility_icon: {
        marginLeft: 'auto',
    }
})

export default ViewAccount;