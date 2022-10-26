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
  ScrollView
} from "react-native";
 
  export default function StartNewChatScreen({navigation}){
  const [Username, setUsername] = useState("");
 
  return (
    <View style={styles.container}>
    {/* <ScrollView style={styles.scrollViewContainer}> */}
    
    <View style={styles.topView}>
    <Image style={styles.titleImage} source={require("./assets/icons/make-call-icon.png")} />
        <Text style={styles.TitleText}>Start New Chat</Text>
    </View>
 
      {/* <StatusBar style="auto" /> */}
      
  <View style={styles.centerView}>
    <View style={styles.centerViewClone}>
    <View style={styles.centerInputView}>
      {/* <Text>Hello</Text> */}
        <TextInput style={{ width:'98%',height:50, borderRadius:30, padding:10}}
          // onChangeText={(Username) => setUsername(Username)}
        />
    </View>
    <View style={styles.centerImageView}>
      
    {/* <Text>Hello 2</Text> */}

        <Image style={styles.textImage} source={require("./assets/icons/search-icon.png")} />
        </View>
      </View>
    </View>
      
    {/* </ScrollView> */}

      <View style={styles.extraView}>
        <Text></Text>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0060f7",
    alignItems: "center",
    // justifyContent: "center",
  },
  topView:{
    flex:0.10,
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center',
    // backgroundColor:'red',
    // marginBottom:30
  },
  centerView: {
    flex:0.15,
    flexDirection:'row',
    // backgroundColor: "green",
    // borderRadius: 30,
    width: "90%",
    height: 45,
    alignItems: 'center',
    justifyContent:'center',
    shadowColor:'black',
    shadowOpacity:0.30,
    elevation:10,
    shadowRadius:15,
    shadowOffset : { width: 0, height: 6},
    borderWidth:0,
  },

  centerViewClone: {
    flex:1.0,
    flexDirection:'row',
    backgroundColor: "white",
    borderRadius: 30,
    width: "90%",
    // height: 45,
    alignItems: 'center',
    justifyContent:'center',
    height:50,
  },

  centerInputView:{
    flex:0.80, 
    alignItems:'center', 
    justifyContent:'center',
    // backgroundColor:'green'
  },
  centerImageView:{
    flex:0.20, 
    alignItems:'center', 
    justifyContent:'center',
    // backgroundColor:'red'
  },
  extraView: {
    flex:0.75,
    // backgroundColor:'lightgrey'
    // flexDirection:'row',
    // backgroundColor: "white",
    // borderRadius: 30,
    // width: "90%",
    // height: 45,
    // alignItems: 'flex-start',
    // justifyContent:'flex-start'
  },
  // scrollViewContainer: {
  //   flex: 1,
  //   backgroundColor: "blue",
  //   // alignItems: "center",
  //   // justifyContent: "center",
  // },
  titleImage: {
    // marginBottom: 20,
    height:40,
    width: 40,
    resizeMode:'center',
    // marginTop:30,
  },
  textImage: {
    // marginBottom: 20,
    height:40,
    width: 40,
    resizeMode:'contain',
    // marginTop:30,
  },
  TitleText:{
    paddingLeft:20,
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    marginTop:10,
  },
 
  textInput: {
    height: 50,
    padding: 10,
    marginLeft: 20,
    resizeMode:'contain'
  },
  SaveText:{
    fontWeight:'bold',
    color:'white',
    fontSize:18,
  },
 
  SaveBtn: {
    width: "50%",
    borderRadius: 35,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#e8bc44",
  },
  
  HeadingText:{
    color:"white",
    fontWeight:"300",
    padding:1,
    fontSize:18,

  },

});
