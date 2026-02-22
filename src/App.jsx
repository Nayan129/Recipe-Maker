import Navbar from "./components/Navbar";
import "./index.css";
import MainRoutes from "./routes/MainRoutes";
const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-screen text-white py-5 px-[15%]">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
