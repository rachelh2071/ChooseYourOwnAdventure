import React from 'react';
import { View, Text, StyleSheet, Button, Image,TouchableOpacity } from 'react-native';
import StoryTextCard from '../components/StoryTextCard'
const StoryScreen = (props) => {
  const { story, onMenuSelection,onForwardSelection, onHomeSelection} = props;
  const onHomeHandler=()=>{
    onHomeSelection(true);
  }
  const onMenuHandler = () => {
    onMenuSelection(true);
  };
  const onForwardHandler=()=>{
    onForwardSelection(story)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.topRow}>
        <Text style={styles.textColor}>{story.setting}</Text>
        <View style={styles.button}>
          <Button title="i" color="black" onPress={onMenuHandler} />
        </View>
      </View>
      <View style={styles.storyText}>
        <Text style={styles.textColor}>{story.dialogue}</Text>
      </View>
      <View>
        <Image style={styles.picture} source={story.picture} />
      </View>

      <TouchableOpacity
        activeOpacity={0.55}
        style={styles.tutorial}
        onPress={story.isEnd?onHomeHandler:onForwardHandler}>
        <Text style={styles.text}>Forward</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
        backgroundColor: '#212F52',
  },
  button: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  text:{
    color: "white"
  },
  topRow: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    padding: 20,
  },
  storyText: {
    width: '80%',

  },
  textColor: {
    color: 'white'
  },
  picture:{
    height:180,
    width:340,
    marginTop:30
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
  bottomRow: {
        flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    height: '40%'
  }
});

export default StoryScreen;
