import React from 'react';
import {TouchableOpacity, View, ScrollView, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const AddPlaylistScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#000'}}>
      <View style={{flex: 1, backgroundColor: '#000', flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist1.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Sky Tour
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist2.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Walker World
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist3.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            BlackJack
          </Text>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: '#000', flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist4.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Behance
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist5.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Devide
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist6.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Origins
          </Text>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: '#000', flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist7.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Mercucy
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist8.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Roots
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist9.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Purpose
          </Text>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: '#000', flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist10.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            99%
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist11.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Deep Sea
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist12.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Equals
          </Text>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: '#000', flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist13.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Four
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist14.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Stoney
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            width: 100,
            height: 120,
            marginTop: 20,
            margin: 'auto',
            backgroundColor: '#000',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
              }}
              source={require('./img/playlist15.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Fly Away
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddPlaylistScreen;
