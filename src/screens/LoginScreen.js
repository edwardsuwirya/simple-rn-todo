/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import {TODO_PATH} from "../navigation/NavigationPath";
import languages from "../utils/languages"
import {useDispatch, useSelector} from "react-redux";
import {showLoading} from "../store/todo/ToDoAction";
import {login} from "../store/login/LoginAction";
import Heading from "../components/Heading";
import LoginService from "../services/LoginService";
import {MessageBox} from "../containers/MessageBox";

const LoginScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            navigation.replace(TODO_PATH);
        }
    })
    const submitLogin = async () => {
        try {
            dispatch(showLoading(true));
            let result = await LoginService().callLoginService(userName, password);
            console.log(result);
            dispatch(login(true));
            dispatch(showLoading(false));
        } catch (e) {
            dispatch(showLoading(false));
            MessageBox('Error', e.message, () => console.log('Ok')).showAlert();
        }
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
