import { useEffect, useState } from 'react';
import { View, Pressable } from 'react-native';
import { OswaldText } from './components/OswaldText'
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Game({ navigation, route }) {
  const [playerNames, setPlayerNames] = useState([])
  const { getItem, setItem } = AsyncStorage;
  const { count, names } = route.params

  useEffect(() => {
    names.length ? storePlayerNames(names) : getData()
  }, [])

  const storePlayerNames = async (names) => {
    await setItem('@names', JSON.stringify(names))
    setPlayerNames(names)
  }

  const getData = async () => {
    const names = await getItem('@names')
    setPlayerNames(JSON.parse(names))
    return names
  }

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.log('Error while clearing: ', e);
      
    }
    console.log('Done.')
  }

  const RenderPlayerBoxes = () => {
    const playerBoxes = []
    // const scoresArr = parsedPlayers.map(player => Number(playerScore(player)))
    // const gameStart = scoresArr.every(score => score === 0)
    // const leadIndex = indexOfMax(scoresArr)
    for (let i = 0; i < playerNames.length; i++) {
      // let scoreClass = ''
      // if (!gameStart && i === leadIndex) {
      //   scoreClass = 'lead-score'
      // } 
      const tileArr =[]
      for (let j = 0; j < playerNames[i].length; j++) {
        tileArr.push(
          <View style={styles.letterTile} key={[j]}>
            <OswaldText styles={styles.tileLetter} text={playerNames[i][j]} />
          </View>
        )
      }
      playerBoxes.push(
        // <View key={playerNames[i]} score={playerScore(playerNames[i])}>
        <View style={styles.rack} key={playerNames[i]}>
          {tileArr}
        </View>
      )
    }
    return playerBoxes
  }

  return (
    <View style={styles.container}>
      <OswaldText text={`Game Time, ${count} players`} styles={styles.h1} />
      <View style={styles.centerItems}>
        <RenderPlayerBoxes />
      </View>
      <View style={styles.resetFooter}>
      <Pressable 
        style={styles.resetFooter} 
        onPress={async () => {
          await clearAll()
          navigation.navigate('Setup')
        }}>
        <OswaldText text="Reset" style={{ color: '#b01315' }} />
      </Pressable>
        </View>
  </View>
  );
};