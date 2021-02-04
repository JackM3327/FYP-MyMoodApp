import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Platform } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { COLOURS, icons } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';

const Home = () => {
    return (
        <SafeAreaView
        style={styles.container}>

            {/* <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            /> */}

        <View
        style={styles.newEntryBox}>
            <TouchableOpacity>
            <Text style={styles.newEntryText}>+ Add New Entry</Text>
        </TouchableOpacity>
        </View>
        
        <View
        style={styles.outputBox}>
            <Text>Today</Text>
            <Text>Positive Experiences: 50</Text>
            <Text>Negative Experiences: 5</Text>
            <Text>Ratio: 10:1</Text>
        </View>

        <View
        style={styles.outputBox}>
            <Text>Yesterday</Text>
            <Text>Positive Experiences: 50</Text>
            <Text>Negative Experiences: 5</Text>
            <Text>Ratio: 10:1</Text>
        </View>

        <View
        style={styles.outputBox}>
            <Text>Monday 04.02.2021</Text>
            <Text>Positive Experiences: 50</Text>
            <Text>Negative Experiences: 5</Text>
            <Text>Ratio: 10:1</Text>
        </View>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        color: COLOURS.black,
        border: "10",
        alignItems: "center",
        flex: 1,
    },

    newEntryBox: {
        borderWidth: 2,
        backgroundColor: COLOURS.primary,
        borderRadius: 5,
        width: "90%",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 2,
        marginTop: 5,
        fontWeight: "bold",
    },

    newEntryText: {
        color: COLOURS.white,
    }, 
    
    outputBox: {
    borderWidth: 2,
    borderColor: COLOURS.black,
    borderRadius: 5,
    width: "90%",
    height: 80,
    alignItems: "center",
    marginBottom: 2,
    marginTop: 5,
    }
})