import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function App() {
  const { getItem, setItem } = AsyncStorage;
  const [name, setName] = useState('value')
  const [playerCount, setPlayerCount] = useState()

  useEffect(() => {
    getData()
  }, [])

  const storeCount = async (count) => {
    if (+count < 1 || +count > 4) return
    await setItem('@count', count)
    setPlayerCount(count)
  }
  
  const getData = async () => {
    const count = await getItem('@count')
    console.log({ count })
    setPlayerCount(count)
    return count
  }

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
      setPlayerCount()
    } catch(e) {
      console.log('Error while clearing: ', e);
      
    }
    console.log('Done.')
  }


  return (
    <View style={styles.container}>
      <Text>Pick number of players! Current #: {playerCount}</Text>
      <TextInput styles={{borderBottom: '1px solid black', minWidth: '50px'}} value={playerCount} onChangeText={setPlayerCount} />
      <TouchableOpacity
        onPress={() =>
          storeCount(
            playerCount
          )
        }
      >
      {!isNaN(playerCount) && +playerCount > 0 && +playerCount < 5 ? <Text style={{ color: 'green' }}>Update Player Count</Text> : ''}
      </TouchableOpacity>
      {playerCount && isNaN(playerCount) || playerCount && +playerCount < 1 || playerCount && +playerCount > 4 ? 
      <Text style={{ color: 'red' }}>Playr Count must be between 1 and 4</Text> : ''}

      <TouchableOpacity
        onPress={() => clearAll()}
      >
        <Text style={{ color: 'red'}}>Reset count</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );r
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
