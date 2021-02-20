import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { COLOURS } from '../constants';


class ScrollViewExample extends Component {
   state = {
      workactivities: [
         {'name': 'Enjoyed work', 'id': 1, 'isSelected': true, 'weight': 1},
         {'name': 'Communicated well', 'id': 2, 'isSelected': null, 'weight': 1},
         {'name': 'Managed time well', 'id': 3, 'isSelected': null, 'weight': 1},
         {'name': 'Positive Work', 'id': 4, 'isSelected': null, 'weight': 1},
         {'name': 'Fun with coworkers', 'id': 5, 'isSelected': null, 'weight': 1},
         {'name': 'Reached Work Goals', 'id': 6, 'isSelected': null, 'weight': 1},
      ],
      collegeactivities: [
        {'name': 'Assignment Finished', 'id': 7, 'isSelected': true, 'weight': 1},
        {'name': 'Work done', 'id': 8, 'isSelected': null, 'weight': 1},
        {'name': 'Attended all lectures', 'id': 9, 'isSelected': null, 'weight': 1},
        {'name': 'Attended Clubs/Societies', 'id': 10, 'isSelected': null, 'weight': 1},
        {'name': 'Academic Reading', 'id': 11, 'isSelected': null, 'weight': 1},
        {'name': 'Good Exam', 'id': 12, 'isSelected': null, 'weight': 1}
     ],
     negworkactivities: [
            {'name': 'Stressful Day', 'id': 13, 'isSelected': true, 'weight': -1},
            {'name': 'Late for Work', 'id': 14, 'isSelected': null, 'weight': -1},
            {'name': 'Bad Communication', 'id': 15, 'isSelected': null, 'weight': -1},
            {'name': 'Negative Work', 'id': 16, 'isSelected': null, 'weight': -1},
     ]
     
   }

   

   render() {
      return (
         <View>
            <ScrollView>
                <Text style={styles.topheader}>Add Positives</Text>
                <Text style={styles.header}>Work</Text>
               {
                  this.state.workactivities.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                        <Checkbox
                        status={item.isSelected ? item.isSelected=true : item.isSelected=false }
                        onPress={() => {
                        if (item.isSelected=true) {
                            item.isSelected=false;
                        }
                        else if (item.isSelected=false)
                        {
                            item.isSelected=true;
                        }
                        else item.isSelected=true;
                     }}
                  />
                     </View>
                  ))
               }
               <Text style={styles.header}>College/University</Text>
               {
                  this.state.collegeactivities.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                        <Checkbox
                        status={item.isSelected ? item.isSelected=true : item.isSelected=false }
                        onPress={() => {
                        if (item.isSelected=true) {
                            item.isSelected=false;
                        }
                        else if (item.isSelected=false)
                        {
                            item.isSelected=true;
                        }
                        else item.isSelected=true;
                     }}
                  />
                     </View>
                  ))
               }

                <Text style={styles.topheader}>Add Negatives</Text>
                <Text style={styles.header}>Work</Text>
               {
                  this.state.negworkactivities.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                        <Checkbox
                        status={item.isSelected ? item.isSelected=true : item.isSelected=false }
                        onPress={() => {
                        if (item.isSelected=true) {
                            item.isSelected=false;
                        }
                        else if (item.isSelected=false)
                        {
                            item.isSelected=true;
                        }
                        else item.isSelected=true;
                     }}
                  />
                     </View>
                  ))
               }

               <TouchableOpacity style={styles.submitBtn}>
                <Text style={styles.loginText}>Submit</Text>
              </TouchableOpacity>

            </ScrollView>
         </View>
      )
   }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
    topheader: {
        fontStyle: 'bold',
        color: COLOURS.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: COLOURS.black,
        borderWidth: 1,
        backgroundColor: COLOURS.primary,
    },
    header: {
      fontStyle: 'bold',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: COLOURS.black,
      borderWidth: 1,
      backgroundColor: COLOURS.secondary,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: COLOURS.black,
      borderWidth: 1,
      backgroundColor: COLOURS.white,
   },
   submitBtn: {
    fontStyle: 'bold',
    fontSize: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: COLOURS.black,
      borderWidth: 1,
      backgroundColor: COLOURS.primary,
  },
})