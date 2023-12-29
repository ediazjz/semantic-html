function LandingPage() {
  return (
    <>
      <div>
        <div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>Welcome to Our Website</div>
      </div>
      <div>
        <div id="home">
          <div>Home Section</div>
          <div>This is the home section of the landing page.</div>
        </div>
        <div id="about">
          <div>About Us</div>
          <div>Learn more about our team and mission.</div>
        </div>
        <div id="services">
          <div>Our Services</div>
          <div>Discover the services we offer.</div>
          <div className="testimonials">
            <div className="testimonial">
              <h1>Alex Johnson, CEO of TechCorp</h1>
              <p>
                &quot;This service transformed our business! Highly
                recommend.&quot;
              </p>
            </div>
            <div className="testimonial">
              <h1>Samantha Lee, Freelancer</h1>
              <p>
                &quot;A truly outstanding experience from start to finish.&quot;
              </p>
            </div>
            <div className="testimonial">
              <h1>Ryan Chen, Entrepreneur</h1>
              <p>
                &quot;Innovative solutions and great customer support. Five
                stars!&quot;
              </p>
            </div>
          </div>
        </div>
        <div id="contact">
          <div>Contact Us</div>
          <div>Get in touch with our team.</div>
        </div>
      </div>
      <div>
        <div>&copy; 2023 Our Website</div>
      </div>
    </>
  )
}

export default LandingPage
