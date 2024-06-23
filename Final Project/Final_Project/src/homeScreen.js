import React from 'react';
import {View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#000', flex: 1}}>
      <View>
        <Image
          style={{
            width: '90%',
            height: 220,
            borderRadius: 15,
            margin: 'auto',
            marginTop: 20,
          }}
          resizeMode="stretch"
          source={require('./img/logo.jpg')}
        />
      </View>
      <Text
        variant="titleLarge"
        style={{
          color: '#ffff',
          fontWeight: 'bold',
          marginTop: 20,
          marginLeft: 20,
        }}>
        Singer of the year
      </Text>
      <ScrollView
        horizontal={true}
        style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/sontungmtp.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Sơn Tùng MTP
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/soobinhoangson.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Soobin Hoàng Sơn
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/vu.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Vũ
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/alanwalker.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Alan Walker
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/mck.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            MCK
          </Text>
        </View>
      </ScrollView>

      <Text
        variant="titleLarge"
        style={{
          color: '#ffff',
          fontWeight: 'bold',
          marginTop: 20,
          marginLeft: 20,
        }}>
        Album of the year
      </Text>
      <ScrollView
        horizontal={true}
        style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/album1.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Sky Tour
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/album2.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            The Playah
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/album3.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Một Vạn Năm
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/album4.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Different World
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/album5.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            99%
          </Text>
        </View>
      </ScrollView>

      <Text
        variant="titleLarge"
        style={{
          color: '#ffff',
          fontWeight: 'bold',
          marginTop: 20,
          marginLeft: 20,
        }}>
        Chill with your style
      </Text>
      <ScrollView
        horizontal={true}
        style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/style1.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            RnB
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/style2.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Ballad
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/style3.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Indie
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/style4.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            EDM
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/style5.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Rap & HipHop
          </Text>
        </View>
      </ScrollView>

      <Text
        variant="titleLarge"
        style={{
          color: '#ffff',
          fontWeight: 'bold',
          marginTop: 20,
          marginLeft: 20,
        }}>
        Trending playlist
      </Text>
      <ScrollView
        horizontal={true}
        style={{flexDirection: 'row', flex: 1, padding: 10}}>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/song1.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Có Chắc Yêu Là Đây
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/song2.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Phía Sau 1 Cô Gái
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/song3.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Bước Qua Nhau
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/song4.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Alone
          </Text>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'white',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/song5.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              margin: 'auto',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Buồn Hay Vui
          </Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};
export default HomeScreen;
