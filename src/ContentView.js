import { WebView } from 'react-native-webview';
import { styles } from './styles'

export const ContentView = ({word}) => {
  return (
    <WebView
      // source={{uri: word ? `https://scrabblewordfinder.org/dictionary/${word}` : 'https://scrabblewordfinder.org'}}
      source={{uri: word ? `https://www.wordnik.com/words/${word.toLowerCase()}` : 'https://www.wordnik.com/'}}
      style={styles.video}
      javaScriptEnabled={true}
      injectedJavaScript={`window.testMessage = "hello world"`}
    />
  )
}