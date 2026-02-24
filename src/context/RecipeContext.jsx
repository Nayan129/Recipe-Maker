import { useEffect, useState } from "react";
import { createContext } from "react";

export const recipeContext = createContext();

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  return (
    <recipeContext.Provider value={{ data, setData }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
