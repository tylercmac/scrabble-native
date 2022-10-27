
import { Text } from 'react-native';

export const OswaldText = (props) => {
  return (
    <Text style={{...props.styles, fontFamily: 'Oswald'}}>{props.text}</Text>
  )
}