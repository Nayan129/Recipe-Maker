import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import Create from "../pages/Create";
import DetailedRecipe from "../pages/DetailedRecipe";
import PageNotFound from "../pages/PageNotFound";
import Fav from "../pages/Fav";

const MainRoutes = () => {
  return (
    <div className="py-3 text-lg">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/details/:id" element={<DetailedRecipe />} />
        <Route path="/create-recipe" element={<Create />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
