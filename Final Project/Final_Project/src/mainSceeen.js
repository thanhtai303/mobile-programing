import React, {useState} from 'react';
import Home from './home';
import Search from './search';
import Library from './addPlaylist';
import {BottomNavigation} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const MainScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'Home',
      title: 'Home',
      focusedIcon: 'home-variant',
      unfocusedIcon: 'home-variant-outline',
      titleColor: '#000',
    },
    {
      key: 'Search',
      title: 'Search',
      focusedIcon: 'card-search',
      unfocusedIcon: 'card-search-outline',
    },
    {
      key: 'Library',
      title: 'Library',
      focusedIcon: 'playlist-music',
      unfocusedIcon: 'playlist-music-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    Search: Search,
    Library: Library,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationOptions
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={true}
        activeColor="#fff"
        inactiveColor="#fff"
        theme={{
          colors: {secondaryContainer: '#000'},
        }}
        barStyle={{backgroundColor: '#000', height: 65}}
      />
    </SafeAreaProvider>
  );
};

export default MainScreen;
