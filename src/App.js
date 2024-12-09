import './App.css';
import './style.css'; 
import logo from './images/logo.jpg'; 

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="header-container flex-wrap">
          <img className="main-logo" src={logo} alt="Caliber Locksmith Logo" />
          <div className="contact-info">
            <div className="contact-info-call">
              <p>Call Now!</p>
            </div>
            <div>

              Dc: 202-318-1630 <br />
              Va: 703-935-0140 <br />
              Md: 301-455-0550
            </div>
          </div>
        </div>
        <nav className="nav-bar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Security Sys</a></li>
            <li><a href="#">Safes</a></li>
            <li><a href="#">Garage Door</a></li>
            <li><a href="#">Price List</a></li>
            <li><a href="#">Service Areas</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Banner */}
      <section className="main-banner">
        <img src="./images/car.jpg" alt="Caliber Locksmith" />
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-container">
          <div className="service">
            <div className="ssimg">
            <div className="simg">
            <img src="./images/Untitled-1.png" alt="Commercial Service Icon" /></div>
            </div>
            <h3>Commercial Service</h3>
            <p>
              While we specialize in high security locks, they are not always the solution to every situation.
              Our technicians assess and decide on qualified recombination of cylinders, combination locks, and
              access control systems for optimal security.
            </p>
          </div>
          <div className="service">
          <div className="ssimg">
            <div className="simg">
            <img src="./images/Untitled-2.png" alt="Residential Service Icon" /></div>
            </div>
            <h3>Residential Service</h3>
            <p>
              At Caliber Locksmith we do everything needed to ensure the quality of protection you and your
              family receive is of the highest caliber.
            </p>
          </div>
          <div className="service">
          <div className="ssimg">
            <div className="simg">
            <img src="./images/Untitled-3.png" alt="Automotive Service Icon" /></div>
            </div>
            <h3>Automotive Service</h3>
            <p>
              Whether you are locked out, need a spare key, or lost your keys, Caliber Locksmith provides quick
              emergency services 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section class="expertise">
    <div class="expertise-content">
        <h2>We are Professional & adept<br/> Lockmasters</h2>
        <p>
            Caliber Locksmith is interested in offering our services to you on a regular basis for all your locksmith needs. 
            In the event that you decide to work with Caliber Locksmith, we will offer you between 15% to 20% discount, 
            depending on the continued collaboration.
        </p>
        <div class="expertise-list">
            <div class="expertise-item">Emergency Lockout</div>
            <div class="expertise-item">Commercial Lock Change</div>
            <div class="expertise-item">High Security Locks</div>
            <div class="expertise-item">Security Cameras</div>
        </div>
    </div>
</section>


      {/* Clients and Testimonials Section */}
      <section className="clients-testimonials">
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
        <div className="testimonials-section">
          <h2><span>Testimonials</span></h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>
                "My lock was very old and hard to turn. The locksmith arrived quickly and replaced the lock for
                a reasonable price. Thank you Tom."
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
     
      

      {/* Footer */}
      <footer>
      <div className="footer-content">
        {/* Information Links Section */}
        <div className="info-links">
          <h3>Information Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Security Sys</a></li>
            <li><a href="#">Safes</a></li>
            <li><a href="#">Garage Door</a></li>
            <li><a href="#">Price List</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Service Areas Section */}
        <div className="service-areas">
          <h3>Service Areas</h3>
          <ul>
            <li>Rockville</li>
            <li>Rockville Pike</li>
            <li>Bethesda</li>
            <li>Silver Spring</li>
            <li>Montgomery County</li>
            <li>Howard County</li>
            <li>Greenbelt</li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            <img src="./images/location.png" alt="Location Icon" /> Address
          </p>
          <p>
            <img src="./images/mail.png" alt="Email Icon" /> info@caliberlocksmith.com
          </p>
          <p>
            <img src="./images/call.png" alt="Phone Icon" /> 866 887 5610
          </p>
        </div>

        {/* Social Links Section */}
        <div className="social-links">
          <h3>Be Social</h3>
          <ul>
            <li><a href="#"><img src="./images/facebook.png" alt="Facebook Icon" /></a></li>
            <li><a href="#"><img src="./images/twitter.png" alt="Twitter Icon" /></a></li>
            <li><a href="#"><img src="./images/wifi.png" alt="Wi-Fi Icon" /></a></li>
            <li><a href="#"><img src="./images/youtube.png" alt="YouTube Icon" /></a></li>
            <li><a href="#"><img src="./images/v.png" alt="V Icon" /></a></li>
            <li><a href="#"><img src="./images/dot.png" alt="Dot Icon" /></a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright-section">
        <p>&copy; Copyright CaliberLocksmith.com. All rights reserved.</p>
      </div>
    </footer>
  
    </div>
  );
}

export default App;
