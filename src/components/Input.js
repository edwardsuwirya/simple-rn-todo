import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from "react-native";

const Input = ({inputChange}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (text) => {
        setInputValue(text);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={inputValue}
                style={styles.input}
                placeholder='What needs to be done?'
                placeholderTextColor='#CACACA'
                selectionColor='#666666'
                onChangeText={onInputChange}
                onBlur={() => inputChange(inputValue)}
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
