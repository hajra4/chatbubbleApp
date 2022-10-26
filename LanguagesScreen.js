import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
 
  // const DATA = [
  //      {
  //       key:0, title:'Ai', src:require('./assets/languages/croatian.png')
  //     }
  // ]

  var dummy = './assets/languages/slovenian.png'

  export default function ({navigation}) {

    const [languages, setLanguages] = useState([])
    const [loading, setLoading] = useState(true)
    
    const getLanguages = async () => {
        try {
         const response = await fetch('http://talk2you-live.lingmo-api.com/api/languages',
         {
          method: 'GET',
          headers: {
           Accept: 'application/json',
           Authorization: 'kDdDWMQkbZn6tNS70475YtPDk6ExX2C72eX(TnHAB=6B9)arTK'
          },
         }
         );
         const json = await response.json();
         console.log('Languages Data is =',json.data)
         setLanguages(json.data)
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
    }


    useEffect(()=>{
        getLanguages()
      },[])
 
    // const Data = [
    //     {
    //         key:0, title:'Ai', src:require('./assets/icons/Pakistan.png')},
    //        { key:1, title:'Az', src:require('./assets/icons/Pakistan.png')},
    //        {key:2, title:'Be', src:require('./assets/icons/Pakistan.png')},
    //        {key:3, title:'Be', src:require('./assets/icons/Pakistan.png')},
    //        {key:4, title:'En', src:require('./assets/icons/Pakistan.png')},
    //        {key:5, title:'Ur', src:require('./assets/icons/Pakistan.png')},
    // ]



    const render_image=(imgName)=>{
      const img = `'./assets/languages/${imgName}.png'`
      console.log('Yahaan Laga Dain == ',img)
      return img
    }
  
  return (
    <View style={styles.container}>

    <View style={styles.topView}>
    <Image style={styles.image} source={require("./assets/icons/languages-icon.png")} />
        <Text style={styles.TitleText}>Languages</Text>
        <Image style={styles.image} source={require("./assets/icons/Pakistan.png")} />
    </View>
    {loading?
            (<View>
              <ActivityIndicator size="large" />
              </View>):
            (
          <View style={{flex:0.90}}>

              <FlatList
              showsVerticalScrollIndicator={false}
              data={languages}
              renderItem={
                  ({item}) => 
                  {
                    // var myImage =  `'require(./assets/languages/${item.imgName}.png)'`
                    console.log('Dheeetttt', item.imgName)
                    // var obj = {src:myImage}
                    // image = require(./assets/languages/georgian.png)
                    return(
                      <TouchableOpacity style={styles.flatliststyle}>
                      {
                      // var image = item.imgName
                      }
                      <Image style={styles.rowimage} source={item.imgName} />
                        <Text style={styles.LangaugeText}>{item.languageId}</Text>                    
                    </TouchableOpacity>
                    )
                  }
                  
                  }
              // keyExtractor={item=>item.key}   {render_txt(item)}
          />
          </View>

            )
            }
    </View>

  );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0060f7",
        alignItems: "center",
        // justifyContent: "center",
      },
      topView:{
        flex:0.20,
        flexDirection:'row',
        alignItems:'center'
      },
        
      bottomView:{

      },
     
      image: {

        height:50,
        width: 50,
        margin:10,
      },
      TitleText:{

        color:'white',
        fontSize:25,
        fontWeight:'bold',
        
      },

    flatliststyle:{
      flexDirection:'row',
      borderRadius: 25,
      height: 80,
      alignItems: "center",
      padding:10,
      marginBottom:20,
      // backgroundColor:'green'
      },

      rowimage:{
        height:75,
        width:75,
        borderRadius:40,
        borderColor:'white',
        overflow:'hidden',
        borderWidth:4,
      },

      LangaugeText:{
        paddingLeft: 20,
        fontSize: 30,
        fontWeight:"800",
        color:'white'
      },
});
