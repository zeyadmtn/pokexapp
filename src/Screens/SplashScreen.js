import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

function SplashScreen() {
  useEffect(() => {
    setTimeout(() => Actions.login(), 2000);
    StatusBar.setHidden(true);
  });

  return (
    <View>
      <Image
        source={require('../../assets/images/splash_screen.png')}
        style={styles.splash_image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splash_image: {
    width: '100%',
    height: '100%',
  },
  title: {
    zIndex: 1,
  },
});

export default SplashScreen;
