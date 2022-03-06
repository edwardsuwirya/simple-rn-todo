/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View,} from 'react-native';
import Input from "../components/Input";
import ToDoList from "../containers/ToDoList";
import SubmitButton from "../components/SubmitButton";
import TabBar from "../containers/TabBar";
import {setTodoName, showLoading} from "../store/todo/ToDoAction";
import {useDispatch, useSelector} from "react-redux";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import languages from "../utils/languages";
import ToDoService from "../services/TodoService";

const ToDoScreen = () => {
    const dispatch = useDispatch();
    const currIndex = useSelector((state) => state.ToDoReducer.todoIndex);
    const todoName = useSelector((state) => state.ToDoReducer.newTodoName);
    const submitTodo = async () => {
        dispatch(showLoading(true));
        if (todoName.match(/^\s*$/)) {
            dispatch(showLoading(false));
            return
        }
        const todo = {
            title: todoName,
            todoIndex: currIndex,
            complete: false
        }
        try {
            await ToDoService().addTodo(todo);
        } catch (e) {
        } finally {
            dispatch(showLoading(false));
        }
    }

    const onSetTodoName = (text) => {
        dispatch(setTodoName(text))
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.content}>
                    <Input placeholder={languages.en.todoInput} currentValue={todoName}
                           onInputChange={onSetTodoName}/>
                    <SubmitButton onSubmit={submitTodo}/>
                    <View style={styles.content}>
                        <ToDoList/>
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
