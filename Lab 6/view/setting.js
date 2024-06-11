import React from 'react';
import {Button, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        style={{backgroundColor: '#CECCFF', marginTop: 50}}
        onPress={() => navigation.navigate('Login')}>
        <Text>Log out</Text>
      </Button>
    </View>
  );
};
export default SettingScreen;
