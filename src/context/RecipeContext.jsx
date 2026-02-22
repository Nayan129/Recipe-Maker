import { useState } from "react";
import { createContext } from "react";

export const recipeContext = createContext();

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Classic Margherita Pizza",
      ingr: "Pizza dough, Tomato sauceFresh, mozzarella cheese ,Fresh basil leaves, Olive oil ,Salt and pepper to taste",
      inst: "Preheat the oven to 475°F (245°C).Roll out the pizza dough and spread tomato sauce evenly. Top with slices of fresh mozzarella and fresh basil leaves. Drizzle with olive oil and season with salt and pepper.  Bake in the preheated oven for 12-15 minutes or until the crust is golden brownSlice and serve hot.",
      img: "https://cdn.dummyjson.com/recipe-images/1.webp",
      category: "Dinner",
      desc: " Drizzle with olive oil and season with salt and pepper.  Bake in the preheated oven for 12-15 minutes or until the crust is golden brownSlice and serve hot",
      chef: "Nadim ansari",
    },
  ]);
  return (
    <recipeContext.Provider value={{ data, setData }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
