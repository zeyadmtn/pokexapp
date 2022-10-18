
import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import FavoritesScreen from "./src/Screens/FavoritesScreen";
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import PokemonDetailScreen from './src/Screens/PokemonDetailScreen';
import RegisterScreen from "./src/Screens/RegisterScreen";
import SplashScreen from './src/Screens/SplashScreen';
import ViewAccountScreen from "./src/Screens/ViewAccountScreen";

const App = () => {
  return (
    <Router>
      <Stack>
        
        <Scene key='splash' component={SplashScreen} title='splash' initial={true} hideNavBar={true} />
        <Scene key='home' component={HomeScreen} title='home'hideNavBar={true} />
        <Scene key='pokemonDetail' component={PokemonDetailScreen} title='pokemon detail'hideNavBar={true} />
        <Scene key='login' component={LoginScreen} title='login' hideNavBar={true} />
        <Scene key='register' component={RegisterScreen} title='register' hideNavBar={true} />
        <Scene key='favorites' component={FavoritesScreen} title='favorites' hideNavBar={true} />
        <Scene key='account' component={ViewAccountScreen} title='account' hideNavBar={true} />
        
      </Stack>
    </Router>
  );
};

export default App;
