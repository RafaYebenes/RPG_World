import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import MainNavigator from './Navigators/MainNavigator';
import AuthContextProvider from './Context/AuthContext';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthContextProvider>
        <MainNavigator />
      </AuthContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
