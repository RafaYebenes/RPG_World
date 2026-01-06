import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

type gameOverProps = {
  onGameRestart: () => void;
  attempts: Array<number>;
  userNum: number;
};

function GameOver({ onGameRestart, attempts, userNum }: gameOverProps) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.rootContainer}>
        <Title>Game is over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
          ></Image>
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.Highlight}>
              {attempts[attempts.length - 1]}
            </Text>{" "}
            rounds to guess the number{" "}
            <Text style={styles.Highlight}>{userNum}</Text>
          </Text>
          <PrimaryButton onPress={onGameRestart}>Start new game</PrimaryButton>
        </View>

        <Title>Attempts:</Title>
        <View style={styles.listContainer}>
          <FlatList
            data={attempts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(itemData) => (
              <Text>
                {itemData.index}:{itemData.item}
              </Text>
            )}
          ></FlatList>
        </View>
      </View>
    </ScrollView>
  );
}

export default GameOver;

/* const deviceWidth = Dimensions.get("window").width;
 */
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    /*   width: deviceWidth < 390 ? 150 : 300,
    height: deviceWidth < 390 ? 150 : 300,
    borderRadius: deviceWidth < 390 ? 75 : 150, */
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
  },
  Highlight: { color: Colors.primary600 },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
