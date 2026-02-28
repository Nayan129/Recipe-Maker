import { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";


export const recipeContext = createContext();

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem("fav")) || [];
  });

  const favHandler = (recipe) => {
    const isFavourite = favourites.some((fav) => fav.id === recipe.id);

    if (!isFavourite) {
      let updateFav = [...favourites, recipe];
      setFavourites(updateFav);
      localStorage.setItem("fav", JSON.stringify(updateFav));
      toast.success("add to favourite ");
    }
  };

  const unFavHandler = (id) => {
    const filterFav = favourites.filter((fav) => fav.id !== id);
    setFavourites(filterFav);
    localStorage.setItem("fav", JSON.stringify(filterFav));
  };

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  return (
    <recipeContext.Provider
      value={{ data, setData, favourites, favHandler, unFavHandler }}
    >
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
