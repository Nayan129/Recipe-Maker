import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const DetailedRecipe = () => {
  const { data, setData } = useContext(recipeContext);

  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      img: recipe?.img,
      title: recipe?.title,
      chef: recipe?.chef,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
      inst: recipe?.inst,
      category: recipe?.category,
    },
  });

  const updateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setData(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe updated!");
  };

  const deleteHandler = () => {
    const filterdata = data.filter((recipe) => recipe.id != params.id);
    setData(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.success("Recipe deleted!");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="max-w-6xl mx-auto mt-6 px-4">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* left section for single recipe display  */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 shadow-sm">
          <h1 className="text-2xl font-semibold mb-3">{recipe.title}</h1>

          <img
            loading="lazy"
            className="w-full h-44 object-cover rounded-lg mb-3"
            src={recipe.img}
            alt=""
          />

          <p className="text-xs text-red-400 mb-3 font-medium">
            By {recipe.chef}
          </p>

          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1 text-blue-400 uppercase tracking-wide">
              Description
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              {recipe.desc.slice(0, 250)}...
            </p>
          </div>


          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1 text-blue-400 uppercase tracking-wide">
              Ingredients
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              {recipe.ingr.slice(0, 250)}...
            </p>
          </div>


          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1 text-blue-400 uppercase tracking-wide">
              Instructions
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              {recipe.inst.slice(0, 250)}...
            </p>
          </div>
          <div className="mt-4">
            <span className="inline-block bg-blue-500/20 text-blue-400 text-[10px] px-3 py-1 rounded-full border border-blue-500/30">
              {recipe.categories}
            </span>
          </div>
        </div>


        {/* ..........right section.............. */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Update Recipe</h2>

          <form className="space-y-4" onSubmit={handleSubmit(updateHandler)}>
            <input
              className="w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none text-sm"
              {...register("img")}
              type="url"
              placeholder="Enter image url"
            />

            <input
              className="w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none text-sm"
              {...register("title")}
              type="text"
              placeholder="Recipe title"
            />

            <input
              className="w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none text-sm"
              {...register("chef")}
              type="text"
              placeholder="Chef name"
            />

            <textarea
              rows="2"
              className="recipe w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none resize-none text-sm"
              {...register("desc")}
              placeholder="Enter description"
            />

            <textarea
              rows="2"
              className="recipe w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none resize-none text-sm"
              {...register("ingr")}
              placeholder="Enter ingredients"
            />

            <textarea
              rows="2"
              className="recipe w-full bg-transparent border border-white/10 focus:border-red-400 focus:ring-1 focus:ring-red-400/40 rounded-lg px-3 py-2 outline-none resize-none text-sm"
              {...register("inst")}
              placeholder="Enter instructions"
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
      </div>
    </div>
  ) : (
    <div className="text-center py-10 text-gray-400 text-sm">
      Loading recipe...
    </div>
  );
};

export default DetailedRecipe;
