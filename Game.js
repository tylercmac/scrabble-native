import { useState } from 'react';
import { View, Pressable } from 'react-native';
import { OswaldText } from './components/OswaldText'
import PlayerBoxes from './components/PlayerBoxes'
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Game({ navigation, route }) {
  const { names } = route.params

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.log('Error while clearing: ', e);
      
    }
    console.log('Done.')
  }

  return (
    <View style={styles.container}>
      <OswaldText text={"ScrabbleMaster"} styles={styles.h1} />
      <View style={styles.centerItems}>
      <PlayerBoxes names={names} />
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