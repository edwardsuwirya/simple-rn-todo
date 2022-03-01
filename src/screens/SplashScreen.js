/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StatusBar, StyleSheet, Text, View,} from 'react-native';
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import {LOGIN_PATH, TODO_PATH} from "../navigation/NavigationPath";
import languages from "../utils/languages"
import {useDispatch, useSelector} from "react-redux";
import {showLoading} from "../store/todo/ToDoAction";
import {login} from "../store/login/LoginAction";
import {enigma} from "../assets/images";

const SplashScreen = ({navigation}) => {

        useEffect(() => {
            setTimeout(() => {
                navigation.replace(LOGIN_PATH)
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
