import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { styles } from './styles'
import { CountTiles } from './components/CountTiles';
import { OswaldText } from './components/OswaldText'

export default function Setup({ navigation }) {
  const [playerCount, setPlayerCount] = useState()
  const [playerNames, setPlayerNames] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const { getItem, setItem } = AsyncStorage;

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
    if (count && playerNames.length) {
      navigation.push('Game', { names: playerNames })
    }
    return count
  }

  const PlayerInputs = () => {
    const playerNameArr = []
    for (let i = 0; i < playerCount; i++) {
      playerNameArr.push(
        <TextInput 
          key={i}
          style={{ margin: 5 }}
          type="text" 
          onChangeText={newText => {
            playerNames[i] = newText
            setPlayerNames(playerNames)
          }}
          maxLength={9}
          placeholder="name"
        />
      )
    }
    return <>{playerNameArr}</>
  }

  return (
    <View style={{...styles.container, justifyContent: 'center'}}>
      <OswaldText text="Number of Players:" styles={{...styles.h1, marginBottom: 4 }} />
      <CountTiles 
        storeCount={storeCount}
        setModalVisible={setModalVisible}
        setPlayerCount={setPlayerCount}
      />
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
            <View style= {{ justifyContent: 'space-around', marginBottom: 20 }}>
            <PlayerInputs />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                navigation.navigate('Game', { names: playerNames || [] })
              }}
            >
              <OswaldText styles={styles.textStyle} text="Start Game!" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}