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
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
 
  export default function RegistrationScreen({navigation}){
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phonenumber, setpPhoneNumber] = useState("");
  const [loading, setLoading] = useState(true)

  const signUp = async () => {
    // console.log('BTN Clicked')
    var params = {
      password: password,
      languageId: "en-US", 
      couponCode: "", 
      username: username, 
      deviceToken: "", 
      fullName: fullname, 
      email: email, 
      notificationApp: "lingmoimtab", 
      phone: phonenumber
    }
    console.log('Params are =', params)
    try {
     const response = await fetch('http://talk2you-live.lingmo-api.com/api/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
     const json = await response.json();
    //  console.log('Sign Up API Data is =',json)
    //  console.log('Token is =',global.token)
    if(json.status){
      global.token=json.data
      navigation.navigate('LoginScreen')
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
    <ImageBackground source={require("./assets/backgroundpics/grey.png")} 
      style={styles.ImageBackground}>
    <ScrollView >
      
      <View style={styles.topView}>
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
    <Image style={styles.image} source={require("./assets/icons/register-icon.png")} />
        <Text style={styles.TitleText}>Registration</Text>
        
    </View>
</View>
 
      <View style={styles.middleView}>
      <Text style={styles.HeadingText}>User Name</Text>
      <View style={styles.inputView}>
        
        <TextInput  
          style={styles.TextInput}
          placeholder="JohnSmith"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <Text style={styles.HeadingText}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="*******"
          
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Text style={styles.HeadingText}>Confirm Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="*******"
          
          secureTextEntry={true}
          onChangeText={(confirmpassword) => setConfirmpassword(confirmpassword)}
        />
      </View>
      <Text style={styles.HeadingText}>Email Address</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="John@Smith.com"
          secureTextEntry={false}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      
      <Text style={styles.HeadingText}>Full Name</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="John Smith"
          secureTextEntry={false}
          onChangeText={(fullname) => setFullname(fullname)}
        />
      </View>
      <Text style={styles.HeadingText}>Phone Number</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="+1 042 0987654"
          secureTextEntry={false}
                    onChangeText={(phonenumber) => setpPhoneNumber(phonenumber)}
        />
      </View>
      </View>
      <View style={styles.bottomView}>
      <TouchableOpacity style={styles.SaveBtn}
        onPress={()=>
        signUp()
      }      >
        <Text style={styles.SaveText}>Save</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
    </ImageBackground>
    </View>
    

  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "blue",
      //alignItems: "center",
    //justifyContent: "center",
  },
  ImageBackground: {
    flex: 1,
    //backgroundColor: "blue",
      alignItems:'stretch'
     //justifyContent: "center",
  },
  topView:{
    flex:0.20,
   // backgroundColor:'blue'
  },
  middleView:{
    flex:0.60,
    justifyContent:'center',
    alignItems:'center',
    
  },
  bottomView:{

    flex:0.20,
    justifyContent:'center',
    alignItems:'center',
  },
 
  image: {
    marginBottom: 20,
    height:60,
    width: 60,
    resizeMode:'contain',
    marginTop:30,
    
  },
  TitleText:{
    paddingLeft:20,
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    marginTop:10,
  },
 
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "80%",
    height: 40,
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

    width:'95%',
    height: 50,
    flex: 1,
    marginLeft:10,
    borderRadius:30,
  },
  SaveText:{
    fontWeight:'bold',
    color:'white',
    fontSize:20,
    alignSelf:'center',
    
  },
 
  SaveBtn: {
    width: "60%",
    borderRadius: 35,
    height: 70,
    //alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e8bc44",
    shadowColor:'black',
    shadowOpacity:0.30,
    elevation:10,
    shadowRadius:15,
    shadowOffset : { width: 0, height: 6},
    borderWidth:0,
    
  },
  
  HeadingText:{
    color:"white",
    fontWeight:"300",
    padding:1,
    fontSize:18,

  },
  

});
