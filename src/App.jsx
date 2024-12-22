import React from "react";
import "./style.css";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import ClientsAndTestimonials from "./components/ClientsAndTestimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <Services />
      <Expertise />
      <ClientsAndTestimonials />
      <Footer />
    </>
  );
};

export default App;
