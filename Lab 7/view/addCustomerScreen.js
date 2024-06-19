import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {Alert} from 'react-native';

const AddCustomer = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const HandleAdd = async () => {
    const token = await AsyncStorage.getItem('userToken');

    fetch('https://kami-backend-5rs0.onrender.com/customers', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        // Handle success, e.g., show success message or navigate to another screen
        Alert.alert('Success', 'Customer added successfully!');
        console.log('Response data:', data);
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
        Alert.alert('Error', 'Failed to add customer. Please try again later.');
      });
  };

  return (
    <SafeAreaProvider>
      <View style={{padding: 10}}>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          style={{marginBottom: 20, borderRadius: 12}}
          label="Customer name:"></TextInput>
        <TextInput
          value={phone}
          onChangeText={text => setPhone(text)}
          style={{borderRadius: 12}}
          label="Customer phone:"></TextInput>
        <TouchableOpacity style={styles.button} onPress={HandleAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};
export default AddCustomer;
