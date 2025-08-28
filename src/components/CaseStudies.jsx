import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectCategories = {
  "Hardware": [
    { title: "Smart Plug", image: "p04.png?text=Smart+Plug" },
    { title: "Smart Water Tap", image: "p03_3.png?text=Smart+Tap" },
  ],
  "Service": [
    { title: "Style Service", image: "p01_1.png?text=Style+Service" },
  ],
  "AI & IoT": [
    { title: "Count People", image: "https://via.placeholder.com/300x180?text=Count+People" },
    { title: "Analyst DB", image: "p02.png?text=DB" },
    { title: "CarDetect", image: "p02.png?text=CarDetect" },
    { title: "Predict Accident", image: "p02.png?text=Predict+Accident" },
  ],
};

const categories = Object.keys(projectCategories);

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hardware");

  return (
    <section
  className="
    flex min-h-screen flex-col gap-10 p-10  
    bg-white text-gray-800 transition-colors duration-300
    dark:bg-gray-900 dark:to-purple-100 dark:text-gray-900
  "
>
  {/* TOP ROW: Title */}
  <h3 className="text-2xl font-semibold text-center dark:text-white">
    Casestudies
  </h3>

  {/* BOTTOM ROW: Left + Right */}
  <div className="flex gap-10">
    {/* Left Menu */}
    <div className="md:w-1/4 space-y-4 text-lg font-medium">
      {categories.map((category) => (
        <div
          key={category}
          className={`
            cursor-pointer px-4 py-2 rounded-l-full transition-all duration-300
            ${
              selectedCategory === category
                ? "font-bold border-l-4 border-gray-600 dark:border-white bg-white dark:bg-gray-900 dark:text-white"
                : "text-gray-500 hover:text-black dark:hover:text-white"
            }
          `}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>

    {/* Right Menu */}
    <div className=" md:w-5/4 overflow-x-auto">
      <motion.div layout className="flex gap-6 flex-wrap">
        <AnimatePresence mode="wait">
          {projectCategories[selectedCategory].map((project, index) => (
            <motion.div
              key={project.title}
              className="min-w-[250px] max-w-[300px] bg-radius dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover rounded mb-3 border border-gray-300"
              />
              <h4 className="text-md font-semibold">{project.title}</h4>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default CaseStudies;
