import {ActivityIndicator, StatusBar, StyleSheet, View} from "react-native";
import React from "react";
import {useSelector} from "react-redux";

const Loading = () => {
    const isLoading = useSelector((state) => state.AppReducer.isLoading);
    return isLoading ? (
        <View style={styles.loading}>
            <StatusBar backgroundColor={'#00000080'}/>
            <ActivityIndicator size={"large"} color="#0000ff"/>
        </View>
    ) : (<View/>)
}
const styles = StyleSheet.create({
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
export default Loading;
