/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ActivityIndicator, KeyboardAvoidingView, ScrollView, StyleSheet, View,} from 'react-native';
import Heading from "../components/Heading";
import Input from "../components/Input";
import ToDoList from "../containers/ToDoList";
import SubmitButton from "../components/SubmitButton";
import TabBar from "../containers/TabBar";
import {addTodo, showLoading} from "../store/todo/ToDoAction";
import {useDispatch, useSelector} from "react-redux";

const ToDoScreen = () => {
    const dispatch = useDispatch();
    const currIndex = useSelector((state) => state.ToDoReducer.todoIndex);
    const isLoading = useSelector((state) => state.ToDoReducer.isLoading);
    const todoName = useSelector((state) => state.ToDoReducer.newTodoName);

    const submitTodo = () => {
        dispatch(showLoading(true));
        if (todoName.match(/^\s*$/)) {
            return
        }
        const todo = {
            title: todoName,
            todoIndex: currIndex,
            complete: false
        }

        // Hanya sekedar simulasi
        setTimeout(function () {
            dispatch(addTodo(todo));
            dispatch(showLoading(false));
        }, 1000);

    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.content}>
                <Heading/>
                <Input/>
                <SubmitButton submitTodo={submitTodo}/>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic" keyboardShouldPersistTaps="never" style={styles.content}>
                    <ToDoList/>
                </ScrollView>
                <TabBar/>
            </View>
            {isLoading && <View style={styles.loading}>
                <ActivityIndicator size={"large"} color="#0000ff"/>
            </View>
            }
        </KeyboardAvoidingView>

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
