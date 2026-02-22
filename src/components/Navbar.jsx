import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-x-20 text-md">
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
      <NavLink
        className={({ isActive }) => `bg-black px-3 py-1 rounded cursor-pointer 
        transition-transform duration-500 ease-in-out 
        active:scale-80 ${isActive ? "text-red-400" : ""}
`}
        to="/create-recipe"
      >
        Create
      </NavLink>
    </div>
  );
};

export default Navbar;
