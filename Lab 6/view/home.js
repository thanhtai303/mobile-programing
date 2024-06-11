import React from 'react';
import Service from './service';
import Customer from './customer';
import TransactionMain from './transactionMain';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'react-native-paper';
import SettingScreen from './setting';

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Service}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home-variant" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Customer"
          component={Customer}
          options={{
            headerTintColor: '#9D48FA',
          }}
        />
        <Tab.Screen
          name="Transaction"
          component={TransactionMain}
          options={{
            headerTintColor: '#9D48FA',
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerTintColor: '#9D48FA',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Home;
