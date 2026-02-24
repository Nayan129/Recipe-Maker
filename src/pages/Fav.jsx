import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const favourite = JSON.parse(localStorage.getItem("fav")) || [];

  const renderFavourite = favourite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
      {favourite.length > 0
        ? renderFavourite
        : "No Favourite recipes 🍽️ | Add recipes to Favourite"}
    </div>
  );
};

export default Fav;
