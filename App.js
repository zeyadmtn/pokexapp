
 import { AppRegistry } from "react-native";
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import PokemonDetailScreen from './src/Screens/PokemonDetailScreen';
import SplashScreen from './src/Screens/SplashScreen';
import RegisterScreen from "./src/Screens/RegisterScreen";
import FavoritesScreen from "./src/Screens/FavoritesScreen";

//TODO: Add search function
//TODO: Login validation alert
//TODO: Registration Accounts Validation
//TODO: Registration Syntax Validation
//TODO: ADD ANOTHER FEATURE
//TODO: STYLING
//TODO: Separate Login Componant
//TODO: Centralize colors in Constants
//TODO: Cleanup code


const App = () => {
  return (
    <Router>
      <Stack key="root" >
        
        <Scene key='splash' component={SplashScreen} title='splash' initial={true} hideNavBar={true} />
        <Scene key='home' component={HomeScreen} title='home'hideNavBar={true} />
        <Scene key='pokemonDetail' component={PokemonDetailScreen} title='pokemon detail'hideNavBar={true} />
        <Scene key='login' component={LoginScreen} title='login' hideNavBar={true} />
        <Scene key='register' component={RegisterScreen} title='register' hideNavBar={true} />
        <Scene key='favorites' component={FavoritesScreen} title='favorites' hideNavBar={true} />
        
      </Stack>
    </Router>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
