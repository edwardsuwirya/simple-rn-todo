import React from 'react';
import {Text, TouchableHighlight, View, StyleSheet, Keyboard} from "react-native";
import languages from "../utils/languages";

const SubmitButton = ({title = languages.en.submit, onSubmit}) => (
    <View style={styles.buttonContainer}>
        <TouchableHighlight
            underlayColor='#efefef'
            style={styles.button}
            onPress={() => {
                Keyboard.dismiss();
                onSubmit();
            }}>
            <Text style={styles.submit}>
                {title}
            </Text>
        </TouchableHighlight>
    </View>
)
const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'rgba(175, 47, 47, 0.25)',
        width: 200,
        marginRight: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        justifyContent: 'center',
        alignItems: 'center'
    }, submit: {
        color: '#666666',
        fontWeight: '600'
    }
})
export default SubmitButton;
