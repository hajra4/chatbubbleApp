import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
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
 
export default function MainMenuScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/backgroundpics/greywhite.png")}
     style={styles.ImageBackground}>

 
      <TouchableOpacity style={styles.ButtonStyle}
       onPress={()=>navigation.navigate('LanguagesScreen')}
       >
        <View style={{flex:0.30, alignItems:'flex-start', justifyContent:'center'}}>
          <Image style={styles.image} source={require("./assets/icons/languages-icon.png")} />
        </View>
        <View style={{flex:0.40, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.ButtonText}>Languages</Text>
        </View>
        <View style={{flex:0.30, alignItems:'flex-end', justifyContent:'center'}}>
        <Image style={styles.image} source={require("./assets/icons/Pakistan.png")} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ButtonStyle}
      onPress={()=>navigation.navigate('CallsScreen')}
      >
      <View style={{flex:0.33, alignItems:'flex-start', justifyContent:'center'}}>
          <Image style={styles.image} source={require("./assets/icons/calls-icon.png")} />
        </View>
        <View style={{flex:0.33, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.ButtonText}>Calls</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonStyle}
      onPress={()=>navigation.navigate('ChatsScreen')}
      >
      <View style={{flex:0.33, alignItems:'flex-start', justifyContent:'center'}}>
          <Image style={styles.image} source={require("./assets/icons/chat-icon.png")} />
        </View>
        <View style={{flex:0.33, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.ButtonText}>Chats</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonStyle}
       onPress={()=>navigation.navigate('SettingScreen')}
       >
      <View style={{flex:0.33, alignItems:'flex-start', justifyContent:'center'}}>
          <Image style={styles.image} source={require("./assets/icons/settings-icon.png")} />
        </View>
        <View style={{flex:0.33, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.ButtonText}>Setting</Text>
        </View>
      </TouchableOpacity>
      
      
      <TouchableOpacity style={styles.ButtonStyle}>
      <View style={{flex:0.33, alignItems:'flex-start', justifyContent:'center'}}>
          <Image style={styles.image} source={require("./assets/icons/logout-icon.png")} />
        </View>
        <View style={{flex:0.33, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.ButtonText}>Logout</Text>
        </View>
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
 
  ButtonText:{
    fontWeight:'bold',
    color:'white',
    fontSize:20,
     alignSelf:'center',
  },
 
  ButtonStyle: {
    // flex:0.25,
    flexDirection:'row',
    width: "70%",
    borderRadius: 35,
    height: 70,
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#e8bc44",
    padding:10,
    shadowColor:'black',
    shadowOpacity:0.30,
    elevation:10,
    shadowRadius:15,
    shadowOffset : { width: 0, height: 6},
    borderWidth:0,
  },
  image: {
    margin:10,
    height:40,
    width: 40,
    resizeMode: 'contain',

  },
  ImageBackground: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    resizeMode:'center'
  },
});
