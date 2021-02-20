import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { COLOURS, icons, images } from '../constants';

export default function User({navigation}) {

  const pressHandler = () => {
      navigation.navigate('Settings');
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image 
      style={styles.image} 
      source={require("../assets/pictures/profile_picture.jpg")  } />

      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.loginText}>
        <Image 
        style={styles.icon} 
        source={require("../assets/icons/logout.png")  } />
        LOG OUT
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.settings}
      onPress={() => navigation.navigate('Favourites')}>
        <View>
        <Text style={styles.settingstext}>
        <Image 
            style={styles.settingsicon} 
            source={require("../assets/icons/heart.png")  }  />    
        My Favourites
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.settings}
      onPress={() => navigation.navigate('Preferences')}>
        <View>
        <Text style={styles.settingstext}>
        <Image 
            style={styles.settingsicon} 
            source={require("../assets/icons/spanner.png")  }  />    
        Preferences
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.settings}
      onPress={() => navigation.navigate('Settings')}>
        <View>
        <Text style={styles.settingstext}>
        <Image 
            style={styles.settingsicon} 
            source={require("../assets/icons/settings.png")  }  />    
        Settings
        </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    border: "10",
    flex: 10,
    alignItems: "center",
    justifyContent: "top",
  },

  image: {
    marginTop: 40,
    marginBottom: 10,
    width: 100 ,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: COLOURS.secondary,
  },

  icon: {
    width: 15,
    height: 15,
    color: COLOURS.black,
    backgroundColor: COLOURS.primary,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  logoutBtn: {
    width: 200,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: COLOURS.primary,
    fontSize: 15,
  },

settings: {
    width: "95%",
    height: 50,
    alignItems: "left",
    justifyContent: "center",
    backgroundColor: COLOURS.white,
    borderTopWidth: 1,
    borderTopColor: COLOURS.lightGray,
    borderBottomWidth: 1,
    borderBottomColor: COLOURS.lightGray,
    fontSize: 50,
},

settingsicon: {
    width: 25,
    height: 25,
    tintColor: COLOURS.secondary,
    backgroundColor: COLOURS.white,
    marginRight: 50,
    marginLeft: 10,
    justifyContent: "center"
  },

  settingstext: {
    color: COLOURS.black,
    backgroundColor: COLOURS.white,
    fontSize: 20,
    justifyContent: "center"
  },

  inputView: {
    backgroundColor: COLOURS.lightGray3,
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: COLOURS.secondary,
  },

});

