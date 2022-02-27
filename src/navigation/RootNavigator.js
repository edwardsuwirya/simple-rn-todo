import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import ToDoScreen from "../screens/ToDoScreen";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LOGIN_PATH, TODO_PATH} from "./NavigationPath";
import PopupMenu from "../components/PopupMenu";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName={LOGIN_PATH}>
            <Stack.Screen name={LOGIN_PATH} component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Group
                screenOptions={({navigation}) => ({
                    headerRight: () => <PopupMenu navigation={navigation}/>
                })}
            >
                <Stack.Screen name={TODO_PATH} component={ToDoScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
}

export default RootNavigator;
