import { View, Button } from 'react-native';
import { OswaldText } from './components/OswaldText'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Game({ navigation }) {

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.log('Error while clearing: ', e);
      
    }
    console.log('Done.')
  }

  return (
    <View style={{ height: '100%' }}>
      <OswaldText text="Game Time" styles={{ fontSize: 40, textAlign: 'center' }} />
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Button
          title="Reset Game"
          onPress={async () => {
            await clearAll()
            navigation.navigate('Setup')
          }}
          />
        </View>
  </View>
  );
};