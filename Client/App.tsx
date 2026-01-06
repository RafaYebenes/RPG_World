import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WelcomeScreen } from './Screens/WelcomeScreen';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { images } from './Theme';
import { HomeScreen } from './Screens/HomeScreen';
import { CharacterScreen } from './Screens/CharacterScreen';
import { MissionScreen } from './Screens/MissionScreen';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon: () => {
          return (
            <Image
              style={images.smallIcon}
              source={require('./assets/nav/home.png')}
            ></Image>
          );
        },
      },
    },
    Character: {
      screen: CharacterScreen,
      options: {
        tabBarIcon: () => {
          return (
            <Image
              style={images.smallIcon}
              source={require('./assets/nav/character.png')}
            ></Image>
          );
        },
      },
    },
    Mission: {
      screen: MissionScreen,
      options: {
        tabBarIcon: () => {
          return (
            <Image
              style={images.smallIcon}
              source={require('./assets/nav/mission.png')}
            ></Image>
          );
        },
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Login: WelcomeScreen,
    Game: HomeTabs,
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
