import React from 'react'
import {Text, TouchableHighlight, StyleSheet} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {changeType} from "../store/todo/ToDoAction";

const TabBarItem = ({border, title, selected}) => {
    const dispatch = useDispatch();
    const todoType = useSelector(state => state.ToDoReducer.type);

    const onSetType = () => {
        dispatch(changeType(title));
    }
    return (
        <TouchableHighlight
            underlayColor='#efefef'
            onPress={onSetType}
            style={[
                styles.item, selected ? styles.selected : null,
                border ? styles.border : null,
                todoType === title ? styles.selected : null]}>
            <Text style={[styles.itemText, todoType === title ? styles.bold : null]}>
                {title}
            </Text>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, border: {
        borderLeftWidth: 1,
        borderLeftColor: '#dddddd'
    },
    itemText: {
        color: '#777777',
        fontSize: 16
    },
    selected: {
        backgroundColor: '#ffffff'
    },
    bold: {
        fontWeight: 'bold'
    }
})
export default TabBarItem
