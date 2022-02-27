import {Modal, Text, StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {LOGIN_PATH} from "../navigation/NavigationPath";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/login/LoginAction";

const PopupMenu = ({navigation}) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        if (isLoggedIn === false) {
            navigation.replace(LOGIN_PATH);
        }
    })
    return (
        <View>
            <Pressable style={{paddingLeft: 30}}
                       onPress={() => setModalVisible(!modalVisible)}
            >
                <Icon name={'ellipsis-v'}
                      size={16}/>
            </Pressable>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableOpacity style={{flex: 1}} activeOpacity={1}
                                  onPressOut={() => {
                                      setModalVisible(false)
                                  }}>
                    <View style={styles.centeredView}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalView}>
                                <Pressable onPress={() => {
                                    dispatch(logout());
                                }}>
                                    <Text style={styles.modalText}>Logout</Text>
                                </Pressable>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-end",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 32,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        textAlign: "center"
    }
});


export default PopupMenu;
