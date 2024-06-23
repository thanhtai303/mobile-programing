import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Playlist from './playlist';
import SearchScreen from './searchScreen';
const Stack = createStackNavigator();
const Search = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
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
export default Search;
