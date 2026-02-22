import Navbar from "./components/Navbar";
import "./index.css";
import MainRoutes from "./routes/MainRoutes";
const App = () => {
  return (
    <div className="bg-gray-900 h-screen w-screen text-white py-10 px-[20%]">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
