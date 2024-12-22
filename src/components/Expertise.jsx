// Expertise.js
import React from "react";

const Expertise = () => {
  const expertiseList = [
    "Emergency Lockout",
    "Commercial Lock Change",
    "High Security Locks",
    "Security Cameras",
  ];

  return (
    <section className="expertise">
      <div className="expertise-content">
        <h2>We are Professional & adept<br /> Lockmasters</h2>
        <p>
          Caliber Locksmith is interested in offering our services to you on a regular basis for all your locksmith needs.
          In the event that you decide to work with Caliber Locksmith, we will offer you between 15% to 20% discount,
          depending on the continued collaboration.
        </p>
        <div className="expertise-list">
          {expertiseList.map((item, index) => (
            <div className="expertise-item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
