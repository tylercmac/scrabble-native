import { useEffect, useState } from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import { OswaldText } from './OswaldText'
import { styles } from '../styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const newArray = [...playerScores]
    newArray[i] = updatedScore
    storePlayerScores(newArray)
  }

  const playerBoxes = []

  for (let i = 0; i < playerNames.length; i++) {
    const tileArr =[]
    for (let j = 0; j < playerNames[i].length; j++) {
      tileArr.push(
        <View style={styles.letterTile} key={[j]}>
          <OswaldText styles={styles.tileLetter} text={playerNames[i][j]} />
        </View>
      )
    }
    playerBoxes.push(
      <View style={styles.centerItems} key={playerNames[i]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#e6c998'}} />
          <View style={styles.rack}>
            {tileArr}
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#e6c998'}} />
        </View>
        <OswaldText styles={{ color: '#e6c998' }}  text={`Score: ${playerScores[i] || 0}`}/>
        <View style={styles.scoreRow}>
          <TextInput 
            style={styles.scoreInput}
            value={input[i]}
            maxLength={3}
            keyboardType='numeric'
            onSubmitEditing={() => {
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
          <TouchableHighlight 
            style={{ marginLeft: 10 }}
            onPress={() => {
              const newArray = [...playerScores]
              const updatedScore = (+playerScores[i] - newPlayerScores[i])
              newArray[i] = updatedScore
              newPlayerScores[i] = 0
              storePlayerScores(newArray)
          }}>
            <OswaldText text="(undo)"/>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ marginLeft: 20 }}
            onPress={() => {
              const newArray = [...playerScores]
              newArray[i] = 0
              storePlayerScores(newArray)
          }}>
            <OswaldText text="(clear)"/>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
  return playerBoxes
}