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
 
  export default function SettingScreen({navigation}){
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Fullname, setFullName] = useState("");
  const [Phonenumber, setpPhoneNumber] = useState("");
 
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/backgroundpics/grey.png")}
     style={styles.ImageBackground}>
      
    <View style={styles.topView}>
      <View style={{flexDirection:'row', alignItems:'center', }}>
    <Image style={styles.image} source={require("./assets/icons/settings-icon.png")} />
        <Text style={styles.TitleText}>Settings</Text>
        
    </View>
    

<Text style={{color:'white', fontSize:15, marginTop:10}}>Selected Language</Text>
<View>
    <View style={{flexDirection:'row', alignItems:'center', marginTop:10,marginBottom:10,}}>
    <Image style={styles.Languageimage} source={require("./assets/icons/Pakistan.png")} />
        <Text style={styles.LanguageText}>Ur</Text>
        
    </View>
</View>
</View>
 
      <View style={styles.middlwView}>
      <Text style={styles.HeadingText}>Username</Text>
      <View style={styles.inputView}>
        
        <TextInput
          style={styles.TextInput}
          placeholder="JohnSmith"
          onChangeText={(Username) => setUsername(Username)}
        />
      </View>
      <Text style={styles.HeadingText}>Email Address</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="John@Smith.com"
          secureTextEntry={false}
          onChangeText={(Email) => setEmail(Email)}
        />
      </View>
      <Text style={styles.HeadingText}>Full Name</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="John Smith"
          secureTextEntry={false}
          onChangeText={(Username) => setUsername(Username)}
        />
      </View>
      <Text style={styles.HeadingText}>Phone Number</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="+1 042 0987654"
          secureTextEntry={false}
                    onChangeText={(Phonenumber) => setpPhoneNumber(Phonenumber)}
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
      </View>
      
 <View style={styles.bottomView}>
      <TouchableOpacity style={styles.SaveBtn}
      onPress={()=>navigation.navigate('ChangePasswordScreen')}
      >
        <Text style={styles.SaveText}
        >Save</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
    
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "skyblue",
    // alignItems: "center",
    // justifyContent: "center",
  },
  ImageBackground: {
    flex: 1,
    backgroundColor: "blue",
     //alignItems: "center",
     //justifyContent: "center",
  },
 
  topView:{

    flex:0.30,
    alignItems:'center',
    justifyContent:'center',

  },
  middlwView:{
    flex:0.50,
    alignItems:'center',
    justifyContent:'center',
  },
  bottomView:{
    flex:0.20,
    alignItems:'center',
    justifyContent:'center',
  },
 
  image: {
    
    height:50,
    width: 50,
    resizeMode:'contain'
  },
  Languageimage: {

    height:60,
    width: 60,
    resizeMode:'contain',
    borderColor:'white',
    borderWidth:4,
    borderRadius:50,
    
  },
  TitleText:{
    paddingLeft:20,
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    
  },
  LanguageText:{
    paddingLeft:20,
    color:'white',
    fontSize:40,
    fontWeight:'bold',
    
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
    height: 40,
    width:'97%',
    marginLeft: 10,
    borderRadius:30,
  },
  SaveText:{
    fontWeight:'bold',
    color:'white',
    fontSize:20,
  },
 
  SaveBtn: {
    width: "60%",
    borderRadius: 35,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
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
    paddingBottom:5,
    fontSize:18,

  },
  

});