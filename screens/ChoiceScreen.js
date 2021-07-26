import React from 'react';
import {View,Text,StyleSheet,Button,Image,TouchableOpacity} from 'react-native'; 
const ChoiceScreen=props=>{
  const {choice,onForwardSelection}=props;
  const onChoice1Handler=()=>{
    onForwardSelection(choice,1);
  }
  const onChoice2Handler=()=>{
    onForwardSelection(choice,2);
  }
  return(
    <View style={styles.screen}>
      <Text style={styles.promptText}>What will you do?</Text>
      <TouchableOpacity activeOpacity={0.55} style={styles.choice} onPress={onChoice1Handler}>
        <Text style={styles.text}>{choice.choice1}</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.55} style={styles.choice} onPress={onChoice2Handler}>
        <Text style={styles.text}>{choice.choice2}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212F52',
  },
  choice: {
    height: '15%',
    width: '60%',
    backgroundColor: '#2F4373',
    textColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    elevation: 3,
    borderRadius: 6,

  },
  text: {
    color: 'white',
  },
  promptText: {
    color: 'white',
    marginTop:"20%"
  },
});

export default ChoiceScreen;
