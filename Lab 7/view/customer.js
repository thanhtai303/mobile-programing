import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddCustomer from './addCustomerScreen';
import CustomerScreen from './customerScreen';
import CustomerDetail from './customerDetail';

const Stack = createStackNavigator();
const Customer = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Customer Screen"
          component={CustomerScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Add Customer"
          component={AddCustomer}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Customer Detail"
          component={CustomerDetail}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Customer;
