import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { styles } from './styles'
import { CountTiles } from './components/CountTiles';
import { OswaldText } from './components/OswaldText'
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Oswald': require('./assets/fonts/Oswald-Regular.otf'),
  });
  const { getItem, setItem } = AsyncStorage;
  const [playerCount, setPlayerCount] = useState()
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getData()
  }, [])


  const storeCount = async (count) => {
    await setItem('@count', count)
    setPlayerCount(count)
  }
  
  const getData = async () => {
    const count = await getItem('@count')
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

  if (!fontsLoaded) {
    return null;
  } else return (
    <View style={styles.container}>
      <OswaldText text="Number of Players:" styles={styles.h1} />
      <CountTiles 
        storeCount={storeCount}
        setModalVisible={setModalVisible}
        setPlayerCount={setPlayerCount}
      />
      <TouchableOpacity
        onPress={() => clearAll()}
      >
        <OswaldText text="Reset" styles={{ color: 'red'}} />
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