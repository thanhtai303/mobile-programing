import 'react-native-gesture-handler';
import React from 'react';
import Contacts from './src/Contact';
import Store from './src/Stores';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileContact from './src/ProfileContact';
import Favorites from './src/Favorites';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
const Stack = createStackNavigator();
import styles from './src/styles';

// const App = () => {
//     return (
//         <Provider store={Store}>
//             <NavigationContainer>
//                <ContactsScreens />
//             </NavigationContainer>
//         </Provider>
//     );
// };
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;

function ContactsScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={Contacts} />

      {
        <Stack.Screen
          name="ProfileContact"
          component={ProfileContact}
          options={{title: 'Profile contact'}}
        />
      }
    </Stack.Navigator>
  );
}

function FavoriteScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{title: 'Favorites'}}
      />

      <Stack.Screen
        name="ProfileContact"
        component={ProfileContact}
        options={{title: 'Profile contact'}}
      />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ContactsScreens"
      barStyle={{backgroundColor: 'blue'}}
      labeled={false}>
      <Tab.Screen
        name="Contacts"
        component={ContactsScreens}
        options={{
          tabBarIcon: 'format-list-bulleted',
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoriteScreens}
        options={{
          tabBarIcon: 'star-check',
        }}
      />
    </Tab.Navigator>
  );
};
