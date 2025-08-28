import React from 'react';

const About = () => (
  <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-white dark:bg-gray-900">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
      About Me
    </h2>

    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl w-full">
      <img
        src="01.jpg"
        alt="Your Photo"
        className="w-64 h-auto rounded-xl shadow-lg object-cover"
      />

      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed md:text-left text-center">
        Now I am studying at Sripatum University, Faculty of Technology, Computer Engineering. 
        I am interested in an internship position in Hardware and Software as a Project Manager Assistant. 
        I would like to learn how to manage people and time effectively. 
        I enjoy learning new things because when I start a new project, I feel excited and motivated.
      </p>
    </div>
  </section>
);

export default About;
