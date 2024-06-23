import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';
import {useRef} from 'react';
import {useRoute} from '@react-navigation/native';

const AudioPlayerScreen = () => {
  const [id, setID] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  function pad(n, width, z = 0) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${pad(mins, 2)}:${pad(secs, 2)}`;
  };
  const HandlePlayButton = () => {
    setIsPlaying(!isPlaying);
  };
  const skipForward = () => {
    const newTime = Math.min(currentTime + 10, duration);
    setCurrentTime(newTime);
    videoRef.current.seek(newTime);
  };

  const skipBackward = () => {
    const newTime = Math.max(currentTime - 10, 0);
    setCurrentTime(newTime);
    videoRef.current.seek(newTime);
  };
  const routes = useRoute();
  const {song, singer, avatar, name} = routes.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          margin: 'auto',
          color: '#fff',
          marginTop: 10,
          marginBottom: 10,
        }}>
        PLAYING FROM PLAYLIST
      </Text>
      <View style={{backgroundColor: '#171717', width: 370, height: 370}}>
        <Image
          style={{width: 330, height: 330, margin: 'auto'}}
          source={{uri: avatar}}></Image>
      </View>
      <View style={{flex: 1, marginTop: 10}}>
        <Text
          style={{
            color: '#fff',
            margin: 'auto',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          {name}
        </Text>
        <Text
          style={{
            color: '#fff',
            margin: 'auto',
            marginTop: 5,
            color: '#B5B5B5',
          }}>
          {singer}
        </Text>
      </View>
      <Slider
        style={{width: 350, height: 40, marginTop: 10}}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#fff"
        thumbTintColor="#808080"
        value={currentTime}
        onSlidingComplete={value => {
          setCurrentTime(value);
          videoRef.current.seek(value);
        }}
      />
      <View style={{flex: 1, flexDirection: 'row', width: 350, height: 50}}>
        <Text style={{color: '#fff', marginLeft: 15}}>
          {formatTime(currentTime)}
        </Text>
        <Text style={{color: '#fff', marginLeft: 250}}>
          {formatTime(duration)}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: 350,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <TouchableOpacity
          onPress={skipBackward}
          style={{
            backgroundColor: '#000',
            width: 50,
            height: 50,
            borderRadius: 90,
          }}>
          <Image
            style={{width: 45, height: 45, margin: 'auto'}}
            source={require('./img/last10s.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={HandlePlayButton}
          style={{
            backgroundColor: '#000',
            width: 70,
            height: 70,
            borderRadius: 90,
            borderWidth: 2,
            borderColor: '#fff',
            marginLeft: 60,
            marginRight: 60,
          }}>
          <Image
            style={{width: 45, height: 45, margin: 'auto'}}
            source={
              isPlaying ? require('./img/pause.png') : require('./img/play.png')
            }></Image>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={skipForward}
          style={{
            backgroundColor: '#000',
            width: 50,
            height: 50,
            borderRadius: 90,
          }}>
          <Image
            style={{width: 45, height: 45, margin: 'auto'}}
            source={require('./img/next10s.png')}></Image>
        </TouchableOpacity>
      </View>
      <Video
        ref={videoRef}
        onLoad={data => setDuration(data.duration)}
        onProgress={data => setCurrentTime(data.currentTime)}
        paused={!isPlaying}
        source={{
          uri: song,
        }}></Video>
    </SafeAreaView>
  );
};

export default AudioPlayerScreen;
