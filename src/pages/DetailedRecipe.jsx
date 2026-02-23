import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const DetailedRecipe = () => {
  const { data, setData } = useContext(recipeContext);

  // params to get particular data
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      img: recipe.img,
      title: recipe.title,
      chef: recipe.chef,
      desc: recipe.desc,
      ingr: recipe.ingr,
      inst: recipe.inst,
      category: recipe.category,
    },
  });

  // this is submitHandler to update recipe
  const updateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setData(copydata);
    toast.success("recipe updated!");
    // navigate("/recipes");
  };

  // this is deleteHandler to delete recipe
  const deleteHandler = () => {
    const filterdata = data.filter((recipe) => recipe.id != params.id);
    setData(filterdata);
    toast.success("Recipe deleted!");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="w-full flex">
      {/* this div is for rendering our single recipe data after click on recipe */}
      <div className="left w-1/2 p-2">
        <div className="text-5xl">{recipe.title}</div>
        <img className="h-[20vh]" src={recipe.img} alt="" />
        <small className="px-2 text-red-400">{recipe.chef}</small>
        <p className="px-2 pb-3">
          {recipe.desc.slice(0, 100)}...{" "}
          <small className="text-blue-400">more</small>
        </p>
      </div>

      {/* this is right div for updating Recipe */}

      <div className="right w-1/2 p-2">
        <div>
          <form className="w-1/2 p-2" onSubmit={handleSubmit(updateHandler)}>
            <input
              className="border-b outline-0 p-2 block"
              {...register("img")}
              type="url"
              placeholder="enter image url"
            />

            <input
              className="border-b outline-0 p-2 block"
              {...register("title")}
              type="text"
              placeholder="recipe title"
            />

            <input
              className="border-b outline-0 p-2 block"
              {...register("chef")}
              type="text"
              placeholder="chef"
            />

            <textarea
              className="recipe border-b outline-0 p-2 block"
              {...register("desc")}
              type="text"
              placeholder="enter description"
            />

            <textarea
              className="recipe border-b outline-0 p-2 block"
              {...register("ingr")}
              type="text"
              placeholder="enter ingredients"
            />

            <textarea
              className="recipe border-b outline-0 p-2 block"
              {...register("inst")}
              type="text"
              placeholder="enter instructions"
            />

            <select
              className="border-b outline-0 p-2 block text-red-400"
              {...register("categories")}
            >
              <option value="BreakFast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Brunch">Brunch</option>
              <option value="Dinner">Dinner</option>
            </select>

            <button className="bg-green-700 mt-4 py-2 px-4 rounded cursor-pointer active:scale-90">
              update Recipe
            </button>
            <button
              onClick={deleteHandler}
              className="bg-red-500 mt-4 py-2 px-4 rounded cursor-pointer active:scale-90"
            >
              Delete Recipe
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
