import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, img, title, desc, chef, ingr, inst } = recipe;

  return (
    
    <Link
      to={`/recipes/details/${id}`}
      className="group bg-white/5  border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition hover:-translate-y-1"
    >
      <img
        className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
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
  );
};

export default RecipeCard;
