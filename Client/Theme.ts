import { StyleSheet } from 'react-native';

export const colorPalette = {
  primaryBg: '#222222ff',
  secondaryBg: '#121212',
  fontColor: '#DEDEDE',
  primaryRed: '#B02020',
  secondaryRed: '#4D0B0B',
  primaryBlue: '#184f96ff',
  primaryBorder: '#664F17',
  secondaryBorder: '#4e4e4eff',
};

export const fonts = StyleSheet.create({
  title: {
    fontSize: 50,
    color: colorPalette.fontColor,
  },
  bigText: {
    fontSize: 30,
    color: colorPalette.fontColor,
  },
  mediumText:{
    fontSize: 20,
    color: colorPalette.fontColor,
  }
});

export const images = StyleSheet.create({
  bigIcon: {
    width: 80,
    height: 80,
  },
  mediumIcon: {
    width: 40,
    height: 40,
  },
  smallIcon: {
    width: 30,
    height: 30,
  },
});

export const container = StyleSheet.create({
  roundBorders: {
    borderWidth: 5,
    borderRadius: 15,
  },

});

//TODO se puede utilizar el tipo de elemento/accion para definir su color
export const action= (color : string) => StyleSheet.create({
    actionButton: {
      backgroundColor: color,
      borderRadius:100,
      padding:20
    }
})
