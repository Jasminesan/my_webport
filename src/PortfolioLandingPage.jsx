import React from 'react';
import TopMenu from './components/TopMenu';
import Header from './components/Header';
import CaseStudies from './components/CaseStudies';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import About from './components/about';

const PortfolioLandingPage = () => (
  <div className=" font-sans text-gray-800">
    <Header />
    <CaseStudies />
    <Clients />
    <Testimonials />
    <About />
    <Contact />
  </div>
);

export default PortfolioLandingPage;
