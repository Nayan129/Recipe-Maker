import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { data, setData } = useContext(recipeContext);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    const copyData = [...data];
    copyData.push(recipe);
    setData(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));
    toast.success("New recipe created!");
    reset();
    navigate("/recipes");
  };
  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white/5 border border-white/10 p-8 rounded-2xl shadow-md">
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          className="w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400 rounded-lg px-4 py-2 mb-4 outline-none"
          {...register("img")}
          type="url"
          placeholder="enter image url"
          required
        />

        <input
          className="w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400 rounded-lg px-4 py-2 mb-4 outline-none"
          {...register("title")}
          type="text"
          placeholder="recipe title"
        />

        <input
          className="w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400 rounded-lg px-4 py-2 mb-4 outline-none"
          {...register("chef")}
          type="text"
          placeholder="chef"
        />

        <textarea
          className="recipe w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400 rounded-lg px-4 py-2 mb-4 outline-none resize-none"
          {...register("desc")}
          type="text"
          placeholder="enter description"
        />

        <textarea
          className="recipe w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400 rounded-lg px-4 py-2 mb-4 outline-none resize-none"
          {...register("ingr")}
          type="text"
          placeholder="enter ingredients"
        />

        <textarea
          className="recipe w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400 rounded-lg px-4 py-2 mb-4 outline-none resize-none"
          {...register("inst")}
          type="text"
          placeholder="enter instructions"
        />

        <select
          className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-2 mb-4 text-gray-300 focus:border-red-400 outline-none"
          {...register("categories")}
        >
          <option value="BreakFast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Brunch">Brunch</option>
          <option value="Dinner">Dinner</option>
        </select>

        <button className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold shadow-md">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
