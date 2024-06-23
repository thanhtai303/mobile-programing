import React from 'react';
import {TouchableOpacity, View, ScrollView, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const AddArtistScreen = () => {
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUuEeJklz6Dj8T0CmdesgjIrFdfflCjwjCA&s',
                name: 'Westlife',
                style: 'Ballad',
                song1:
                  'https://avatar-ex-swe.nixcdn.com/song/2018/02/08/b/b/c/8/1518078818653_640.jpg',
                song1_name: 'My Love',
                song2:
                  'https://i1.sndcdn.com/artworks-2TLtE7Fnyka7Bd39-rg4heA-t500x500.jpg',
                song2_name: 'Beautiful In White',
                song3:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuoh1MMuw8NBBHSueMgwmhuWgBp3AcxMYJZvGTWXIY3Ny3fy_WLZwS53ogVz3-Fh75plo&usqp=CAU',
                song3_name: 'Seasons In The Sun',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist1.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Westlife
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://i.scdn.co/image/ab67616d0000b273f1454966dfb8996bf84f0e6b',
                name: 'Justin Bieber',
                style: 'RnB',
                song1:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0i8ZtoxaOCfueDpVuVgQ3inCo8z11jLehBw&s',
                song1_name: 'Love Yourself',
                song2:
                  'https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431',
                song2_name: 'Ghost',
                song3:
                  'https://i.scdn.co/image/ab67616d00001e02f1d02a6cec967f8b6b78f76e',
                song3_name: 'Believe',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist2.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Justin Bieber
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evNZY5NHq-default.jpg',
                name: 'Maroon5',
                style: 'Pop Rock',
                song1:
                  'https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c',
                song1_name: 'Sugar',
                song2:
                  'https://i1.sndcdn.com/artworks-000052230134-ppmdq9-t500x500.jpg',
                song2_name: 'Pay Phone',
                song3:
                  'https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631',
                song3_name: 'Memories',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist3.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Maroon 5
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://i.scdn.co/image/ab6761610000e5ebab47d8dae2b24f5afe7f9d38',
                name: 'Imagine Dragons',
                style: 'Pop Rock',
                song1:
                  'https://i.scdn.co/image/ab67616d0000b2735c31724a77b6907e54330aa2',
                song1_name: 'Bad Liar',
                song2:
                  'https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a',
                song2_name: 'Believer',
                song3:
                  'https://i.scdn.co/image/ab67616d0000b2731551c93dfa33ea4f30ef4eea',
                song3_name: 'Warriors',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist4.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodySmall"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Imagine Dragons
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://i.pinimg.com/736x/ad/8e/4e/ad8e4edee691287f9c2abf164c51c5e9.jpg',
                name: 'Binz',
                style: 'Rap HipHop',
                song1:
                  'https://i.scdn.co/image/ab67616d00001e02b624702a1448ba15dc0739b2',
                song1_name: 'Big City Boy',
                song2:
                  'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f7/50/bd/f750bdcb-a809-71f8-dc1b-031ca290a533/artwork.jpg/1200x1200bb.jpg',
                song2_name: 'Deep Sea',
                song3:
                  'https://avatar-ex-swe.nixcdn.com/song/2017/12/08/8/0/2/3/1512706766880_640.jpg',
                song3_name: 'They Said',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist5.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Binz
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://trixie.com.vn/media/images/article/94610382/vu-p-16067234297342144615946.png',
                name: 'Vũ',
                style: 'Indie pop, Acoustic',
                song1:
                  'https://i.scdn.co/image/ab67616d0000b273bc146f67374ea7e19c5d0c80',
                song1_name: 'Những Lời Hứa Bỏ Quên',
                song2:
                  'https://i.scdn.co/image/ab67616d0000b273e1e2fa3724d8fe0461c59af9',
                song2_name: 'Anh Nhớ Ra',
                song3:
                  'https://avatar-ex-swe.nixcdn.com/song/2020/08/11/6/d/1/5/1597138777696_640.jpg',
                song3_name: 'Mùa Hè Của Em',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist6.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Vu
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcW185n2E4XQGRLbULvyK4s9C7Xnwht4-Ww&s',
                name: 'Ed Sheeran',
                style: 'Pop, Soft rock',
                song1:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-zEzJzxkXEyDre9f3d9ezEk-puA6RGWgFQ&s',
                song1_name: 'Shape Of You',
                song2:
                  'https://m.media-amazon.com/images/M/MV5BMGU5YTRjMTUtZDU4Mi00NjFlLWExYTAtMjVkN2JmOTE1Y2Q2XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg',
                song2_name: 'Perfect',
                song3:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7FDcfvxAVDrVwnKRNcCs9IKz2MnQh7CCNoA&s',
                song3_name: 'Happier',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist7.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Ed Sheeran
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://media.newyorker.com/photos/5b16cfe87018915289e3cb28/master/pass/StFelix-Charlie-Puth.jpg',
                name: 'Charlie Puth',
                style: 'Pop, RnB',
                song1:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qVLXZ511VApVjnOcB75QtyyTyO-D_3mDXA&s',
                song1_name: 'See You Again',
                song2:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRc6HvU2sWLWDjZq9tof76yZQw-_IxNgvpeA&s',
                song2_name: 'Attention',
                song3:
                  'https://i.scdn.co/image/ab67616d0000b273c3fade2af1c66ea4b002ae18',
                song3_name: 'One Call Away',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist8.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Charlie Puth
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://trixie.com.vn/media/images/article/98645721/chillies-1586223837.jpg',
                name: 'Chillies',
                style: 'Indie, Pop Rock',
                song1:
                  'https://avatar-ex-swe.nixcdn.com/song/2019/12/25/6/3/c/6/1577268566289_640.jpg',
                song1_name: 'Mascara',
                song2:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRP7Itd8gc48pup2M51R6qrtjAZI-5Lu8xg&s',
                song2_name: 'Vùng Kí Ức',
                song3:
                  'https://avatar-ex-swe.nixcdn.com/song/2020/11/11/6/5/6/7/1605089288549_640.jpg',
                song3_name: 'Qua Khung Cửa Sổ',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist9.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Chillies
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3SYnXZ-default.jpg',
                name: 'Da LAB',
                style: 'Pop',
                song1:
                  'https://i.scdn.co/image/ab67616d0000b2739e0fca392f2880a676582925',
                song1_name: 'Một Nhà',
                song2:
                  'https://i1.sndcdn.com/artworks-xzpdE62q0XZtygvM-RZWxKg-t500x500.jpg',
                song2_name: 'Chuyện Đôi Ta',
                song3:
                  'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/5/b/9/6/5b96fdda0362a6b85fe54c4ce1d58e0b.jpg',
                song3_name: 'Chạy Khỏi Thế Giới Này',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist10.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Da LAB
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://i.scdn.co/image/ab67616d0000b273b151437d4adc97ce6c828d4a',
                name: 'Coldplay',
                style: 'Alternative Rock, Post-Britpop, Pop',
                song1:
                  'https://i.scdn.co/image/ab67616d0000b273de0cd11d7b31c3bd1fd5983d',
                song1_name: 'Paradise',
                song2:
                  'https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6',
                song2_name: 'Hymn For The Weekend',
                song3:
                  'https://i.scdn.co/image/ab67616d0000b2730102924a57d952089d6a5199',
                song3_name: 'Viva La Vida',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist11.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Coldplay
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://i.scdn.co/image/ab67616d0000b273a3eff72f62782fb589a492f9',
                name: 'The Weekend',
                style: 'Pop, Rnb',
                song1:
                  'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846a78332ad11c4aa7c7650306',
                song1_name: 'Save Your Tears',
                song2:
                  'https://i.scdn.co/image/ab67616d00001e02b0dd6a5cd1dec96c4119c262',
                song2_name: 'The Idol',
                song3:
                  'https://i.scdn.co/image/ab67616d00001e028ad8f5243d6534e03b656c8b',
                song3_name: 'Starboy',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist12.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            The Weekend
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://i.scdn.co/image/ab67616100005174e17c0aa1714a03d62b5ce4e0',
                name: 'Post Malone',
                style: 'HipHop, Pop Rap',
                song1:
                  'https://i.scdn.co/image/ab67616d0000b273ef376d3257503f734de0eefc',
                song1_name: 'Sunflower',
                song2:
                  'https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02',
                song2_name: 'Circles',
                song3:
                  'https://i.scdn.co/image/ab67616d0000b2731bf9165a950a8d49195c50ce',
                song3_name: 'Better Now',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist13.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Post Malone
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd',
                name: 'Bruno Mars',
                style: 'Pop, RnB, Funk',
                song1:
                  'https://i.scdn.co/image/ab67616d0000b273f6b55ca93bd33211227b502b',
                song1_name: 'Talking To The Moon',
                song2:
                  'https://i.scdn.co/image/ab67616d00001e024e1ce5c19325a80d8300cb64',
                song2_name: 'Uptown Funk',
                song3:
                  'https://i.scdn.co/image/ab67616d0000b273c10d8f76976f6013dd36399c',
                song3_name: 'The Lazy Song',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist14.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            Bruno Mars
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
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                avatar:
                  'https://i.scdn.co/image/289c7f686f5b78ceeb224453cf9a15697a678a79',
                name: 'One Direction',
                style: 'Pop, Pop Rock',
                song1:
                  'https://i.scdn.co/image/ab67616d0000b27393cd693c5f7717d17dbc6a20',
                song1_name: 'Night Changes',
                song2:
                  'https://i.scdn.co/image/ab67616d0000b27370e2af26b1812efc5b9e44c6',
                song2_name: 'Drag Me Down',
                song3:
                  'https://i.scdn.co/image/ab67616d0000b2739cc9c826eb3bde09afa244f7',
                song3_name: 'What Makes You Beautiful',
              })
            }
            style={{
              backgroundColor: '#fff',
              width: 100,
              height: 100,
              borderWidth: 3,
              borderColor: '#808080',
              margin: 'auto',
              borderRadius: 90,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                borderRadius: 90,
              }}
              source={require('./img/artist15.png')}
            />
          </TouchableOpacity>
          <Text
            variant="bodyLarge"
            style={{
              color: '#B5B5B5',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
            One Direction
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddArtistScreen;
