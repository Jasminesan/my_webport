import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGit, FaGithub } from 'react-icons/fa';

const Contact = () => (
    //px-6 py-4 border-b shadow-sm dark:bg-gray-900 text-gray-900 dark:text-white">
  <footer className="p-6 flex justify-between dark:bg-gray-900 text-gray-900 dark:text-white border-t text-center">
    <h3 className="text-xl font-semibold mb-4">Contact</h3>
    <div className="flex gap-6">
      <a href="ckaewpuang@gmail.com"><FaEnvelope size={34} /></a>
      <a href="https://www.linkedin.com/in/chanathip-kaewpuang-7393012b3/" target="_blank" rel="noreferrer"><FaLinkedin size={34} /></a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={34} /></a>
      <a href="https://github.com/Jasminesan" target="_blank" rel="noreferrer"><FaGithub size={34} /></a>
    </div>
  </footer>
);

export default Contact;
