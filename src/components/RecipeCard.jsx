import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, url, title, desc, chef, ingr, inst } = recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="hover:scale-101 duration-200 mr-3 mb-3 block w-[23vw] rounded overflow-hidden"
    >
      <img
        className="w-full h-[20vh] object-cover"
        src={url}
        alt="recipe image"
      />
      <h1 className="font-black mt-2">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2 pb-3">
        {desc.slice(0, 100)}... <small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;

// <div className="recipe overflow-auto h-116 ">
//   <div className="flex flex-col gap-2" key={recipe.id}>
//     <img
//       className="h-50 max-w-60 rounded-xl m-2"
//       src={recipe.url}
//       alt="recipe image"
//     />
//     <h1 className="text-2xl font-bold text-red-500 px-3">{recipe.title}</h1>

//     <p className="text-sm font-medium pr-4 pl-3">
//       <span className="font-bold text-blue-500">Recipe</span> :
//       {recipe.description}
//     </p>

//     <p className="text-sm font-medium pr-4 pl-3">
//       <span className="font-bold text-blue-500">ingredients</span> :
//       {recipe.ingredients}
//     </p>

//     <p className="text-sm font-medium pr-4 pl-3">
//       <span className="font-bold text-blue-500">instructions</span> :
//       {recipe.instructions}
//     </p>
//   </div>
// </div>
