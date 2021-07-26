import React, { useState,useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StartScreen from './screens/StartScreen';
import TutorialScreen from './screens/TutorialScreen';
import StoryScreen from './screens/StoryScreen';
import MenuScreen from './screens/MenuScreen';
import ChoiceScreen from './screens/ChoiceScreen';

import Story from './consts/story'

export default function App() {
  const [play, setPlay] = useState(false);
  const [tutorial, setTutorial] = useState(false);
  const [menu, setMenu]=useState(false);
  const [page,setPage]=useState(Story["route1Page1"]);
  const onPlayHandler=(e)=>{
    setPlay(e);
    setTutorial(false);
    setMenu(false);
  }

  const onTutorialHandler = (e) =>{
    setTutorial(e);
    setPlay(false);
    setMenu(false);
  }

  const onMenuHandler =(e) => {
    setMenu(e);
    setPlay(false);
    setTutorial(false);
  }

  const onStartHandler=(e)=>{
    setPage(Story["route1Page1"]);
    setMenu(false);
    setPlay(false);
    setTutorial(false)

  }

  const onForwardHandler = (e,choice=0) => {
    if (choice===0)
      setPage(Story[page.next]);
    if (choice===1)
      setPage(Story[page.next1]);
    if (choice===2)
      setPage(Story[page.next2]);
}

  const onBackHandler=(e,origin)=>{
    if(origin.type===StartScreen){
      onStartHandler(true)
    }
    else if(origin.type===MenuScreen){
      onMenuHandler(true)
    }
    else if(origin.type===TutorialScreen){
      onTutorialHandler(true)
    }
    else if(origin.type===StoryScreen){
      onPlayHandler(true)
    }
  }

    let content = <StartScreen onPlaySelection={onPlayHandler} onTutorialSelection={onTutorialHandler}/>
    
  
  if (play) {
    if(page.isChoice){
      content=<ChoiceScreen choice={page} onForwardSelection={onForwardHandler}/>
    }
    else{
      content = <StoryScreen story={page} onMenuSelection={onMenuHandler} onForwardSelection={onForwardHandler} onHomeSelection={onStartHandler}/>;
    }
  } else if (tutorial) {
    content = content.type!=TutorialScreen?<TutorialScreen origin={content} onBackSelection={onBackHandler} />:content;
  } else if(menu){
    content= <MenuScreen onHomeSelection={onStartHandler} onTutorialSelection={onTutorialHandler} onReturnSelection={onPlayHandler}/>;
  }
  else {
    content = <StartScreen onPlaySelection={onPlayHandler} onTutorialSelection={onTutorialHandler}/>;
  }

  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
