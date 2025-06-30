import { Pressable, View, StyleSheet, Text } from "react-native";
import Category from "../models/category";
import { categoryStyles } from "../styles/CategoryStyle";

type categorycardProps = {
  category: Category;
  onPress: () => void;
};

export default function CategoryCard({
  category,
  onPress,
}: categorycardProps) {
  return (
    <View style={categoryStyles.buttonOuterContainer}>
      <Pressable
        style={[categoryStyles.container, { backgroundColor: category.color }]}
        onPress={onPress}
      >
        <Text style={categoryStyles.buttonText}>{category.title}</Text>
      </Pressable>
    </View>
  );
}
