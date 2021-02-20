import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Platform } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { COLOURS } from '../constants';
import { icons } from "../constants/icons"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import AddEntry from './AddEntry';

const Home = ({navigation}) => {

const pressHandler = () => {
    navigation.navigate('AddEntry');
}

    return (
        <SafeAreaView
        style={styles.container}>

        <View
        style={styles.newEntryBox}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('AddEntry')}>
            <Text style={styles.newEntryText}>
                + Add New Entry</Text>
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
        borderWidth: 1,
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
    borderWidth: 1,
    borderColor: COLOURS.black,
    borderRadius: 5,
    width: "90%",
    height: 80,
    alignItems: "center",
    marginBottom: 2,
    marginTop: 5,
    }
})