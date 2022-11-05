import { WebView } from 'react-native-webview';
import { styles } from './styles'

export const ContentView = ({word}) => {
  return (
    <WebView
      source={{uri: `https://scrabblewordfinder.org/dictionary/${word}`}}
      style={styles.video}
      javaScriptEnabled={true}
      injectedJavaScript={`window.testMessage = "hello world"`}
    />
  )
}