import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { AddEntry, Home, Login, Statistics } from './app/screens'
import Tabs from './app/navigation/tabs'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="AddEntry" component={AddEntry} />
				<Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Statistics" component={Statistics} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;