import { useState, useEffect } from 'react';
import { View, ScrollView, Pressable, TextInput, ToastAndroid, Keyboard, Linking } from 'react-native';
import { OswaldText } from './components/OswaldText'
import PlayerBoxes from './components/PlayerBoxes'
import { styles } from './styles'
import txt from './assets/scrabblewords2.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import RNFS from "react-native-fs";


export default function Game({ navigation, route }) {
  const { names } = route.params
  const [word, setWord] = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    // readFile(RNFS.DocumentDirectoryPath)
    !word.length ? setIsValid(false) : ''
  }, [])

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.log('Error while clearing: ', e);
      
    }
    console.log('Done.')
  }

  const showToastWithGravity = (message) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
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
    Keyboard.dismiss()
    const exists = await txt.find((listWord => listWord === word.toUpperCase()))
    setIsValid(exists) 
    showToastWithGravity(exists ? "This is a Scrabble Word" : "This is not a Scrabble Word")
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

        <View style={{ justifySelf: 'flex-start', justifyContent: 'center', alignItems: 'center', marginTop: 30, paddingTop: 10, backgroundColor: 'rgba(230, 201, 152, .9)', width: '50%', borderRadius: 3 }}>
          <View style={{ height: 25}} >
          {isValid && word.length ? <Pressable 
            onPress={async () => {
              setIsValid(false)
              await Linking.openURL(`https://scrabblewordfinder.org/dictionary/${word}`)
            }}>
            <OswaldText text="Definition" styles={{ textAlign: 'center', color: '#b01315' }} />
          </Pressable> : ''}
              </View>
              
          
          <TextInput
            style={{...styles.wordInput, fontFamily: 'Oswald_400Regular', }}
            onChangeText={word => setWord(word)} 
            onSubmitEditing={async () => await wordExists()}
            />
          <Pressable 
            style={{...styles.centerItems, height: 50 }} 
            onPress={async () => {
              Keyboard.dismiss()
              const isWord = await wordExists(word) 
              showToastWithGravity(isWord ? "This is a Scrabble Word" : "This is not a Scrabble Word")
              
            }}>
            <OswaldText text="CHECK WORD" styles={{ color: '#b01315', fontSize: 16 }} />
          </Pressable>
        </View>

        <View style={{ marginTop: 20 }}>
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