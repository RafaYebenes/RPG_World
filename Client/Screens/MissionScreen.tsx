import { SafeAreaView } from 'react-native-safe-area-context';
import Timer from '../Components/Combat/Timer';
import { Health } from '../Components/Combat/Health';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Combination } from '../Components/Combat/Combination';
import { Energy } from '../Components/Combat/Energy';
import { Actions } from '../Components/Combat/Actions';
import { colorPalette } from '../Theme';

export function MissionScreen() {
  const [timeLeft, setTimeLeft] = useState(90); // 90 seconds = 1:30
  const [health, setHealth] = useState(60);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
        <Health health={health} />
      </View>
      <View style={styles.containerCombination}>
        <Combination />
      </View>
      <View style={styles.containerEnergy}>
        <Energy energy={60}></Energy>
      </View>
      <View style={styles.containerActions}>
        <Actions />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.primaryBg,
    alignItems: 'center',

  },
  containerHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
  },
  containerCombination: {
    flex: 4,
    width: '85%',
  },
  containerEnergy: {
    flex: 1,
    alignItems: 'center',
    width: '85%',
  },
  containerActions: {
    flex: 4,
  },
});
