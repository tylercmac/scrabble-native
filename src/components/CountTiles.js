import { View, TouchableOpacity, ImageBackground } from 'react-native';
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
        <View style={styles.shadowProp}>
          <ImageBackground 
            style={styles.countTile}
            source={require('../../assets/tile.jpg')} 
            >
            <OswaldText styles={{...styles.countNumber, opacity: .85 }} text="2" />
            <OswaldText styles={styles.countPoints} text="1" />
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true)
          setPlayerCount("3")
          storeCount("3")
        }}
        >
        <View style={styles.shadowProp}>
          <ImageBackground 
            style={styles.countTile}
            source={require('../../assets/tile.jpg')} 
            >
            <OswaldText styles={{...styles.countNumber, opacity: .85 }} text="3" />
            <OswaldText styles={styles.countPoints} text="1" />
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true)
          setPlayerCount("4")
          storeCount("4")
        }}
        >
        <View style={styles.shadowProp}>
          <ImageBackground 
            style={styles.countTile}
            source={require('../../assets/tile.jpg')} 
            >
            <OswaldText styles={{...styles.countNumber, opacity: .85 }} text="4" />
            <OswaldText styles={styles.countPoints} text="1" />
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  )
}