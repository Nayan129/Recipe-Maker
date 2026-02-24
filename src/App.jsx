import Navbar from "./components/Navbar";
import "./index.css";
import MainRoutes from "./routes/MainRoutes";
const App = () => {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 px-6 md:px-16 py-4 ">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
