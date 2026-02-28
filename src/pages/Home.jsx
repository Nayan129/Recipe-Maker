import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  // const [favourites, setFavourites] = useState(() => {
  //   return JSON.parse(localStorage.getItem("fav")) || [];
  // });

  // const isFavourite = favourites.some((fav) => fav.id == id);

  // const favHandler = () => {
  //   if (!isFavourite) {
  //     let updateFav = [...favourites, recipe];
  //     setFavourites(updateFav);
  //     localStorage.setItem("fav", JSON.stringify(updateFav));
  //     toast.success("add to favourite ");
  //   }
  // };
  // const unFavHandler = () => {
  //   if (isFavourite) {
  //     const filterFav = favourites.filter((fav) => fav.id !== id);
  //     setFavourites(filterFav);
  //     localStorage.setItem("fav", JSON.stringify(filterFav));
  //   }
  // };

  async function fetchApi() {
    const response = await axios.get("https://dummyjson.com/recipes");
    console.log(response.data.recipes);
    const data = await response.data.recipes;
    setRecipes(data);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="rounded-lg h-115 overflow-hidden relative">
      {/* Search bar for recipes */}
      <div className="absolute top-0 left-0 w-full py-5 z-10 flex justify-center">
        <div className="search-div w-full flex justify-center">
          <input
            className=" max-w-130 md:min-w-110 lg:min-w-140 py-2 px-5 rounded-3xl outline-none bg-white/5 border border-white/10 active:text-white"
            type="text"
            placeholder="search recipes..."
          />
        </div>
      </div>

      {/* Recipes map here*/}
      <div className="pt-24 h-full overflow-y-auto">

        
        {/* {favourites.find((fav) => fav.id == recipe.id) ? (
          <i
            onClick={unFavHandler}
            className="absolute bottom-[2%] right-[5%] ri-poker-hearts-fill text-2xl"
          ></i>
        ) : (
          <i
            onClick={favHandler}
            className="absolute bottom-[2%] right-[5%] ri-poker-hearts-line text-2xl"
          ></i>
        )} */}


        <div className="recipe-wrapper flex w-full flex-wrap gap-5 py-2 justify-center">
          {recipes?.map((recipe) => {
            return (
              <div
                key={recipe.id}
                className="w-75 bg-[#1a1f2e] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 transition-transform hover:scale-[1.02]"
              >
                {/* Recipes Image */}
                <div className="relative h-48 w-full">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-5">
                  {/* Header & Chef */}
                  <div className="mb-3">
                    <h2 className="text-xl font-bold text-white leading-tight">
                      {recipe.name}
                    </h2>
                    <p className="text-slate-400 text-sm mt-1">{recipe.chef}</p>
                  </div>

                  {/* Stats Grid */}
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

                  {/* Footer Action */}
                  <div className="flex items-center justify-between">
                    <button className="text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors">
                      View Recipe →
                    </button>
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
