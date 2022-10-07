import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';

const DetailsSection = (props) => {

    const pokemon = props.pokemon;
    const mainColor = props.mainColor;

    const [typeOfDetails, setTypeOfDetails] = useState('About');

    return ( 
        <View style={[styles.container, {borderColor: mainColor, borderWidth: 9, borderTopWidth: 0}]}>
            <View style={styles.details_type_container}>

            <Pressable onPress={() => {
                    //
                }}>
                    <IconAD name='left'
                        color={'black'}
                        size={20} />
                </Pressable>

                <Text style={styles.details_title}>{typeOfDetails}</Text>

                <Pressable onPress={() => {
                    //
                }}>
                    <IconAD name='right'
                        color={'black'}
                        size={20} />
                </Pressable>

            </View>
        </View>
     );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 55,
        paddingTop: 30,
        alignItems: 'center'
    },
    details_type_container: {
        flexDirection: 'row',
    },
    details_title: {
        fontFamily: 'Pocket Monk',
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 25,
        marginTop: -2
    }
})
export default DetailsSection;