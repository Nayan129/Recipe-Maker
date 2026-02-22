import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const DetailedRecipe = () => {
  const { data, setData } = useContext(recipeContext);

  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    toast.success("your recipe updated!");
  };

  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <div className="text-5xl">{recipe.title}</div>
        <img className="h-[20vh]" src={recipe.img} alt="" />
      </div>
      <div className="right w-1/2 p-2">
        <div>
          <form className="w-1/2 p-2" onSubmit={handleSubmit(submitHandler)}>
            <input
              className="border-b outline-0 p-2 block"
              {...register("img")}
              value={recipe.img}
              type="url"
              placeholder="enter image url"
            />

            <input
              className="border-b outline-0 p-2 block"
              {...register("title")}
              value={recipe.title}
              type="text"
              placeholder="recipe title"
            />

            <textarea
              className="recipe border-b outline-0 p-2 block"
              {...register("desc")}
              value={recipe.desc}
              type="text"
              placeholder="enter description"
            />

            <textarea
              className="recipe border-b outline-0 p-2 block"
              {...register("ingr")}
              value={recipe.ingr}
              type="text"
              placeholder="enter ingredients"
            />

            <textarea
              className="recipe border-b outline-0 p-2 block"
              {...register("inst")}
              value={recipe.inst}
              type="text"
              placeholder="enter instructions"
            />

            <select
              className="border-b outline-0 p-2 block text-red-400"
              {...register("categories")}
            >
              <option value="BreckFast">Breckfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Brunch">Brunch</option>
              <option value="Dinner">Dinner</option>
            </select>

            <button className="bg-gray-950 mt-4 py-2 px-4 rounded cursor-pointer active:scale-90">
              update Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default DetailedRecipe;
