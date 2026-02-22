import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import Create from "../pages/Create";

const MainRoutes = () => {
  return (
    <div className="py-5 text-lg">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/create-recipe" element={<Create />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
