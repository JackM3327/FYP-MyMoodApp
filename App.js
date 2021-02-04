import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Platform } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { Header } from 'react-native-elements';


import { AddEntry, Home, Login, Statistics } from './app/screens'
import Tabs from './app/navigation/tabs'

const Stack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
        <NavigationContainer>

            {/* <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            /> */}

            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddEntry" component={AddEntry} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Statistics" component={Statistics} />
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;