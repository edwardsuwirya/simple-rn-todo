import {NavigationContainer} from "@react-navigation/native";
import {LoginScreen, ToDoScreen} from "../screens";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LOGIN_PATH, SPLASH_PATH, TODO_PATH} from "./NavigationPath";
import PopupMenu from "../components/PopupMenu";
import SplashScreen from "../screens/SplashScreen";
import Heading from "../components/Heading";
import {navigationRef} from "./RootNavigation";
import {Login} from "../screens/login/Login";
import LoginService from "../services/LoginService";
import ToDoService from "../services/TodoService";
import {Todo} from "../screens/todo/Todo";
import DepProvider from "../utils/DependencyContext";
import ApiClient from "../services/ApiClient";
import LocalStorage from "../utils/LocalStorage";

const Stack = createNativeStackNavigator();
const apiClient = ApiClient();
const localStorage = LocalStorage();
require('../assets/images/enigma.png')
const RootNavigator = () => {
    return <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={SPLASH_PATH}>
            <Stack.Screen name={SPLASH_PATH} component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name={LOGIN_PATH} options={{headerShown: false}}>
                {props =>
                    <DepProvider services={{apiClient, localStorage}}>
                        <LoginScreen {...props} login={() => Login(LoginService)}/>
                    </DepProvider>
                }
            </Stack.Screen>
            <Stack.Group
                screenOptions={({navigation}) => ({
                    headerStyle: {
                        backgroundColor: '#f2f2f2',
                    },
                    headerShadowVisible: false,
                    headerLeft: () => <Heading title={'todos'}/>,
                    headerRight: () => <PopupMenu navigation={navigation}/>
                })}
            >
                <Stack.Screen name={TODO_PATH} options={{title: ''}}>
                    {props =>
                        <DepProvider services={{apiClient}}>
                            <ToDoScreen {...props} todo={() => Todo(ToDoService)}/>
                        </DepProvider>}
                </Stack.Screen>
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
}

export default RootNavigator;
