import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Alert } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
 
export default function LoginScreen({navigation}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signIn = async () => {
    // console.log('BTN Clicked')
    var params = {
      password: password,
      username: email, 
      deviceToken: "", 
      notificationApp: "lingmoimtab", 
    }
    // console.log('Params are =', params)
    try {
     const response = await fetch('http://talk2you-live.lingmo-api.com/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
     const json = await response.json();
    // console.log('Sign In API Data is =',json)
    // console.log('Token is =',global.token)
    if(json.status){
      global.token=json.data
      navigation.navigate('MainMenuScreen')
      }else{
      Alert.alert(json.message)
    }
   } catch (error) {
     console.error(error);
   } finally {
    // setLoading(false);
  }
}
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/backgroundpics/greywhite.png")} 
      style={styles.ImageBackground}>
      <Image style={styles.image} source={require("./assets/icons/login-icon.png")} />
 
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn}
      onPress={()=>signIn()}
      >
        <Text style={styles.loginText}>Login</Text>
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
 
  image: {
    marginBottom: 30,
    height:75,
    width: 75,
    resizeMode:'contain'

  },
 
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: 'flex-start',
    shadowColor:'black',
    shadowOpacity:0.30,
    elevation:10,
    shadowRadius:15,
    shadowOffset : { width: 0, height: 6},
    borderWidth:0,
  },
 
  TextInput: {
    height: 50,
    width:'93%',
    borderRadius: 30,
    flex: 1,
    marginLeft: 20,
  },
  loginText:{
    fontWeight:'bold',
    color:'white',
    fontSize:20,
  },
 
  loginBtn: {
    width: "60%",
    borderRadius: 35,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    backgroundColor: "#e8bc44",
    shadowColor:'black',
    shadowOpacity:0.30,
    elevation:10,
    shadowRadius:15,
    shadowOffset : { width: 0, height: 6},
    borderWidth:0,
  },
  ImageBackground: {
    flex: 1,
    backgroundColor: "blue",
     alignItems: "center",
     justifyContent: "center",
  },
});