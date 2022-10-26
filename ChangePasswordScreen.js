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
} from "react-native";
 
  export default function ChangePasswordScreen(){
    
  const [CurrentPassword, setCurrentPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmNewPassword, setConfirmNewPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
    <View style={{flexDirection:'row', alignItems:'center'}}>
    <Image style={styles.image} source={require("./assets/icons/settings-icon.png")} />
        <Text style={styles.TitleText}>Change Password</Text>
    </View>
</View>
 
      <View style={styles.middleView}>
      <Text style={styles.HeadingText}>Current Password</Text>
      <View style={styles.inputView}>
        
        <TextInput
          style={styles.TextInput}
          placeholder="*******"
          onChangeText={(CurrentPassword) => setCurrentPassword(CurrentPassword)}
        />
      </View>
      <Text style={styles.HeadingText}>New Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="*******"
          
          secureTextEntry={true}
          onChangeText={(NewPassword) => setNewPassword(NewPassword)}
        />
      </View>
      <Text style={styles.HeadingText}>Confirm New Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="*******"
          
          secureTextEntry={true}
          onChangeText={(ConfirmNewPassword) => setConfirmNewPassword(ConfirmNewPassword)}
        />
      </View>
      </View>
 <View style={styles.bottomView}>
      <TouchableOpacity style={styles.SaveBtn}>
        <Text style={styles.SaveText}>Save</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0060f7",
    //alignItems: "center",
    //justifyContent: "center",
  },
  topView:{
    flex:0.20,
    alignItems:'center',
    justifyContent:'flex-end'
  },
  middleView:{
    flex:0.60,
    alignItems:'center',
    justifyContent:'flex-start',
    
  },
  bottomView:{
    flex:0.20,
    alignItems:'center',
    justifyContent:"center"
  },
  image: {
    marginBottom: 20,
    height:70,
    width: 70,
    resizeMode:'contain',
    
  },
  TitleText:{
    paddingLeft:10,
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:20,
  },
 
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "80%",
    height: 40,
    marginBottom: 30,
    alignItems: 'flex-start',
  },
 
  TextInput: {
    height: 40,
    width:'97%',
    marginLeft: 10,
    borderRadius: 30,
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
    backgroundColor: "#e8bc44",
  },
  
  HeadingText:{
    color:"white",
    fontWeight:"300",
    padding:1,
    fontSize:18,

  },

});
