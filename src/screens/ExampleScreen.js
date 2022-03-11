/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import InfiniteList from "../components/InfiniteList";

const ExampleScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <InfiniteList/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ExampleScreen;
