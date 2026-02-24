import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-110 flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 px-6">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-300">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-400 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition duration-300 shadow-lg hover:shadow-indigo-500/40"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
