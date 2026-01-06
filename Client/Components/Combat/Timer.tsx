import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fonts, images } from '../../Theme';

export default function Timer({
  timeLeft,
  setTimeLeft,
}: {
  timeLeft: number;
  setTimeLeft: Dispatch<SetStateAction<number>>;
}) {
  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);
  return (
    <View style={style.container}>
      <Image
        style={images.smallIcon}
        source={require('../../assets/mission/hourglass-white.png')}
      />
      <Text style={[{marginLeft:3},fonts.mediumText]}>{formatTime(timeLeft)}</Text>
    </View>
  );
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
});
