import { useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  useFonts,
  Oswald_400Regular,

} from '@expo-google-fonts/oswald';
import * as SplashScreen from 'expo-splash-screen';
import Setup from './Setup';
import Game from './Game';

const Stack = createNativeStackNavigator();

export default function App () {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
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
    </View>
  );
};