import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import {realmConnection} from '../realm/realmConnection';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const realm = realmConnection;

  const handleLoginButton = async () => {
    try {
      const userLog = realm.objectForPrimaryKey('Accounts', email);

      if (userLog == null || userLog.password !== password) {
      } else {
        await AsyncStorage.setItem('@currentUserEmail', email);
        Actions.home();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleNewUserButton = () => {
    Actions.register();
  };

  return (
    <KeyboardAvoidingView style={styles.body}>
      <StatusBar
        backgroundColor={'white'}
        barStyle="dark-content"
        hidden={false}
      />

      <Text style={styles.welcome_text}>Welcome Back, Poke-X Master!</Text>
      <Text style={styles.login_title}>Login to your Account</Text>

      <View style={styles.login_container}>
        <TextInput
          style={styles.input_field}
          placeholder="john_doe@gmail.com"
          placeholderTextColor={'white'}
          onChangeText={value => setEmail(value)}
        />

        <TextInput
          style={styles.input_field}
          placeholder="**********"
          placeholderTextColor={'white'}
          onChangeText={value => setPassword(value)}
        />
      </View>

      <Pressable style={styles.login_button} onPress={handleLoginButton}>
        <Text style={styles.login_button_text}>Login</Text>
      </Pressable>

      <Pressable onPress={handleNewUserButton}>
        <Text style={styles.register_text}>New User?</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

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
    textAlign: 'center',
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
    color: 'white',
  },
  login_button: {
    backgroundColor: '#9f101f',
    height: 40,
    width: '40%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  login_button_text: {
    color: 'white',
    fontFamily: 'Pixeloid Sans',
  },
  register_text: {
    color: 'blue',
    fontFamily: 'Pixeloid Sans',
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
  },
});

export default LoginScreen;
