import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login  from "../screens/(public)/login";


const Stack = createStackNavigator();

export default function AuthNavigation({onLogin}){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" options={{headerShown: false}}>
                {(props) => <Login {...props} onLogin={onLogin}/>}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
