import axios from "axios";
import { useEffect } from "react";

export const fetchRecipes = () => {
  const response = axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
  console.log(response);
};
