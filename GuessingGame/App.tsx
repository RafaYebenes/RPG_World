import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import Colors from "./constants/colors";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [attempts, setAttempts] = useState<Array<number>>([]);

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(!gameIsOver);
  }
  function restartGame() {
    gameOverHandler();
    setUserNumber(undefined);
  }
  let screen = (
    <StartGameScreen
      pickedNumberHandler={pickedNumberHandler}
    ></StartGameScreen>
  );

  if (userNumber)
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        Attempts={{ attempts, setAttempts }}
      ></GameScreen>
    );
  if (gameIsOver && userNumber)
    screen = (
      <GameOver
        userNum={userNumber}
        attempts={attempts}
        onGameRestart={restartGame}
      ></GameOver>
    );
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <LinearGradient
        colors={[Colors.primary600, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
