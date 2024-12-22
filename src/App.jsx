import React from "react";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import ClientsAndTestimonials from "./components/ClientsAndTestimonials";
import WeatherApp from "./components/WeatherApp";
import Footer from "./components/Footer";
import "./style.css";

const App = () => {
  return (
    <>
      <Header />
      <WeatherApp />
      <MainBanner />
      <Services />
      <Expertise />
      <ClientsAndTestimonials />
       
      <Footer />
    </>
  );
};

export default App;
