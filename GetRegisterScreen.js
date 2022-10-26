import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";
 

export default function GetRegisterScreen({navigation}){
  
  return (
    <View style={styles.container}>

    <ImageBackground source={require("./assets/backgroundpics/greywhite.png")}
     style={styles.ImageBackground}>
      <Image style={styles.image} source={require("./assets/icons/register-icon.png")} />
      <TouchableOpacity style={styles.RegisterBtn}
      onPress={()=>navigation.navigate('RegistrationScreen')}
      >
        <Text style={styles.RegisterText}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    // alignItems: "center",
    // justifyContent: "center",
  },
  
  ImageBackground: {
    flex: 1,
    backgroundColor: "blue",
     alignItems: "center",
     justifyContent: "center",
  },
 
  image: {

    marginBottom: 20,
    height:75,
    width: 75,
    resizeMode:'contain'
},

 RegisterText:{
    color:"white",
    fontWeight:'bold',
    fontSize:20,
    
 },
 
  RegisterBtn: {
    width: "60%",
    borderRadius: 35,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e8bc44",
    shadowColor:'black',
    shadowOpacity:0.30,
    elevation:10,
    shadowRadius:15,
    shadowOffset : { width: 0, height: 6},
    borderWidth:0,

  },
});
