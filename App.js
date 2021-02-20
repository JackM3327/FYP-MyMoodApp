import React from 'react';
import { StyleSheet, Header, Text, Image, Button, View, SafeAreaView, Platform } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AddEntry, Calendar, Home, Login, Statistics, User } from './app/screens'
import Tabs from './app/navigation/tabs'
import { DrawerContent } from './app/screens/DrawerContent';
import { COLOURS } from './app/constants';
import homeStack from './app/navigation/homeStack';
import Navigator from './app/navigation/drawer'

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const App = () => {

    // const initialLoginState = {
    //     isLoading: true,
    //     userName: null,
    //     userToken: null,
    //   };

    //   const loginReducer = (prevState, action) => {
    //     switch( action.type ) {
    //       case 'RETRIEVE_TOKEN': 
    //         return {
    //           ...prevState,
    //           userToken: action.token,
    //           isLoading: false,
    //         };
    //       case 'LOGIN': 
    //         return {
    //           ...prevState,
    //           userName: action.id,
    //           userToken: action.token,
    //           isLoading: false,
    //         };
    //       case 'LOGOUT': 
    //         return {
    //           ...prevState,
    //           userName: null,
    //           userToken: null,
    //           isLoading: false,
    //         };
    //       case 'REGISTER': 
    //         return {
    //           ...prevState,
    //           userName: action.id,
    //           userToken: action.token,
    //           isLoading: false,
    //         };
    //     }
    //   };
    
    return (
        <NavigationContainer>
            <Navigator  />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
      alignContent: 'center'
  },
  drawer: {
    height: 100,
    backgroundColor: COLOURS.primary,
  }
});

export default App;


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://mongodb6137mj:ky1cur@cluster0.gzc6i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
