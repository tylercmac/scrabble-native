import { useEffect, useState } from 'react';
import { View, TextInput, TouchableHighlight, ImageBackground, Keyboard, KeyboardAvoidingView,  ToastAndroid, } from 'react-native';
import { OswaldText } from './OswaldText'
import { styles } from '../styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function PlayerBoxes({ names }) {
  const [playerNames, setPlayerNames] = useState([])
  const [playerScores, setPlayerScores] = useState([])
  const [newPlayerScores, setNewPlayerScores] = useState([])
  const [input, setInput] = useState([])
  const { getItem, setItem } = AsyncStorage;

  useEffect(() => {
    if (names.length) {
      storePlayerNames(names)
    } else {
      getData()
    }
  }, [])

  const getData = async () => {
    const names = await getItem('@names')
    const scores = await getItem('@scores')
    setPlayerNames(JSON.parse(names))
    scores ? setPlayerScores(JSON.parse(scores)) : ''
    return { names, scores }
  }

  const storePlayerNames = async (names) => {
    await setItem('@names', JSON.stringify(names))
    setPlayerNames(names)
  }

  const storePlayerScores = async (newArray) => {
    await setItem('@scores', JSON.stringify(newArray))
    setPlayerScores(newArray)    
  }

  const calcNewScore = (i) => {
    const updatedScore = ((+playerScores[i] || 0)  + +newPlayerScores[i])
    if (+updatedScore > 999) {
      showToastWithGravity("Score cannot be over 1000")
      return
    }
    const newArray = [...playerScores]
    newArray[i] = updatedScore
    storePlayerScores(newArray)
  }

  const showToastWithGravity = (message) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const playerBoxes = []

  for (let i = 0; i < playerNames.length; i++) {
    const tileArr =[]
    for (let j = 0; j < playerNames[i].length; j++) {
      tileArr.push(
        <View style={styles.shadowProp} key={[j]}>
          <ImageBackground 
            style={styles.letterTile}
            source={require('../../assets/tile.jpg')} 
            >
              <OswaldText styles={{...styles.tileLetter, opacity: .85 }} text={playerNames[i][j].toUpperCase()} />
              <OswaldText styles={styles.letterPoints} text="1" />
            </ImageBackground>
        </View>
      )
    }
    playerBoxes.push(
      <View style={{...styles.centerItems, marginTop: 10 }} key={playerNames[i]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#e6c998'}} />
          <View style={styles.rack}>
            {tileArr}
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#e6c998'}} />
        </View>
        <View style={{...styles.scoreRow, marginRight: 47}}>
          <TouchableHighlight 
            style={{ marginRight: 5 }}
            onPress={() => {
              const newArray = [...playerScores]
              const updatedScore = (+playerScores[i] - newPlayerScores[i])
              newArray[i] = updatedScore
              newPlayerScores[i] = 0
              storePlayerScores(newArray)
          }}>
            <Icon name="undo" size={20} />
          </TouchableHighlight>
          <View style={styles.scoreBox} >
            <OswaldText styles={styles.scoreText}  text={`SCORE:  ${playerScores[i] || 0}`}/>
          </View>
          <TouchableHighlight
            style={{ marginLeft: 5 }}
            onPress={() => {
              const newArray = [...playerScores]
              newArray[i] = 0
              storePlayerScores(newArray)
            }}>
            <Icon name="clear" size={20} />
          </TouchableHighlight>      
        </View>
            
        <View style={styles.scoreRow}>
          <KeyboardAvoidingView
            behavior="height"
            style={{flex: 1}}
            >
            <KeyboardAwareScrollView>
              <TextInput 
                style={{...styles.scoreInput, fontFamily: 'Oswald_400Regular'}}
                value={input[i]}
                maxLength={3}
                keyboardType='numeric'
                onSubmitEditing={() => {
                  Keyboard.dismiss()
                  const newArray = [...input]
                  newArray[i] = ''
                  setInput(newArray)
                  calcNewScore(i)
                }}
                onChangeText={score => {
                  const newArr = [...input]
                  newArr[i] = score
                  setInput(newArr) 
                  newPlayerScores[i] = score
                  setNewPlayerScores(newPlayerScores)
                }}
                />
            </KeyboardAwareScrollView>
          </KeyboardAvoidingView>
      
          <TouchableHighlight
            style={{ marginRight: 10, marginTop: 5 }}
            onPress={() => {
              Keyboard.dismiss()
              const newArray = [...input]
              newArray[i] = ''
              setInput(newArray)
              calcNewScore(i)
            }}>
            <Icon name="add-circle" size={25}  />
          </TouchableHighlight>  
        </View>
      </View>
    )
  }
  return playerBoxes
}