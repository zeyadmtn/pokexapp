import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const PageFrame = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/gameboy_frame.png')}
                style={styles.frame}
                resizeMode='contain' />
            <Image
                source={require('../../assets/images/gameboy_frame.png')}
                style={styles.frame_two}
                resizeMode='contain' />
            <Image
                source={require('../../assets/images/gameboy_frame.png')}
                style={styles.frame_three}
                resizeMode='contain' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    frame: {
        position: 'absolute',
        width: '100%',
        top: 63,
        opacity: 0.7

    },
    frame_two: {
        position: 'absolute',
        width: '100%',
        top: -395,
        opacity: 0.7


    },
    frame_three: {
        position: 'absolute',
        width: '100%',
        top: -168,
        opacity: 0.7

    },
    middle_body: {
        zIndex: 1,
        backgroundColor: 'red',
        height: '110%',
        width: '63%',
    }
});


export default PageFrame;