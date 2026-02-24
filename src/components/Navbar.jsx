import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-4 md:gap-20 lg:gap-24 text-sm font-medium bg-white/5 border border-white/10 rounded-2xl py-3 px-8 shadow-lg">
      <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/">
        Home
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/recipes"
      >
        Recipes
      </NavLink>

      <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/fav">
        Favourite
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded-xl transition duration-200 font-medium 
        bg-red-500 hover:bg-red-600 text-white shadow-md
          ${isActive ? "ring-2 ring-red-300" : ""}`
        }
        to="/create-recipe"
      >
        Create
      </NavLink>
    </div>
  );
};

export default Navbar;
