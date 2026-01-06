import { Image, Pressable, StyleSheet, View } from 'react-native';
import { action, colorPalette, fonts, images } from '../../Theme';

//TODO convert images into a reusable UI component
export function Actions() {
  //TODO usar el tipo elemento/color para determinar el color
  return (
    <View style={styles.container}>
      <View style={styles.containerActions}>
        <Pressable style={action(colorPalette.primaryRed).actionButton}>
          <Image
            style={images.bigIcon}
            source={require('../../assets/mission/fire.png')}
          ></Image>
        </Pressable>
        <Pressable style={action(colorPalette.secondaryBorder).actionButton}>
          <Image
            style={images.bigIcon}
            source={require('../../assets/mission/hurricane.png')}
          ></Image>
        </Pressable>
      </View>

      <View style={styles.containerActions}>
        <Pressable style={action(colorPalette.secondaryBg).actionButton}>
          <Image
            style={images.bigIcon}
            source={require('../../assets/mission/moon.png')}
          ></Image>
        </Pressable>
      </View>
      <View style={styles.containerActions}>
        <Pressable style={action(colorPalette.secondaryBorder).actionButton}>
          <Image
            style={images.bigIcon}
            source={require('../../assets/mission/shield.png')}
          ></Image>
        </Pressable>
        <Pressable style={action(colorPalette.secondaryBg).actionButton}>
          <Image
            style={images.bigIcon}
            source={require('../../assets/mission/thunderbolt.png')}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  containerActions: {
    justifyContent: 'space-around',
  },
});
