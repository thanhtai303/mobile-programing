import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Image, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const PlaylistScreen = () => {
  const [data, setData] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    async function GetData() {
      try {
        const path = 'http://10.0.2.2:8080/data/song/get';
        const response = await axios.get(path);
        const songs = response.data;
        setData(songs.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    GetData();
  }, []);

  if (!data) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <Text style={{color: '#fff'}}>Loading...</Text>
      </View>
    );
  }
  const Item = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Play', {
            song: data.song,
            singer: data.singer_name,
            avatar: data.avatar,
            name: data.song_name,
          })
        }
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
            source={{uri: data.avatar}}></Image>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                marginTop: 10,
              }}>
              {data.song_name}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                marginLeft: 10,
              }}>
              {data.singer_name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <Text
        variant="titleLarge"
        style={{
          color: '#fff',
          fontWeight: 'bold',
          margin: 'auto',
          marginTop: 20,
          marginBottom: 20,
        }}>
        Playlist
      </Text>

      <FlatList
        data={data}
        style={{flex: 1, backgroundColor: '#000'}}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default PlaylistScreen;
