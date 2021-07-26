import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
const MenuScreen = (props) => {
  const {onHomeSelection, onTutorialSelection,onReturnSelection} = props;
  const onHomeHandler=()=>{
    onHomeSelection(true);
  }
  const onTutorialHandler=()=> {
    onTutorialSelection(true);
  }
  const onReturnHandler=()=> {
    onReturnSelection(true);
  }
  return (
    <View style={styles.screen}>
      <TouchableOpacity activeOpacity={0.55} style={styles.choice} onPress={onHomeHandler}>
        <Text style={styles.text}>Back to Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.55} style={styles.choice} onPress={onTutorialHandler}>
        <Text style={styles.text}>Tutorial</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.55} style={styles.back} onPress={onReturnHandler}>
        <Text style={styles.text}>Return</Text>
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
  back: {
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
});

export default MenuScreen;
