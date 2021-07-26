import React from 'react';
import {View,Text,StyleSheet,Button,Image, ScrollView} from 'react-native';
import Card from "./Card"

const StoryTextCard=props=>{
  return(

    <View style={styles.screen}> 	 
        <Card style={styles.storyTextCard}>
          <Text style={styles.description}>{props.children}</Text> 	 
        </Card>
    </View>
  
  );
};
 
const styles=StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor: '#212F52',
    //justifyContent:'center',
    alignItems:'center',
  },
 
  storyTextCard:{
    paddingLeft: '5%',
    paddingRight: '5%',
    //marginTop: -30,
    //paddingTop: 10
  },
 
  description:{
    color: 'white',
    fontSize: 20,
    //lineHeight: 25,
  }
 
});
 
 
 
export default StoryTextCard;
