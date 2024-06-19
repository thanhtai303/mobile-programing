import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, TouchableOpacity, Text, Alert} from 'react-native';
import styles from './styles';
import {Button, Menu, PaperProvider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const SimpleMenu = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const HandleUpdate = () => {
    closeMenu();
    navigation.navigate('Update Service');
  };

  const HandleDelete = async () => {
    const token = await AsyncStorage.getItem('userToken');
    const ID = await AsyncStorage.getItem('detail');
    const id = ID.replaceAll('"', '');
    const path = 'https://kami-backend-5rs0.onrender.com/services/' + id;
    await axios.delete(path, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
    console.log(path);
    Alert.alert('Note', 'Update successful!');
    navigation.goBack();
  };
  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 10,
          flexDirection: 'row',
          justifyContent: 'right',
          marginLeft: 345,
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button
              style={{width: 100}}
              onPress={openMenu}
              icon={'menu'}></Button>
          }>
          <Menu.Item
            onPress={navigation => {
              HandleUpdate(navigation);
            }}
            title="Update"
          />
          <Menu.Item
            onPress={navigation => {
              HandleDelete(navigation);
            }}
            title="Delete"
          />
        </Menu>
      </View>
    </PaperProvider>
  );
};

const DetailScreen = ({navigation}) => {
  const [data, setData] = useState('');
  useEffect(() => {
    async function GetDatta() {
      const ID = await AsyncStorage.getItem('detail');
      const id = ID.replaceAll('"', '');
      const path = 'https://kami-backend-5rs0.onrender.com/services/' + id;
      const data = await axios.get(path);
      setData(data.data);
    }
    GetDatta();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <SimpleMenu></SimpleMenu>
      </View>

      <View style={{flex: 20}}>
        <View style={{padding: 10, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Service name: </Text>
          <Text>{data.name}</Text>
        </View>
        <View style={{padding: 10, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Price: </Text>
          <Text>{data.price}</Text>
        </View>
        <View style={{padding: 10, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Creator: </Text>
          <Text>{data.createdBy}</Text>
        </View>
        <View style={{padding: 10, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Time: </Text>
          <Text>{data.createdAt}</Text>
        </View>
        <View style={{padding: 10, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Final update: </Text>
          <Text>{data.updatedAt}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={navigation => HandeUpdate(navigation)}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default DetailScreen;
