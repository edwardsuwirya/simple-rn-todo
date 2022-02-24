import React from 'react'
import {View, StyleSheet} from 'react-native'
import TabBarItem from "../components/TabBarItem";

const TabBar = () => (
    <View style={styles.container}>
        <TabBarItem border selected title='All'/>
        <TabBarItem border title='Active'/>
        <TabBarItem border title='Complete'/>
    </View>)
const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default TabBar;
