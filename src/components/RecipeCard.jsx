import { Link } from "react-router-dom";
import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";

const RecipeCard = ({ recipe }) => {
  const { favourites, favHandler, unFavHandler } = useContext(recipeContext);

  const { id, img, title, desc, chef, ingr, inst } = recipe;

  const isFav = favourites.some((fav) => fav.id === recipe.id);

  return (
    <div className="relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition p-2">
      {isFav ? (
        <i
          onClick={() => unFavHandler(recipe.id)}
          className="absolute bottom-[2%] right-[5%] ri-poker-hearts-fill text-2xl z-10 cursor-pointer"
        ></i>
      ) : (
        <i
          onClick={() => favHandler(recipe)}
          className="absolute bottom-[2%] right-[5%] ri-poker-hearts-line text-2xl z-10 cursor-pointer"
        ></i>
      )}

      <div>
        <img
          className="w-full h-56 object-cover group-hover:scale-105 p-2 rounded-2xl transition duration-300"
          src={img}
          alt="recipe image"
        />

        <h1 className="text-xl font-semibold mt-4 px-4 text-white">{title}</h1>

        <small className="px-4 text-sm text-gray-400">{chef || ""}</small>

        <p className="px-2 pb-3">
          {(desc || "")?.slice(0, 100)}...{" "}
          <Link
            className="px-4 pb-5 text-blue-500 text-md"
            to={`/recipes/details/${id}`}
          >
            more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
