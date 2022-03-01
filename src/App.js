/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import configureStore from "./store/store";
import {Provider} from "react-redux";
import RootNavigator from "./navigation/RootNavigator";
import Loading from "./components/Loading";
import {StatusBar} from "react-native";
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

/*
Navigation
npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context --save

alternatif
https://wix.github.io/react-native-navigation/docs/installing

// Tidak bisa handle back button hardware, gunakan navigation.replace
<Stack.Screen name="todos" component={ToDoScreen} options={{
     headerBackVisible: false
}}/>
 */
const store = configureStore();
const App = () => {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor={'#F2F2F2'}/>
            <RootNavigator/>
            <Loading/>
        </Provider>
    );
};

export default App;
