import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipeContext);

  const renderRecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
      {data.length > 0 ? renderRecipes : "No recipes found 🍽️"}
    </div>
  );
};

export default Recipes;
