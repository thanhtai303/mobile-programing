import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import PlaylistScreen from './playlistScreen';
import AudioPlayerScreen from './playScreen';
const Stack = createStackNavigator();
const Playlist = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Playlist"
          component={PlaylistScreen}
          options={{
            headerShown: false,
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#000'},
          }}></Stack.Screen>
        <Stack.Screen
          name="Play"
          component={AudioPlayerScreen}
          options={{
            headerShown: false,
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#000'},
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Playlist;
