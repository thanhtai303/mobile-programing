import * as React from 'react';
import {ScrollView, TouchableOpacity, View, Image} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <Searchbar
        style={{
          borderColor: '#808080',
          borderWidth: 3,
          width: 350,
          margin: 'auto',
          marginTop: 20,
          borderRadius: 100,
        }}
        iconColor="#000"
        color="#000"
        fontWeight="bold"
        theme={{colors: {primary: '#000'}}}
        placeholder="Search"
        returnKeyType="done"
        onSubmitEditing={() => navigation.navigate('Playlist')}
      />
      <Text
        variant="titleLarge"
        style={{
          color: '#fff',
          fontWeight: 'bold',
          marginTop: 20,
          marginLeft: 20,
        }}>
        Vibes
      </Text>
      <View style={{flex: 1, flexDirection: 'row', padding: 20}}>
        <ScrollView style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 150,
              height: 180,
              backgroundColor: 'white',
              margin: 'auto',
              marginTop: 20,
              backgroundColor: '#000',
              borderColor: '#808080',
              borderWidth: 3,
            }}>
            <Image
              style={{
                width: '100%',
                height: 150,
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/search1.png')}
            />
            <Text
              variant="bodyLarge"
              style={{
                color: '#B5B5B5',
                fontWeight: 'bold',
                margin: 'auto',
              }}>
              Alan Walker
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 150,
              height: 245,
              backgroundColor: 'white',
              margin: 'auto',
              marginTop: 20,
              backgroundColor: '#000',
              borderColor: '#808080',
              borderWidth: 3,
            }}>
            <Image
              style={{
                width: '100%',
                height: 215,
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/search3.png')}
            />
            <Text
              variant="bodyLarge"
              style={{
                color: '#B5B5B5',
                fontWeight: 'bold',
                margin: 'auto',
              }}>
              Son Tung MTP
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 150,
              height: 210,
              backgroundColor: 'white',
              margin: 'auto',
              marginTop: 20,
              backgroundColor: '#000',
              borderColor: '#808080',
              borderWidth: 3,
            }}>
            <Image
              style={{
                width: '100%',
                height: 180,
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/search5.png')}
            />
            <Text
              variant="bodyLarge"
              style={{
                color: '#B5B5B5',
                fontWeight: 'bold',
                margin: 'auto',
              }}>
              Post Malone
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 150,
              height: 240,
              backgroundColor: 'white',
              margin: 'auto',
              marginTop: 20,
              backgroundColor: '#000',
              borderColor: '#808080',
              borderWidth: 3,
            }}>
            <Image
              style={{
                width: '100%',
                height: 210,
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/search7.png')}
            />
            <Text
              variant="bodyLarge"
              style={{
                color: '#B5B5B5',
                fontWeight: 'bold',
                margin: 'auto',
              }}>
              Adam Levine
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 150,
              height: 180,
              backgroundColor: 'white',
              margin: 'auto',
              marginTop: 20,
              backgroundColor: '#000',
              borderColor: '#808080',
              borderWidth: 3,
            }}>
            <Image
              style={{
                width: '100%',
                height: 150,
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/search9.png')}
            />
            <Text
              variant="bodyLarge"
              style={{
                color: '#B5B5B5',
                fontWeight: 'bold',
                margin: 'auto',
              }}>
              Bruno Mars
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <ScrollView style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 150,
              height: 240,
              backgroundColor: '#000',
              margin: 'auto',
              marginTop: 20,
              backgroundColor: '#000',
              borderColor: '#808080',
              borderWidth: 3,
            }}>
            <Image
              style={{
                width: '100%',
                height: 210,
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/search2.png')}
            />
            <Text
              variant="bodyLarge"
              style={{
                color: '#B5B5B5',
                fontWeight: 'bold',
                margin: 'auto',
              }}>
              Eminem
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 150,
              height: 250,
              backgroundColor: 'white',
              margin: 'auto',
              marginTop: 20,
              backgroundColor: '#000',
              borderColor: '#808080',
              borderWidth: 3,
            }}>
            <Image
              style={{
                width: '100%',
                height: 220,
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/search4.png')}
            />
            <Text
              variant="bodyLarge"
              style={{
                color: '#B5B5B5',
                fontWeight: 'bold',
                margin: 'auto',
              }}>
              Charlie Puth
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 150,
              height: 180,
              backgroundColor: 'white',
              margin: 'auto',
              marginTop: 20,
              backgroundColor: '#000',
              borderColor: '#808080',
              borderWidth: 3,
            }}>
            <Image
              style={{
                width: '100%',
                height: 150,
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/search6.png')}
            />
            <Text
              variant="bodyLarge"
              style={{
                color: '#B5B5B5',
                fontWeight: 'bold',
                margin: 'auto',
              }}>
              The Weekend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 150,
              height: 180,
              backgroundColor: 'white',
              margin: 'auto',
              marginTop: 20,
              backgroundColor: '#000',
              borderColor: '#808080',
              borderWidth: 3,
            }}>
            <Image
              style={{
                width: '100%',
                height: 150,
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/search8.png')}
            />
            <Text
              variant="bodyLarge"
              style={{
                color: '#B5B5B5',
                fontWeight: 'bold',
                margin: 'auto',
              }}>
              Vu
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Playlist')}
            style={{
              width: 150,
              height: 240,
              backgroundColor: 'white',
              margin: 'auto',
              marginTop: 20,
              backgroundColor: '#000',
              borderColor: '#808080',
              borderWidth: 3,
            }}>
            <Image
              style={{
                width: '100%',
                height: 210,
                margin: 'auto',
              }}
              resizeMode="stretch"
              source={require('./img/search10.png')}
            />
            <Text
              variant="bodyLarge"
              style={{
                color: '#B5B5B5',
                fontWeight: 'bold',
                margin: 'auto',
              }}>
              Ed Sheeran
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchScreen;
