import React from 'react';
import styles from './styles';
import {
  Button,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  _Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput style={styles.input} placeholder="User Name" />
      <TextInput style={styles.input} placeholder="Password" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
