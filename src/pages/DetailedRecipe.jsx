import { useContext, useEffect, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const DetailedRecipe = () => {
  const { data, setData } = useContext(recipeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [isLocalRecipe, setIsLocalRecipe] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const localRecipe = data.find((r) => r.id == id);

    if (localRecipe) {
      setRecipe(localRecipe);
      setIsLocalRecipe(true);
      reset(localRecipe);
    } else {
      axios
        .get(`https://dummyjson.com/recipes/${id}`)
        .then((res) => {
          const r = res.data;

          const formatted = {
            id: r.id,
            img: r.image,
            title: r.name,
            chef: r.cuisine,
            desc: r.instructions?.join(" "),
            ingr: r.ingredients?.join(", "),
            inst: r.instructions?.join(" "),
            categories: r.mealType?.[0] || "",
          };

          setRecipe(formatted);
          setIsLocalRecipe(false);
        })
        .catch(() => setRecipe(null));
    }
  }, [id, data, reset]);

  const updateHandler = (updatedFields) => {
    const updatedData = data.map((r) =>
      r.id == id ? { ...r, ...updatedFields } : r,
    );

    setData(updatedData);
    localStorage.setItem("recipes", JSON.stringify(updatedData));
    toast.success("Recipe updated!");
  };

  const deleteHandler = () => {
    const fav = JSON.parse(localStorage.getItem("fav")) || [];
    const updatedFav = fav.filter((item) => item.id != id);
    localStorage.setItem("fav", JSON.stringify(updatedFav));

    const updatedRecipes = data.filter((r) => r.id != id);
    setData(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    toast.success("Recipe deleted!");
    navigate("/recipes");
  };

  if (!recipe) {
    return (
      <div className="text-center py-10 text-gray-400 text-sm">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-6 px-4">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* recipe full detail section  */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 shadow-sm">
          <h1 className="text-2xl font-semibold mb-3">{recipe.title}</h1>

          <img
            loading="lazy"
            className="w-full max-h-80 object-cover rounded-lg mb-3"
            src={recipe.img}
            alt=""
          />

          <p className="text-md text-red-400 mb-3 font-medium">
            By {recipe.chef}
          </p>

          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1 text-blue-400 uppercase tracking-wide">
              Description
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {recipe.desc?.slice(0, 500)}
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1 text-blue-400 uppercase tracking-wide">
              Ingredients
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {recipe.ingr?.slice(0, 500)}
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1 text-blue-400 uppercase tracking-wide">
              Instructions
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {recipe.inst?.slice(0, 500)}
            </p>
          </div>

          <div className="mt-4">
            <span className="inline-block bg-blue-500/20 text-blue-400 text-[12px] px-3 py-1 rounded-full border border-blue-500/30">
              {recipe.categories}
            </span>
          </div>
        </div>

        {/* right side show only when recipe comes from user not by api*/}
        {isLocalRecipe && (
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Update Recipe</h2>

            <form className="space-y-4" onSubmit={handleSubmit(updateHandler)}>
              <input
                className="w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none text-sm"
                {...register("img")}
                type="url"
              />

              <input
                className="w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none text-sm"
                {...register("title")}
                type="text"
              />

              <input
                className="w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none text-sm"
                {...register("chef")}
                type="text"
              />

              <textarea
                rows="2"
                className="recipe w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none resize-none text-sm"
                {...register("desc")}
              />

              <textarea
                rows="2"
                className="recipe w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none resize-none text-sm"
                {...register("ingr")}
              />

              <textarea
                rows="2"
                className="recipe w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none resize-none text-sm"
                {...register("inst")}
              />

              <select
                className="w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none text-gray-300 text-sm"
                {...register("categories")}
              >
                <option value="BreakFast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Brunch">Brunch</option>
                <option value="Dinner">Dinner</option>
              </select>

              <div className="flex gap-3 pt-3">
                <button className="flex-1 bg-green-600 hover:bg-green-700 py-2 rounded-lg text-sm font-medium">
                  Update
                </button>

                <button
                  type="button"
                  onClick={deleteHandler}
                  className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-lg text-sm font-medium"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedRecipe;
