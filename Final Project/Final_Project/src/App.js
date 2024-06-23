import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './mainSceeen';
import StartScreen from './startScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const AppScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppScreen;
