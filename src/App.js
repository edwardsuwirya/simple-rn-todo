/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View,} from 'react-native';
import Heading from "./components/Heading";
import Input from "./components/Input";
import SubmitButton from "./components/SubmitButton";
import ToDoList from "./containers/ToDoList";
import TabBar from "./containers/TabBar";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, showLoading} from "./store/todo/ToDoAction";

/*
Component Creation Step
1. Buat Heading
2. Buat Input
3. Buat SubmitButton
4. Buat ToDo dan ToDoList
5. Buat ToDoButton
6. Buat TabBar dan TabBarItem
 */
const App = () => {
    const dispatch = useDispatch();
    const currIndex = useSelector((state) => state.ToDoReducer.todoIndex);
    const isLoading = useSelector((state) => state.ToDoReducer.isLoading);
    let [todoName, setTodoName] = useState('')

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

        setTimeout(function () {
            dispatch(addTodo(todo));
            dispatch(showLoading(false));
        }, 3000);

    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic" keyboardShouldPersistTaps="never"
                style={styles.content}>
                <Heading/>
                <Input inputChange={(text) => setTodoName(text)}/>
                <ToDoList/>
                <SubmitButton submitTodo={submitTodo}/>
            </ScrollView>
            <TabBar/>
            {isLoading && <View style={styles.loading}>
                <ActivityIndicator size={"large"} color="#0000ff"/>
            </View>
            }
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingTop: 60
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

export default App;
