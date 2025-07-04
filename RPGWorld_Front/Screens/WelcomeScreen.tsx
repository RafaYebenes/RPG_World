import { View, Text } from 'react-native';
import { WelcomeStyle } from '../Styles/WelcomeStyle';

export default function WelcomeScreen() {
  return (
    <View style={WelcomeStyle.container}>
      <Text>Welcome</Text>
    </View>
  );
}
