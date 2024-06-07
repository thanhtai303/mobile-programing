import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView, FlatList, Image} from 'react-native';
import axios from 'axios';
import {useState} from 'react';
import {Avatar} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://kami-backend-5rs0.onrender.com/services')
      .then(d => {
        setData(d.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
    return () => {};
  }, []);
  const HandleDetail = () => {
    navigation.navigate('Detail');
  };
  const SaveId = async id => {
    await AsyncStorage.setItem('detail', JSON.stringify(id));
  };
  const Item = ({data}) => {
    return (
      <SafeAreaView style={{padding: 5}}>
        <TouchableOpacity
          onPress={() => [HandleDetail(navigation), SaveId(data._id)]}
          style={{
            backgroundColor: '#CECCFF',
            width: '100%',
            height: 50,
            margin: 'auto',
            justifyContent: 'center',
            borderRadius: 15,
          }}
          z>
          <View style={{flexDirection: 'row'}}>
            <Text
              color="#ffff"
              style={{fontWeight: 'bold', fontSize: 20, marginLeft: 15}}>
              {data.name}
            </Text>
            <Text
              color="#ffff"
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginLeft: 10,
                marginLeft: 'auto',
                marginRight: 15,
              }}>
              {data.price} VND
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View
        style={{backgroundColor: '#66579E', padding: 4, flexDirection: 'row'}}>
        <Text
          style={{
            color: '#ffff',
            fontSize: 20,
            fontWeight: 'bold',
            margin: 'auto',
            marginLeft: 10,
          }}>
          BEAUTY SPA
        </Text>
        <Avatar.Icon
          style={{marginRight: 5}}
          size={60}
          icon="account-circle-outline"></Avatar.Icon>
      </View>
      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          padding: 5,
        }}>
        <Image
          style={{
            width: 250,
            height: 200,
            margin: 'auto',
          }}
          resizeMode="stretch"
          source={require('./logo.jpg')}
        />
        <View
          style={{
            backgroundColor: '#ffff',
            padding: 4,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontWeight: 'bold',
              margin: 'auto',
              marginLeft: 10,
              textDecorationLine: 'underline',
            }}>
            Danh sách dịch vụ
          </Text>
          <TouchableOpacity
            style={{
              marginRight: 10,
              width: 50,
              height: 50,
              borderRadius: 90,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
              borderColor: '#66579E',
              borderWidth: 4,
            }}
            onPress={() => navigation.navigate('Add Service')}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
