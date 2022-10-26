import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import reactDom from "react-dom";
import { SafeAreaView} from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView

} from "react-native";
 
  export default function CallsScreen({navigation}){

    const ChatsRecord= [
        {key:0, title:'John Smith'},
        {key:1, title:'Lynda jackson'},
        {key:2, title:'Adam Mark'},
        {key:3, title:'David'},
        {key:4, title:'Bill'},
        {key:5, title:'Rose'},
        {key:6, title:'Tony'},
    ];
 
  return (
    <View style={styles.container}>
    <ImageBackground style={styles.imageBackground} source={require("./assets/backgroundpics/grey.png")}
    > 
    
      <View style={styles.topView}>
      <Image style={styles.image} source={require("./assets/icons/chat-icon.png")} />
        <Text style={styles.TitleText}>Chats</Text>
      </View>

    <View style={styles.centerView}>
    <FlatList style={{flex:0.50,}}
              showsVerticalScrollIndicator={false}
              data={ChatsRecord}
              renderItem={
                  ({item}) => (
                  <TouchableOpacity style={styles.flatliststyle}
                  onPress={() =>
                    // Alert.alert('Hello')
                    navigation.navigate('MessagesScreen', {
                       userName: item.title,
                    })
                 }
                  >
                      <Text style={styles.LangaugeText}>{item.title}</Text>                    
                  </TouchableOpacity>
                  )
                  }
              // keyExtractor={item=>item.key}
          />
    </View>

      
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.SaveBtn}
        onPress={()=>navigation.navigate('StartNewChatScreen')}
        >
          <Image style={styles.Btnimage} source={require("./assets/icons/make-call-icon.png")} />
          <Text style={styles.SaveText}>Audio Chat</Text>
        </TouchableOpacity>
      </View>
     
    </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  
  container:{
    flex:1,
    //backgroundColor: "blue",
    //alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    flex:1,
    backgroundColor: "blue",
    alignItems: "center",
    //justifyContent: "center",
    // backgroundColor:'red'
 },

 topView:{
  flexDirection:'row',
  flex:0.15, 
  alignItems:'center',
  justifyContent:'center'
  },
  centerView:{
  // flexDirection:'row',
  flex:0.70, 
  backgroundColor:'white',
  width:'85%',
  // alignItems:'center',
  borderRadius:20,
  shadowColor:'black',
    shadowOpacity:0.30,
    elevation:10,
    shadowRadius:15,
    shadowOffset : { width: 0, height: 6},
    borderWidth:0,
  },
  
  bottomView:{

 // flexDirection:'row',
  flex:0.15, 
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'100%',
  },

 TitleView:{
    
    
 },
  image: {

    height:60,
    width: 60,
    resizeMode:'contain',
    //marginTop:20,
    
    
  },
  TitleText:{
    alignContent:'center',
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    marginTop:35,
  },
  ChatsView:{
  },
 
    SaveText:{
    fontWeight:'bold',
    color:'white',
    fontSize:20,   
    padding:10, 
  },
 
  SaveBtn: {
    //flex:0.25,
    width: "60%",
    borderRadius: 35,
    height: 70,
   alignItems: "center",
   alignContent:"center",
   justifyContent: "center",
    //marginTop: 20,
    backgroundColor: "#e8bc44",
    flexDirection:"row",
    shadowColor:'black',
    shadowOpacity:0.30,
    elevation:10,
    shadowRadius:15,
    shadowOffset : { width: 0, height: 6},
    borderWidth:0,

  },
  Btnimage: {

    height:45,
    width: 45,
    //resizeMode:'contain',
    //marginTop:20,
    
    
  },
  LangaugeText:{
    padding:10,
    color:'gray',
    fontSize:18,

  },
 

});
