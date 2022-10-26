import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { styles } from './styles'

export default function App() {
  const { getItem, setItem } = AsyncStorage;
  const [name, setName] = useState('value')
  const [playerCount, setPlayerCount] = useState()
  const [modalVisible, setModalVisible] = useState(false);

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

  const PlayerInputs = () => {
    const playerNameArr = []
    for (let i = 0; i < playerCount; i++) {
      playerNameArr.push(
        <TextInput 
          key={i}
          type="text" 
          className="player-name" 
          maxLength={9}
          placeholder="name"
        />
      )
    }
    return <>{playerNameArr}</>
  }

  const CountTiles = () => {
    return (
      <View style={styles.rack}>      
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true)
            setPlayerCount("2")
            storeCount("2")
          }}
          >
          <View style={styles.tile} key="2" data-letter="2" ><Text style={{ paddingLeft: 10 }}>2</Text></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true)
            setPlayerCount("3")
            storeCount("3")
          }}
          >
          <View style={styles.tile} key="3" data-letter="3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true)
            setPlayerCount("4")
            storeCount("4")
          }}
          >
          <View style={styles.tile} key="4" data-letter="4" />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Pick number of players!</Text>
      <CountTiles />
      <TouchableOpacity
        onPress={() => clearAll()}
      >
        <Text style={{ color: 'red'}}>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <PlayerInputs />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                console.log('Trigger game start logic here!');
                
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>Start Game!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}


