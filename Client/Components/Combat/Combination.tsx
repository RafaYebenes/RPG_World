import { Text } from '@react-navigation/elements';
import { Image, StyleSheet, View } from 'react-native';
import { colorPalette, container, fonts, images } from '../../Theme';

//TODO Inner padding, style and data
export function Combination() {
  return (
    <View style={[styles.container, container.roundBorders]}>
      <View style={styles.containerActionElement}>
        <Image
          style={images.bigIcon}
          source={require('../../assets/mission/fire.png')}
        ></Image>
        <Image
          style={images.mediumIcon}
          source={require('../../assets/mission/plus-white.png')}
        ></Image>
        <Image
          style={images.bigIcon}
          source={require('../../assets/mission/thunderbolt.png')}
        ></Image>
      </View>
      <View style={styles.containerInfo}>
        <Text style={fonts.title}>Fulgor Letal</Text>
        <Text style={[fonts.bigText, { textAlign: 'center' }]}>
          Golpe inmediato de alto daño.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colorPalette.secondaryBg,
    borderColor: colorPalette.primaryBorder,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerActionElement: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerInfo: {
    alignItems: 'center',
  },
});
