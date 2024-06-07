import React, {useState} from 'react';
import styles from './styles';
import axios from 'axios';
import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [token, setToken] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setPassword] = useState('');
  const HandleLogin = async ({navigation}) => {
    const postData = {
      phone: userName,
      password: userPassword,
    };
    await axios
      .post('https://kami-backend-5rs0.onrender.com/auth', postData)
      .then(d => {
        setToken(d.data.token);
        AsyncStorage.setItem('userLogin', JSON.stringify(d.data.name));
        AsyncStorage.setItem('userToken', JSON.stringify(d.data.token));
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
    if (token != '') {
      navigation.navigate('homeScreen');
    } else {
      Alert.alert('Can not login!');
    }
  };

  return (
    <View style={{backgroundColor: '#ffff', flex: 1}}>
      <View style={styles.container}>
        <Image
          style={{
            width: 250,
            height: 200,
            marginTop: 100,
          }}
          resizeMode="stretch"
          source={require('./logo.jpg')}
        />
        <TextInput
          value={userName}
          onChangeText={text => setUserName(text)}
          style={styles.input}
          placeholder="User Name"
        />
        <TextInput
          value={userPassword}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => HandleLogin({navigation})}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
