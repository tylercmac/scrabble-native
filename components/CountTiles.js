import { View, TouchableOpacity } from 'react-native';
import { OswaldText } from './OswaldText'
import { styles } from '../styles'

export const CountTiles = ({ storeCount, setModalVisible, setPlayerCount }) => {
  return (
    <View style={styles.rack}>      
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true)
          setPlayerCount("2")
          storeCount("2")
        }}
        >
        <View style={styles.countTile} key="2" data-letter="2" >
          <OswaldText text="2" styles={styles.countNumber} />
          <OswaldText text="1" styles={ styles.countPoints } />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true)
          setPlayerCount("3")
          storeCount("3")
        }}
        >
        <View style={styles.countTile} key="3" data-letter="3" >
          <OswaldText text="3" styles={styles.countNumber} />
          <OswaldText text="1" styles={ styles.countPoints } />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true)
          setPlayerCount("4")
          storeCount("4")
        }}
        >
        <View style={styles.countTile} key="4" data-letter="4" >
          <OswaldText text="4" styles={styles.countNumber} />
          <OswaldText text="1" styles={ styles.countPoints } />
        </View>
      </TouchableOpacity>
    </View>
  )
}