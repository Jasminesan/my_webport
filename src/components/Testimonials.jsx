import React from 'react';

const Testimonials = () => (
  <section className="p-6">
    <h3 className="text-xl dark:text-white font-semibold mb-4">Testimonials</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 rounded shadow">
    "Great to work with!"
    </div>      
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 rounded shadow">
    "Highly recommended!"
    </div>      
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 rounded shadow">
    "Delivered exceptional quality!"
    </div>      
    </div>
  </section>
);

export default Testimonials;
