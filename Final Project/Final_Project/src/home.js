import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './homeScreen';
import Playlist from './playlist';
const Stack = createStackNavigator();
const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#000'},
          }}></Stack.Screen>
        <Stack.Screen
          name="Playlist"
          component={Playlist}
          options={{
            headerShown: false,
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#000'},
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Home;
