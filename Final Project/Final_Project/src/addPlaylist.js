import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LibraryScreen from './library';
import AddPlaylistScreen from './addPlaylistScreen';
import AddArtistScreen from './addArtistScreen';
import Playlist from './playlist';
import PlaylistDetailScreen from './playlistDetail';
import AudioPlayerScreen from './playScreen';
import ArtistDetail from './artistDetail';
const Stack = createStackNavigator();
const Library = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Library"
          component={LibraryScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Artists"
          component={AddArtistScreen}
          options={{
            headerShown: true,
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#000'},
          }}></Stack.Screen>
        <Stack.Screen
          name="ArtistDetail"
          component={ArtistDetail}
          options={{
            headerShown: false,
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#000'},
          }}></Stack.Screen>
        <Stack.Screen
          name="Albums"
          component={AddPlaylistScreen}
          options={{
            headerShown: true,
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#000'},
          }}></Stack.Screen>
        <Stack.Screen
          name="PlaylistDetail"
          component={PlaylistDetailScreen}
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
export default Library;
