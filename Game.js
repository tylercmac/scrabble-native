import { useState, useEffect } from 'react';
import { View, Pressable, TextInput, ToastAndroid } from 'react-native';
import { OswaldText } from './components/OswaldText'
import PlayerBoxes from './components/PlayerBoxes'
import { styles } from './styles'
import txt from './assets/scrabblewords2.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import RNFS from "react-native-fs";


export default function Game({ navigation, route }) {
  const { names } = route.params
  const [word, setWord] = useState('')

  useEffect(() => {
    // readFile(RNFS.DocumentDirectoryPath)
  }, [])

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.log('Error while clearing: ', e);
      
    }
    console.log('Done.')
  }

  const showToastWithGravity = (isWord) => {
    ToastAndroid.showWithGravity(
      isWord ? "This is a scrabble word" : "This isn't a scrabble word",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  // const readFile = async (currDir) => {
  //   try {
  //     const path =  currDir + "/assets/scrabblewords.txt";
  //     const contents = await RNFS.readFile(path, "utf8");
  //     console.table(contents);
  //     return("" + contents);
      
  //   } catch (e) {
  //     alert("" + e);
  //   }
  // };

  const wordExists = async (wordsrch) => {
    const exists = await txt.find((word => word === wordsrch.toUpperCase()))
    console.log(exists)
    return exists
  }

  // const callAPI = async (word) =>  {
  //   let UIResponse = {
  //     status: 200,
  //     url: ''
  //   }
  //   const baseURL = `https://api.wordnik.com/v4/word.json/dog/definitions?limit=5&includeRelated=false&useCanonical=false&includeTags=false&api_key=YOURAPIKEY`
  //   try {
  //     const response = await fetch(baseURL, { method: 'get' })
  //     console.log({response});
  //     if (response.status === 404) {
  //       return response
  //     } else if (response.status === 200) {
  //       const parsedResponse = await response.json();
  //       UIResponse.url = parsedResponse[0].wordnikUrl
  //       console.log({UIResponse});
        
  //       return UIResponse
  //     }
  //   } catch (err) {
  //     console.error('Could not fetch from dictionaryapi', err);
  //   }
  // }

  return (
      <View style={styles.container}>
        <View style={styles.centerItems}>
          <TextInput onChangeText={word => setWord(word)}/>
        <Pressable 
          style={{ height: 50 }} 
          onPress={async () => {
            const isWord = await wordExists(word) 
            showToastWithGravity(isWord)
            
          }}>
          <OswaldText text="check word" styles={{ textAlign: 'center', color: 'black' }} />
        </Pressable>
        <PlayerBoxes names={names} />
        <View style={{ borderColor: '#e6c998', borderWidth: .5, width: 400, marginTop: 20 }} />
        </View>
        <View style={styles.resetFooter}>
        <Pressable 
          style={styles.resetFooter} 
          onPress={async () => {
            await clearAll()
            navigation.navigate('Setup')
          }}>
          <OswaldText text="Reset" styles={{ textAlign: 'center', color: '#b01315' }} />
        </Pressable>
        </View>
      </View>
  );
};