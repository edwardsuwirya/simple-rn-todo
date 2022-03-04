import {NavigationContainer} from "@react-navigation/native";
import {LoginScreen, ToDoScreen} from "../screens";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LOGIN_PATH, SPLASH_PATH, TODO_PATH} from "./NavigationPath";
import PopupMenu from "../components/PopupMenu";
import SplashScreen from "../screens/SplashScreen";
import Heading from "../components/Heading";
import {navigationRef} from "./RootNavigation";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={SPLASH_PATH}>
            <Stack.Screen name={SPLASH_PATH} component={SplashScreen} options={{headerShown: false}}/>
            <Stack.Screen name={LOGIN_PATH} component={LoginScreen} options={{headerShown: false}}/>
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
                <Stack.Screen name={TODO_PATH} component={ToDoScreen} options={{
                    title: ''
                }
                }/>
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
}

export default RootNavigator;
