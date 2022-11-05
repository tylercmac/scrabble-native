import { useState, useEffect,  useRef } from 'react';
import { View, ScrollView, Pressable, TextInput, ToastAndroid, Keyboard, Linking, Text, DrawerLayoutAndroid, Button } from 'react-native';
import { OswaldText } from './components/OswaldText'
import PlayerBoxes from './components/PlayerBoxes'
import { styles } from './styles'
import txt from '../assets/scrabblewords2.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContentView } from './ContentView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import RNFS from "react-native-fs";


export default function Game({ navigation, route }) {
  const drawer = useRef(null);
  const { names } = route.params
  const [word, setWord] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [openLink, setOpenLink] = useState(false)

  useEffect(() => {
    // readFile(RNFS.DocumentDirectoryPath)
    !word.length ? setIsValid(false) : ' '
  }, [openLink])

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

  const wordExists = async () => {
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

  const DefinitionView = () => (
    <View style={[styles.container]}>
      <ContentView word={word} />
      <Pressable onPress={() => drawer.current.closeDrawer()} >
        <OswaldText text="CLOSE" styles={{ color: '#e6c998', fontSize: 20, marginBottom: 8 }} />
      </Pressable>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='left'
      renderNavigationView={DefinitionView}
    >
      <View style={styles.container}>
        { openLink && word && isValid ? 
          <ContentView word={word} /> 
        : ''}
        <View style={styles.checkWord}>
          <View style={{ height: 25}} >
          {isValid && word.length ? 
            <Pressable 
              onPress={async () => {
                if (openLink) {
                  setOpenLink(!openLink)
                } else {
                  drawer.current.openDrawer()
                }
              }}>
              <OswaldText text={openLink ? "Close" : "Definition"}  styles={{ textAlign: 'center', color: '#b01315' }} />
            </Pressable> : ''}
          </View>
          
          <TextInput
            style={{...styles.wordInput, fontFamily: 'Oswald_400Regular', }}
            onFocus={() => {
              setIsValid(false)
              setWord('')
            }}
            value={word}
            onChangeText={word => setWord(word)} 
            onSubmitEditing={async () => word && await wordExists() }
            />

          <View style={{ ...styles.centerItems, height: 50}} >
          { !openLink ?
            <Pressable 
            onPress={async () => {
              Keyboard.dismiss()
              if (word) await wordExists() 
            }}>
              <OswaldText text="CHECK WORD" styles={ word ? { color: '#b01315', fontSize: 16 } : { color: '#c7685f', fontSize: 16 }} />
            </Pressable> : ''}
          </View>
        </View>

        <View style={{ marginTop: 3, display: 'flex', justifyContent: 'center' }} >
          <OswaldText styles={{ fontStyle: 'italic'}} text={<><Icon name="gesture-swipe-right" size={18} /> to open dictionary</>} />
        </View>

        <View style={{ marginTop: 20 }}>
          <PlayerBoxes names={names} />
          <View style={{ borderColor: '#e6c998', borderWidth: .5, width: 400, marginTop: 20 }} />
        </View>

            <View
              style={{ position: 'absolute', left: 5, top: '50%'}}
            >

        <Pressable
            onPress={() => drawer.current.openDrawer()}
            >
        <Icon style={{ opacity: .7 }} color="#e6c998" name="arrow-expand-right" size={18} />
        </Pressable>
                </View>

      </View>
        <View style={styles.resetFooter}>
          <Pressable 
            style={styles.resetFooter} 
            onPress={async () => {
              await clearAll()
              navigation.navigate('Setup')
            }}>
            <OswaldText text="NEW GAME" styles={{ textAlign: 'center', color: '#b01315' }} />
          </Pressable>

        </View>
      </DrawerLayoutAndroid>
  );
};