import React from 'react';
import {View, TouchableOpacity, Image, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useState, useCallback} from 'react';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';

const LibraryScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);

  const GetData = async () => {
    try {
      const path = 'http://10.0.2.2:8080/data/singer/get';
      const response = await axios.get(path);
      const singer = response.data;
      setData(singer.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      GetData();
    }, []),
  );

  const Item = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Playlist')}
        style={{
          backgroundColor: '#000',
          width: 350,
          height: 55,
          flexDirection: 'row',
          marginTop: 20,
          margin: 'auto',
        }}>
        <View
          style={{
            width: 55,
            height: 55,
          }}>
          <Image
            style={{width: 55, height: 55, margin: 'auto'}}
            source={{uri: data.avatar}}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            {data.singer_name}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 15,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            Playlist of {data.singer_name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PlaylistDetail', {
              singer: data.singer_name,
              style: data.type_name,
              avatar: data.avatar,
            })
          }
          style={{
            backgroundColor: '#000',
            width: 30,
            height: 30,
            flexDirection: 'row',
            margin: 'auto',
            marginRight: 0,
          }}>
          <Image
            style={{width: 30, height: 30, margin: 'auto'}}
            source={require('./img/more.png')}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  const renderHeader = () => (
    <View style={{margin: 'auto'}}>
      <Text
        variant="titleLarge"
        style={{
          color: '#fff',
          fontWeight: 'bold',
          margin: 'auto',
          marginTop: 20,
        }}>
        Library
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Playlist')}
        style={{
          backgroundColor: '#000',
          width: 350,
          height: 55,
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <View
          style={{
            width: 55,
            height: 55,
            borderColor: '#808080',
            borderWidth: 3,
          }}>
          <Image
            style={{width: 40, height: 40, margin: 'auto'}}
            source={require('./img/favorite.png')}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            Favorite playlist
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 15,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            Let's enjoy your favorite songs
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderFooter = () => (
    <View style={{margin: 'auto'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Albums')}
        style={{
          backgroundColor: '#000',
          width: 350,
          height: 55,
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <View
          style={{
            width: 55,
            height: 55,
            borderColor: '#808080',
            borderWidth: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 40, height: 40}}
            source={require('./img/add.png')}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
              margin: 'auto',
            }}>
            Explore more playlist
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Artists')}
        style={{
          backgroundColor: '#000',
          width: 350,
          height: 55,
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <View
          style={{
            width: 55,
            height: 55,
            borderColor: '#808080',
            borderWidth: 3,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 90,
          }}>
          <Image
            style={{width: 40, height: 40}}
            source={require('./img/add.png')}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
              margin: 'auto',
            }}>
            Explore more Singer/Artist
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <FlatList
      data={data}
      style={{flex: 1, backgroundColor: '#000', margin: 'auto', width: '100%'}}
      renderItem={({item}) => <Item data={item} />}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
    />
  );
};
export default LibraryScreen;
