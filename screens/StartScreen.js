import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
const StartScreen = (props) => {
  const { onPlaySelection, onTutorialSelection } = props;
  const onPlayHandler = () => {
    onPlaySelection(true);
  };
  const onTutorialHandler = () => {
    onTutorialSelection(true);
  };

  return (
    <View style={styles.screen}>

      <Text style={styles.title}>Choose your own Adventure</Text>

      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.play}
        onPress={onPlayHandler}>
        <Text style={styles.text}>PLAY</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.tutorial}
        onPress={onTutorialHandler}>
        <Text style={styles.text}>Tutorial</Text>
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
  tutorial: {
    height: '10%',
    width: '30%',
    backgroundColor: '#2F4373',
    textColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    elevation: 3,
    borderRadius: 6,
  },
  play: {
    height: '10%',
    width: '30%',
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
  title: {
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StartScreen;
