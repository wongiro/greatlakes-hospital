"use client";
import React from 'react';
import NavBar from './navbar';
import About from './about';
import Contact from './contact';
import Services from './services';
import MeetOurTeam from './team';
import Footer from './footer';
import Header from './header';
import Stats from './stats';
import InsurancePartners from './insuarancepartners';
import PatientExperiences from './experiences';


const HospitalWebsite = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Stats />
      <PatientExperiences />  
      <MeetOurTeam />
      <InsurancePartners />
      <Contact />
      <Footer />
    </div>
  );
};

export default HospitalWebsite;