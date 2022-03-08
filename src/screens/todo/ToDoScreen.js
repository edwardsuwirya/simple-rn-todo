/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View,} from 'react-native';
import Input from "../../components/Input";
import ToDoList from "../../containers/ToDoList";
import SubmitButton from "../../components/SubmitButton";
import TabBar from "../../containers/TabBar";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import languages from "../../utils/languages";
import {MessageBox} from "../../containers/MessageBox";
import {useSelector} from "react-redux";

const ToDoScreen = ({todo}) => {
    const [todoName, setTodoName] = useState('');
    const {onSubmitTodo, onDismissError, getVisibleTodos} = todo();
    const error = useSelector((state) => state.AppReducer.error);
    useEffect(() => {
        if (error) {
            MessageBox('Error', error, onDismissError).showAlert();
        }
    })
    const submitTodo = () => {
        onSubmitTodo(todoName);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.content}>
                    <Input placeholder={languages.en.todoInput} currentValue={todoName}
                           onInputChange={setTodoName}/>
                    <SubmitButton onSubmit={submitTodo}/>
                    <View style={styles.content}>
                        <ToDoList todos={getVisibleTodos()}/>
                    </View>
                    <TabBar/>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingTop: 10,
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

export default ToDoScreen;
