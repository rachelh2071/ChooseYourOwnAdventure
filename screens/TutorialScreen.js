import React from 'react';
import {View,Text,StyleSheet,Button,Image,TouchableOpacity} from 'react-native'; 
const TutorialScreen=props=>{

  const {onBackSelection} = props;

  const onBackHandler=()=>{
    onBackSelection(true,props.origin);
  }
  
  return(
    <View style={styles.screen}>   
        <Text style={styles.title}>Tutorial</Text>
        <View style={styles.container}>
          <Text style={styles.top}>Press the forward button at the bottom to continue through the story</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.top}>Make a decision to choose your own adventure</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.top}>Press the info symbol in the top right to access the tutorial or restart</Text>
        </View>

      <TouchableOpacity activeOpacity={0.55} style={styles.tutorial} onPress={onBackHandler}>
        <Text style={styles.text}>Return</Text>
      </TouchableOpacity>
  
    </View>
  );
};

const styles=StyleSheet.create({
  screen:{
            backgroundColor: '#212F52',

    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'left',
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '70%',
  },
  bottom: {
  flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 36
  },
  top: {
    marginTop: 6,
    width: '100%',
    color: "white",
    fontSize: 18
  },
    tutorial: {
    height: '7%',
    width: '30%',
    backgroundColor: '#2F4373',
    textColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    elevation: 3,
    borderRadius: 6,
  },
  text: {
    color: "white",
    fontSize:20
  },
  title: {
    color: "white",
    fontSize: 30,
    height: "10%"
  }
});

 
export default TutorialScreen;