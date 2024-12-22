import React from "react";

const ClientsAndTestimonials = () => {
  return (
    <section className="clients-testimonials">
      {/* Clients Section */}
      <div className="clients-section">
        <h2>
          <span>Our Clients</span>
        </h2>
        <div className="clients">
          <div className="client">
            <p>Garage Door MD</p>
          </div>
          <div className="client">
            <p>RCA Locksmith</p>
          </div>
          <div className="client">
            <img src="./images/key.jpg" alt="The Flying Locksmiths" />
          </div>
          <div className="client">
            <p>Garage Door MD</p>
          </div>
          <div className="client">
            <img src="./images/key.jpg" alt="RCA Locksmith" />
          </div>
          <div className="client">
            <p>RCA Locksmith</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>
          <span>Testimonials</span>
        </h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              "My lock was very old and hard to turn. The locksmith arrived
              quickly and replaced the lock for a reasonable price. Thank you
              Tom."
            </p>
            <div className="testimonial-info">
              <img src="./images/profile.jpg" alt="Harris Raybuilder" />
              <div>
                <h4>Harris Raybuilder</h4>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="testimonial-navigation">
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsAndTestimonials;
