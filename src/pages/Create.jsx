import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

const Create = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          className="border-b outline-0 p-2 block"
          {...register("url")}
          type="url"
          placeholder="enter image url"
        />
        <small className="text-red-400">
          this is the error please fill this it's required
        </small>

        <input
          className="border-b outline-0 p-2 block"
          {...register("title")}
          type="text"
          placeholder="recipe title"
        />

        <textarea
          className="border-b outline-0 p-2 block"
          {...register("description")}
          type="text"
          placeholder="enter description"
        />

        <textarea
          className="border-b outline-0 p-2 block"
          {...register("ingredients")}
          type="text"
          placeholder="enter ingredients"
        />

        <textarea
          className="border-b outline-0 p-2 block"
          {...register("instructions")}
          type="text"
          placeholder="enter instructions"
        />

        <select
          className="border-b outline-0 p-2 block text-red-400"
          {...register("categories")}
        >
          <option value="categary-1">healthy</option>
          <option value="categary-1">veg</option>
          <option value="categary-1">non-veg</option>
        </select>

        <button className="bg-gray-950 mt-4 py-2 px-4 rounded cursor-pointer active:scale-90">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
