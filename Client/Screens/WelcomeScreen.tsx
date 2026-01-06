import { Button } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.containerBtn}>
        <Button screen="Game" params={{}}>
          Login
        </Button>
        <Button screen="Game" params={{}}>
          Signup
        </Button>
     
    </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
});
