/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StyleSheet, View,} from 'react-native';
import Heading from "../components/Heading";
import Input from "../components/Input";
import ToDoList from "../containers/ToDoList";
import SubmitButton from "../components/SubmitButton";
import TabBar from "../containers/TabBar";

const ToDoScreen = () => {
    let inputValue = "";
    let todos = [{
        todoIndex: 1,
        title: 'Title 1',
        isComplete: false
    }, {
        todoIndex: 2,
        title: 'Title 2',
        isComplete: false
    }];

    let type = '';
    const inputChange = (inputValue) => {
        console.log('Input Value: ', inputValue);
    }

    const submitTodo = () => {
        console.log('Submit');
    }

    const toggleComplete = (todoIndex) => {
        console.log('Complete : ', todoIndex);
    }
    const deleteTodo = (todoIndex) => {
        console.log('Delete : ', todoIndex);
    }

    const setType = (type) => {
        console.log('Set Type : ' + type);
    }
    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic" keyboardShouldPersistTaps="never" style={styles.content}>
                <Heading/>
                <Input inputValue={inputValue} inputChange={(text) => inputChange(text)}/>
                <ToDoList todos={todos} toggleComplete={toggleComplete}
                          deleteTodo={deleteTodo} type={type}/>
                <SubmitButton submitTodo={submitTodo}/>
            </ScrollView>
            <TabBar type={type} setType={setType}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        paddingTop: 60
    }
});

export default ToDoScreen;
