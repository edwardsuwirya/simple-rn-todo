/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Image, StyleSheet, View,} from 'react-native';
import {enigma} from "../assets/images";
import {goToLogin} from "../navigation/NavigationHelper";

const SplashScreen = () => {

        useEffect(() => {
            setTimeout(() => {
                goToLogin()
            }, 3000)
        })
        return (
            <View style={styles.content}>
                <Image source={enigma}/>
            </View>
        );
    }
;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SplashScreen;
