import { createContext, ReactElement, useState } from "react";

type FavoritesContextType = {
  ids: Array<string>;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorit: (id: string) => boolean;
};
export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
  isFavorit: (id: string) => {
    return false;
  },
});

export default function FavoritesContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteIds((current) => [...current, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteIds((current) => current.filter((favId) => favId !== id));
  }

  function isFavorit(id: string) {
    return favoriteIds.some((favorit) => favorit === id);
  }

  const value: FavoritesContextType = {
    ids: favoriteIds,
    addFavorite,
    removeFavorite,
    isFavorit,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
