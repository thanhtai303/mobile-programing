import React from 'react';
import {Text} from 'react-native-paper';
import {View, TouchableOpacity, Image, FlatList} from 'react-native';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';

const PlaylistDetailScreen = () => {
  const [data, setData] = useState(null);
  const navigation = useNavigation();
  const routes = useRoute();
  const {singer, style, avatar} = routes.params;
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

  const Item = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Play', {
            song: data.song,
            singer: data.singer,
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

  const renderHeader = () => (
    <View style={{flex: 1}}>
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
        {singer}
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
        Playlist
      </Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      style={{flex: 1, backgroundColor: '#000'}}
      renderItem={({item}) => <Item data={item} />}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={renderHeader}
    />
  );
};

export default PlaylistDetailScreen;
