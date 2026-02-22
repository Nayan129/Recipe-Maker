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
    setData([...data, recipe]);
    toast.success("New recipe created!");
    reset();
    navigate("/recipes");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          className="border-b outline-0 p-2 block"
          {...register("img")}
          type="url"
          placeholder="enter image url"
          required
        />

        <input
          className="border-b outline-0 p-2 block"
          {...register("title")}
          type="text"
          placeholder="recipe title"
          required
        />

        <textarea
          className="border-b outline-0 p-2 block"
          {...register("desc")}
          type="text"
          placeholder="enter description"
        />

        <textarea
          className="border-b outline-0 p-2 block"
          {...register("ingr")}
          type="text"
          placeholder="enter ingredients"
        />

        <textarea
          className="border-b outline-0 p-2 block"
          {...register("inst")}
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
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
