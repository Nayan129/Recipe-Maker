import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RecipeCard = ({ recipe }) => {
  const { id, img, title, desc, chef, ingr, inst } = recipe;

  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem("fav")) || [];
  });

  const isFavourite = favourites.some((fav) => fav.id == id);

  const favHandler = () => {
    if (!isFavourite) {
      let updateFav = [...favourites, recipe];
      setFavourites(updateFav);
      localStorage.setItem("fav", JSON.stringify(updateFav));
      toast.success("add to favourite ");
    }
  };
  const unFavHandler = () => {
    if (isFavourite) {
      const filterFav = favourites.filter((fav) => fav.id !== id);
      setFavourites(filterFav);
      localStorage.setItem("fav", JSON.stringify(filterFav));
    }
  };

  return (
    <div className="relative group bg-white/5  border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition p-2">
      {favourites.find((fav) => fav.id == recipe.id) ? (
        <i
          onClick={unFavHandler}
          className="absolute bottom-[2%] right-[5%] ri-poker-hearts-fill text-2xl"
        ></i>
      ) : (
        <i
          onClick={favHandler}
          className="absolute bottom-[2%] right-[5%] ri-poker-hearts-line text-2xl"
        ></i>
      )}
      <Link to={`/recipes/details/${id}`}>
        <img
          className="w-full h-56 object-cover  group-hover:scale-105 p-2 rounded-2xl transition duration-300"
          src={img}
          alt="recipe image"
        />
        <h1 className="text-xl font-semibold mt-4 px-4 text-white">{title}</h1>
        <small className="px-4 text-sm text-gray-400">{chef}</small>
        <p className="px-2 pb-3">
          {desc.slice(0, 100)}...{" "}
          <small className="px-4 pb-5 text-gray-300 text-sm">more</small>
        </p>
      </Link>
    </div>
  );
};

export default RecipeCard;
