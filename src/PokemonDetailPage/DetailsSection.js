import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';
import AbilitiesDetails from './AbilitiesDetails';
import AboutDetails from './AboutDetails';
import BaseStatsDetails from './BaseStatsDetails';

const DetailsSection = (props) => {

    const [sections, setSections] = useState({
        previous: null,
        next: 'base_stats',
        current: 'about',
    });

    const pokemon = props.pokemon;
    const mainColor = props.mainColor;


    //TODO: Refactor this into a simpler method
    const handleDetailsSectionChange = (navigationType) => {
        if (navigationType == 'back') {
            if (sections.current == 'base_stats') {
                setSections({
                    previous: null,
                    next: 'base_stats',
                    current: 'about'
                })

            } else if (sections.current == 'abilities') {
                setSections({
                    previous: 'about',
                    next: 'abilities',
                    current: 'base_stats'
                })
            }
        } else if (navigationType == 'next') {
            if (sections.current == 'about') {
                setSections({
                    previous: 'about',
                    next: 'abilities',
                    current: 'base_stats'
                })

            } else if (sections.current == 'base_stats') {
                setSections({
                    previous: 'base_stats',
                    next: null,
                    current: 'abilities'
                })

            };
        }
    }
    return (
        <View style={[styles.container, { borderColor: mainColor, borderWidth: 9, borderTopWidth: 0 }]}>
            <View style={styles.details_type_container}>

                {sections.previous !== null ?
                    (<Pressable onPress={() => {
                        handleDetailsSectionChange('back')
                    }}>
                        <IconAD name='left'
                            color={'black'}
                            size={20} />
                    </Pressable>)
                    : (null)}

                <Text style={styles.details_title}>{sections.current}</Text>

                {sections.next !== null ?
                (<Pressable onPress={() => {
                    handleDetailsSectionChange('next')
                }}>
                    <IconAD name='right'
                        color={'black'}
                        size={20} />
                </Pressable>) : (null)}

            </View>


            {sections.current == 'about' ?  <AboutDetails pokemon={pokemon} /> 
            : sections.current == 'base_stats' ? <BaseStatsDetails pokemon={pokemon} />
            : <AbilitiesDetails pokemon={pokemon} />}



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
        alignItems: 'center',
        
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
});

export default DetailsSection;