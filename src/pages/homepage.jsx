import React from "react";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import ClientsAndTestimonials from "../components/ClientsAndTestimonials";
import WeatherB from "../components/WeatherB";

import Footer from "../components/Footer";

import "../style.css";

const App = () => {
  return (
    <>
      <Header />
      <WeatherB/>
      <MainBanner />
      <Services />
      <Expertise />
      <ClientsAndTestimonials />  
      <Footer />
    </>
  );
};

export default App;
