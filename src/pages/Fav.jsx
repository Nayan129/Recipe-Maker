import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const { favourites } = useContext(recipeContext);

  const renderFavourite = favourites.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
      {favourites.length > 0
        ? renderFavourite
        : "No Favourite recipes 🍽️ | Add recipes to Favourite"}
    </div>
  );
};

export default Fav;
