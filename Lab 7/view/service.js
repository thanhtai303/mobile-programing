import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './homeScreen';
import LoginScreen from './loginScreen';
import AddScreen from './addScreen';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './detailScreen';
import UpdateScreen from './updateScreen';

const Stack = createStackNavigator();
const Service = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Add Service" component={AddScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen name="Update Service" component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Service;
