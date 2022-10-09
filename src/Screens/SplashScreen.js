import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useEffect } from 'react';
import { Actions } from 'react-native-router-flux';
import { StatusBar } from 'react-native';

function SplashScreen() {

    useEffect(() => {
        setTimeout(() => Actions.login(), 500);
        StatusBar.setHidden(true);
    });

    
    
    return (
        <View>
            <Image 
                    source={
                        require('../../assets/images/splashscreen.jpg')
                    }
                    style={styles.splash_image}
                    resizeMode='stretch'
                />
        </View>
        
    );
}

const styles = StyleSheet.create({
    splash_image: {
        width: '100%',
        height: '100%'
    },
    title: {
        zIndex: 1,
    }
})

export default SplashScreen;