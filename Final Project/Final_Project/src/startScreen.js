import React from 'react';
import {Text} from 'react-native-paper';
import {Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: '100%',
          height: 400,
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={require('./img/logoStart.jpg')}></Image>
      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        style={{
          width: 300,
          height: 40,
          backgroundColor: '#000',
          margin: 'auto',
          borderRadius: 30,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
            margin: 'auto',
            textDecorationLine: 'underline',
          }}>
          Explore the Music World
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default StartScreen;
