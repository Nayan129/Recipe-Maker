import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");
  console.log(searchRecipe);
  const { favourites, favHandler, unFavHandler } = useContext(recipeContext);

  async function fetchApi() {
    const response = await axios.get("https://dummyjson.com/recipes");

    const formatted = response.data.recipes.map((r) => ({
      id: r.id,
      img: r.image,
      title: r.name,
      desc: r.instructions?.join(" "),
      chef: r.cuisine || "",
      prepTimeMinutes: r.prepTimeMinutes,
      cookTimeMinutes: r.cookTimeMinutes,
      caloriesPerServing: r.caloriesPerServing,
    }));

    setRecipes(formatted);
  }

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) =>
      recipe.title?.toLowerCase().includes(searchRecipe.toLowerCase()),
    );
  }, [recipes, searchRecipe]);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="rounded-lg h-115 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full py-5 z-10 flex justify-center">
        <div className="search-div w-full flex justify-center">
          <input
            className="max-w-130 md:min-w-110 lg:min-w-140 py-2 px-5 rounded-3xl outline-none bg-white/5 border border-white/10 active:text-white"
            type="text"
            value={searchRecipe}
            onInput={(e) => setSearchRecipe(e.target.value)}
            placeholder="search recipes..."
          />
        </div>
      </div>

      <div className="pt-24 h-full overflow-y-auto">
        <div className="recipe-wrapper flex w-full flex-wrap gap-5 py-2 justify-center">
          {filteredRecipes.length === 0 && filteredRecipes !== "" ? (
            <h2 className="text-white text-4xl mt-10">Recipe Not Found 🍽️</h2>
          ) : (
            filteredRecipes.map((recipe) => {
              const isFav = favourites.some((fav) => fav.id === recipe.id);

              return (
                <div
                  key={recipe.id}
                  className="relative w-75 bg-[#1a1f2e] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 transition-transform hover:scale-[1.02]"
                >
                  {isFav ? (
                    <i
                      onClick={() => unFavHandler(recipe.id)}
                      className="absolute bottom-4 right-4 ri-poker-hearts-fill text-2xl cursor-pointer z-10"
                    ></i>
                  ) : (
                    <i
                      onClick={() => favHandler(recipe)}
                      className="absolute bottom-4 right-4 ri-poker-hearts-line text-2xl cursor-pointer z-10"
                    ></i>
                  )}

                  <div className="relative h-48 w-full">
                    <img
                      src={recipe.img}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <div className="mb-3">
                      <h2 className="text-xl font-bold text-white leading-tight">
                        {recipe.title}
                      </h2>
                      <p className="text-slate-400 text-sm mt-1">
                        {recipe.chef}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-700/50 mb-4">
                      <div className="text-center">
                        <p className="text-[10px] uppercase tracking-wider text-slate-500">
                          Prep
                        </p>
                        <p className="text-sm font-semibold text-blue-400">
                          {recipe.prepTimeMinutes}m
                        </p>
                      </div>

                      <div className="text-center border-x border-slate-700/50">
                        <p className="text-[10px] uppercase tracking-wider text-slate-500">
                          Cook
                        </p>
                        <p className="text-sm font-semibold text-green-400">
                          {recipe.cookTimeMinutes}m
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="text-[10px] uppercase tracking-wider text-slate-500">
                          Cals
                        </p>
                        <p className="text-sm font-semibold text-orange-400">
                          {recipe.caloriesPerServing}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        className="px-4 pb-5 text-blue-500 text-md"
                        to={`/recipes/details/${recipe.id}`}
                      >
                        more
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
