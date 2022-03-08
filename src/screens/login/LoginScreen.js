/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import languages from "../../utils/languages"
import Heading from "../../components/Heading";
import {MessageBox} from "../../containers/MessageBox";
import {useSelector} from "react-redux";

const LoginScreen = ({login}) => {
    const {onAuthenticate, onDismissError} = login();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector((state) => state.AppReducer.error);
    useEffect(() => {
        if (error) {
            MessageBox('Error', error, () => onDismissError()).showAlert();
        }
    })
    const submitLogin = async () => {
        onAuthenticate(userName, password)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={{paddingBottom: 20}}>
                    <Heading title={'Todo'}/>
                </View>
                <Input placeholder={languages.en.username} currentValue={userName} onInputChange={setUserName}/>
                <Input placeholder={languages.en.password} isSecureText={true} currentValue={password}
                       onInputChange={setPassword}/>
                <SubmitButton title={languages.en.submitLogin} onSubmit={submitLogin}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    loading: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoginScreen;
