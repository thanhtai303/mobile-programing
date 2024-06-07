import React from 'react';
import {TextInput} from 'react-native-paper';
import {TouchableOpacity, View, Text, Alert} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const UpdateScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const navigation = useNavigation();
  const HandeUpdate = async () => {
    const token = await AsyncStorage.getItem('userToken');
    const ID = await AsyncStorage.getItem('detail');
    const id = ID.replaceAll('"', '');
    const path = 'https://kami-backend-5rs0.onrender.com/services/' + id;
    await axios.put(path, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        price: price,
      }),
    });
    console.log(path);
    Alert.alert('Note', 'Update successful!');
    navigation.goBack();
  };

  return (
    <SafeAreaProvider>
      <View style={{padding: 10}}>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          style={{marginBottom: 20, borderRadius: 12}}
          label="Service name:"></TextInput>
        <TextInput
          value={price}
          onChangeText={text => setPrice(text)}
          style={{borderRadius: 12}}
          label="Service price:"></TextInput>
        <TouchableOpacity style={styles.button} onPress={HandeUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};
export default UpdateScreen;
