import React from 'react';
import {Text} from 'react-native-paper';
import {View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';

const ArtistDetail = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const {
    avatar,
    name,
    style,
    song1,
    song2,
    song3,
    song1_name,
    song2_name,
    song3_name,
  } = routes.params;
  const HandleAdd = async () => {
    try {
      const path = 'http://10.0.2.2:8080/data/singer/insert';
      const response = await axios.post(path, {
        singer_name: name,
        avatar: avatar,
        type_name: style,
        song1: '',
        song2: '',
        song3: '',
        song4: '',
        song5: '',
        song_name_1: '',
        song_name_2: '',
        song_name_3: '',
        song_name_4: '',
        song_name_5: '',
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    navigation.navigate('Library');
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#000'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          width: 410,
          height: 410,
          margin: 'auto',
        }}>
        <Image
          style={{width: 370, height: 370, margin: 'auto'}}
          source={{
            uri: avatar,
          }}
        />
      </View>
      <Text
        variant="displaySmall"
        style={{
          color: '#fff',
          marginLeft: 10,
          fontWeight: 'bold',
          marginLeft: 20,
        }}>
        {name}
      </Text>

      <View style={{flex: 1, flexDirection: 'row', marginLeft: 10}}>
        <Text
          variant="titleMedium"
          style={{color: '#fff', marginLeft: 10, fontWeight: 'bold'}}>
          Style:
        </Text>
        <Text variant="titleMedium" style={{color: '#fff', marginLeft: 10}}>
          {style}
        </Text>
      </View>
      <Text
        variant="titleLarge"
        style={{
          color: '#fff',
          marginLeft: 20,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
          marginTop: 20,
        }}>
        The most famous songs
      </Text>
      <TouchableOpacity
        style={{
          width: 370,
          height: 73,
          backgroundColor: '#000',
          margin: 'auto',
          marginTop: 10,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            style={{width: 70, height: 70}}
            source={{
              uri: song1,
            }}></Image>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                marginTop: 10,
              }}>
              {song1_name}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                marginLeft: 10,
              }}>
              {name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 370,
          height: 73,
          backgroundColor: '#000',
          margin: 'auto',
          marginTop: 10,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            style={{width: 70, height: 70}}
            source={{
              uri: song2,
            }}></Image>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                marginTop: 10,
              }}>
              {song2_name}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                marginLeft: 10,
              }}>
              {name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 370,
          height: 73,
          backgroundColor: '#000',
          margin: 'auto',
          marginTop: 10,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            style={{width: 70, height: 70}}
            source={{
              uri: song3,
            }}></Image>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                marginTop: 10,
              }}>
              {song3_name}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                marginLeft: 10,
              }}>
              {name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={HandleAdd}
        style={{
          width: 200,
          height: 50,
          backgroundColor: '#808080',
          borderRadius: 30,
          margin: 'auto',
          marginTop: 20,
        }}>
        <Text
          style={{
            color: '#fff',
            margin: 'auto',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Add to your playlist
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ArtistDetail;
