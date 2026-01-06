import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import { colorPalette, container, fonts } from '../../Theme';

/*TODO may be better to create a general UI component 
 and reuse it with energy, health and other attirbutes
*/
export function Energy({ energy }: { energy: number }) {
  const parsedStyle = styles(energy);
  return (
    <View style={parsedStyle.container}>
      <Text style={fonts.bigText}>Energy</Text>
      <View style={[parsedStyle.containerEnergy, container.roundBorders]}>
        <View style={parsedStyle.containerEnergyFill}></View>
      </View>
    </View>
  );
}

const styles = (health: number) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      width: '100%',
    },
    containerEnergy: {
      width: '100%',
      height: 30,
      backgroundColor: colorPalette.secondaryBg,
      borderColor: colorPalette.secondaryBorder,
    },
    containerEnergyFill: {
      width: `${health}%`,
      height: '100%',
      backgroundColor: colorPalette.primaryBlue,
      borderRadius:15
    },
  });
