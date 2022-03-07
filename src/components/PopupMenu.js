import {Modal, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import React, {useEffect, useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/login/LoginAction";
import LocalStorage from "../utils/LocalStorage";
import {goToLogin} from "../navigation/NavigationHelper";

const PopupMenu = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        if (isLoggedIn === false) {
            goToLogin()
        }
    })
    return (
        <View>
            <Pressable style={{paddingLeft: 30}}
                       onPress={() => setModalVisible(!modalVisible)}
            >
                <Icon accessibilityHint="button" name={'ellipsis-v'}
                      size={16}/>
            </Pressable>
            <Modal
                accessibilityHint="modal"
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableOpacity accessibilityHint="touchable-button" style={{flex: 1}} activeOpacity={1}
                                  onPressOut={() => {
                                      setModalVisible(false)
                                  }}>
                    <View  style={styles.centeredView}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalView}>
                                <Pressable onPress={async () => {
                                    await LocalStorage().setData('token', null);
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
