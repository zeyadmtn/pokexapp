/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import HomeScreen from './src/Screens/HomeScreen';
import PokemonDetailScreen from './src/Screens/PokemonDetailScreen';
import SplashScreen from './src/Screens/SplashScreen';

const App = () => {
  return (
    <Router>
      <Stack key="root" >
        
        <Scene key='splash' component={SplashScreen} title='splash' initial={true} hideNavBar={true} />
        <Scene key='home' component={HomeScreen} title='home'hideNavBar={true} />
        <Scene key='pokemonDetail' component={PokemonDetailScreen} title='pokemon detail'hideNavBar={true} />
        
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
