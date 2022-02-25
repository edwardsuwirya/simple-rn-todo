import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {setTodoName} from "../store/todo/ToDoAction";

const Input = () => {
    const dispatch = useDispatch();
    const todoName = useSelector((state) => state.ToDoReducer.newTodoName);
    const onInputChange = (text) => {
        dispatch(setTodoName(text));
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={todoName}
                style={styles.input}
                placeholder='What needs to be done?'
                placeholderTextColor='#CACACA'
                selectionColor='#666666'
                onChangeText={onInputChange}
            />
        </View>)
}
const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        //Shadowing for IOS
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 3, height: 3},
        //Shadowing for Android
        elevation: 3,
        //Mandatory style for shadowing
        backgroundColor: '#ffffff',
    }, input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    }
});
export default Input;
