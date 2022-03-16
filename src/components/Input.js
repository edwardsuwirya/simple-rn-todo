import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {useTheme} from "../utils/ThemeContext";

const Input = ({placeholder = '', isSecureText = false, currentValue = '', onInputChange}) => {
    const theme = useTheme();
    const Styles = React.useMemo(
        () => createStyles(theme),
        [theme]
    );
    const onChangeText = (text) => {
        onInputChange(text);
    }
    return (
        <View style={Styles.inputContainer}>
            <TextInput
                accessibilityHint="input"
                value={currentValue}
                style={Styles.input}
                placeholder={placeholder}
                secureTextEntry={isSecureText}
                placeholderTextColor='#CACACA'
                selectionColor='#666666'
                onChangeText={onChangeText}
            />
        </View>)
}
const createStyles = (theme) => {
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
            marginBottom: 5
        }, input: {
            height: 60,
            backgroundColor: '#ffffff',
            paddingLeft: 10,
            paddingRight: 10,
            color: theme.inputColor
        }
    });
    return styles
}

export default Input;
