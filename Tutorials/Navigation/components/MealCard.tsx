import { Pressable, View, Image, Text } from "react-native";
import { meal } from "../interfaces/Meal";
import { styles } from "../styles/MealStyle";

export default function MealCard({
  meal,
  onPress,
}: {
  meal: meal;
  onPress: () => void;
}) {
  const [hours, minutes] = [Math.floor(meal.duration / 60), meal.duration % 60];

  return (
    <View style={styles.card}>
      <Pressable onPress={onPress}>
        <Text style={styles.h1}>{meal.title}</Text>

        <Text style={{ textAlign: "center" }}>
          {hours > 0 && <Text>{hours}h</Text>}
          {minutes > 0 && <Text>{minutes}min</Text>}
        </Text>

        <View>
          <Image style={styles.image} source={{ uri: meal.imageUrl }}></Image>
        </View>
      </Pressable>
    </View>
  );
}
