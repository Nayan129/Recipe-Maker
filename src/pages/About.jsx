import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* This is About Recipe And All Info Page*/}
        <section>
          <h1 className="text-4xl font-bold mb-4">About CookStacker</h1>
          <p className="text-slate-400 leading-relaxed text-lg">
            Recipe Explorer is a modern React-based application that allows
            users to discover, search, and save their favorite recipes in a
            clean and responsive interface.
          </p>
        </section>

        {/* Features That Added*/}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Key Features
          </h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Fetches recipes dynamically from an external API</li>
            <li>• Real-time search filtering</li>
            <li>• Add/Remove favorites functionality</li>
            <li>• Optimized rendering with useMemo</li>
            <li>• Lazy-loaded images for better performance</li>
            <li>• Fully responsive UI</li>
          </ul>
        </section>

        {/* How It Works and Resposivness*/}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            How It Works
          </h2>
          <p className="text-slate-400 leading-relaxed">
            The application fetches recipe data from a public API and formats it
            into structured components. Users can search recipes instantly using
            client-side filtering. State management is handled using React hooks
            and Context API for managing favorites globally across the app.
          </p>
        </section>

        {/* Tech Stack That i Added*/}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "JavaScript (ES6+)",
              "Tailwind CSS",
              "Axios",
              "Context API",
              "React Router",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Future Implementation in This Project */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">
            Future Improvements
          </h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Backend integration for persistent favorites</li>
            <li>• Authentication system</li>
            <li>• Pagination / Infinite scrolling</li>
            <li>• Advanced filtering (cuisine, calories, prep time)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
