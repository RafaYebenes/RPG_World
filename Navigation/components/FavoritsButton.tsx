import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useState } from "react";
import { FavoritesContext } from "../context/favorites-context";

type FavoritsButtonProps = {
  mealId: string | undefined;
};
export default function FavoritsButton({ mealId }: FavoritsButtonProps) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  function favoritHandler() {
    if (mealId) {
      if (favoriteMealsCtx.isFavorit(mealId))
        favoriteMealsCtx.removeFavorite(mealId);
      else favoriteMealsCtx.addFavorite(mealId);
    }
  }

  if (mealId) {
    return (
      <Pressable onPress={favoritHandler}>
        <Ionicons
          name={favoriteMealsCtx.isFavorit(mealId) ? "star" : "star-outline"}
          color={"light-orange"}
          size={24}
        ></Ionicons>
      </Pressable>
    );
  }
}
