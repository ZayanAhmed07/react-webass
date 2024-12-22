// Services.js
import React from "react";

const Services = () => {
  const services = [
    {
      img: "./images/Untitled-1.png",
      title: "Commercial Service",
      description: "While we specialize in high security locks, they are not always the solution to every situation. Our technicians assess and decide on qualified recombination of cylinders, combination locks, and access control systems for optimal security.",
    },
    {
      img: "./images/Untitled-2.png",
      title: "Residential Service",
      description: "At Caliber Locksmith we do everything needed to ensure the quality of protection you and your family receive is of the highest caliber.",
    },
    {
      img: "./images/Untitled-3.png",
      title: "Automotive Service",
      description: "Whether you are locked out, need a spare key, or lost your keys, Caliber Locksmith provides quick emergency services 24/7.",
    },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <div className="ssimg">
              <div className="simg">
                <img src={service.img} alt={`${service.title} Icon`} />
              </div>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
