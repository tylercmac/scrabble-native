import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useAsyncStorage} from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function App() {
  const { getItem, setItem } = useAsyncStorage('@name');
  const [name, setName] = useState('value')
  const [text, setText] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const storeData = async (value) => {
    await setItem(value)
    setName(value)
  }
  
  const getData = async () => {
    const value = await getItem()
    setName(value)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your ass, {name}!</Text>
      <TextInput styles={{borderBottom: '1px solid black', minWidth: '50px'}} value={text} onChangeText={setText} />
      <TouchableOpacity
        onPress={() =>
          storeData(
            text
          )
        }
      >
        <Text>Update Name</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
