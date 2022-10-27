import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setup from './Setup';
import Game from './Game';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Setup"
          component={Setup}
          options={{ title: 'Game Setup' }}
        />
        <Stack.Screen name="Game" > 
          {props => <Game {...props}/>}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};