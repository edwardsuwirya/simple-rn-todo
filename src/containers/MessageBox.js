import React from 'react'
import {Alert} from 'react-native'

export const MessageBox = (title, message, okCallBack) => {
    const showAlert = () => {
        Alert.alert(
            title,
            message,
            [
                {text: "OK", onPress: () => okCallBack()}
            ]
        );
    }
    return {
        showAlert
    }
}
