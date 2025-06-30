import {
  View,
  StyleSheet,
  Alert,
  Text,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonsContainer from "../components/ui/ButtonsContainer";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

type gameScreenProps = {
  userNumber: number;
  onGameOver: () => void;
  Attempts: {
    attempts: Array<number>;
    setAttempts: (newAttempts: Array<number>) => void;
  };
};

let lowestGuess = 1;
let highestGuess = 100;
let roundsCounter = 0;

function generateRandomBetween(min: number, max: number, exlude: number) {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumber === exlude) {
    return generateRandomBetween(min, max, exlude);
  } else {
    return rndNumber;
  }
}

function GameScreen({ userNumber, onGameOver, Attempts }: gameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [rounds, setRounds] = useState<Array<number>>();

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      Attempts.setAttempts(Attempts.attempts.concat([roundsCounter]));
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    lowestGuess = 1;
    highestGuess = 100;
    roundsCounter = 0;
  }, []);

  function nextGuessHandler(higher: boolean) {
    if (!higher) {
      if (userNumber > currentGuess) {
        Alert.alert("Dont lie", "¿why are you lying?");
        return;
      } else {
        highestGuess = currentGuess;
        setCurrentGuess(
          generateRandomBetween(lowestGuess, highestGuess, currentGuess)
        );
      }
    } else {
      if (userNumber < currentGuess) {
        Alert.alert("Dont lie", "¿why are you lying?");
        return;
      } else {
        lowestGuess = currentGuess;
        setCurrentGuess(
          generateRandomBetween(lowestGuess, highestGuess, currentGuess)
        );
      }
    }

    if (!rounds) setRounds([currentGuess]);
    else setRounds([...rounds, currentGuess]);

    roundsCounter++;
  }

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower</InstructionText>
        <ButtonsContainer
          firstButton={
            <PrimaryButton onPress={() => nextGuessHandler(true)}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          }
          secondButton={
            <PrimaryButton onPress={() => nextGuessHandler(false)}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          }
        ></ButtonsContainer>
      </Card>
      <View style={styles.listContainer}>
        <Title>Attempts:</Title>

        <FlatList
          data={rounds}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={itemData.index}
              guess={itemData.item}
            ></GuessLogItem>
          )}
        ></FlatList>
      </View>
      ;
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <ButtonsContainer
            firstButton={
              <PrimaryButton onPress={() => nextGuessHandler(true)}>
                <Ionicons name="add" size={24} color="white" />
              </PrimaryButton>
            }
            secondButton={
              <PrimaryButton onPress={() => nextGuessHandler(false)}>
                <Ionicons name="remove" size={24} color="white" />
              </PrimaryButton>
            }
          ></ButtonsContainer>
          <NumberContainer>{currentGuess}</NumberContainer>
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title>Opponents guess</Title>
      {content}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonsContainerWide: {
    flexDirection: "row",
    padding: 16,
  },
});
