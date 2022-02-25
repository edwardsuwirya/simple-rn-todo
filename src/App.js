/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet,} from 'react-native';
import ToDoScreen from "./screens/ToDoScreen";
import configureStore from "./store/store";
import {Provider} from "react-redux";

/*
Component Creation Step
0. ToDoScreen
1. Buat Heading
2. Buat Input
3. Buat SubmitButton
4. Buat ToDo dan ToDoList
5. Buat ToDoButton
6. Buat TabBar dan TabBarItem
 */

const App = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <ToDoScreen/>
            </SafeAreaView>
        </Provider>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;
