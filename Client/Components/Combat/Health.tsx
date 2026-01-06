import { Dispatch, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';
import { colorPalette } from '../../Theme';

/*TODO may be better to create a general UI component 
 and reuse it with energy, health and other attirbutes
*/ 
export function Health({ health }: { health: number }) {
  const parsedStyle = styles(health);

  return (
    <View style={parsedStyle.container}>
      <View style={parsedStyle.containerHealth}>
        <View style={parsedStyle.containerHealthFill}></View>
      </View>
    </View>
  );
}

const styles = (health: number) =>
  StyleSheet.create({
    container: {
      width: '50%',
    },
    containerHealth: {
      width: '100%',
      height: 30,
      backgroundColor: colorPalette.secondaryBg,
      borderColor:colorPalette.secondaryRed,
      borderWidth:5,
      borderRadius:15,
    },
    containerHealthFill: {
      width: `${health}%`,
      height: '100%',
      backgroundColor: colorPalette.primaryRed,
      borderRadius:15,
     
    },
  });
