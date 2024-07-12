import { FaFacebook,FaTwitter,FaLinkedin, FaInstagram } from "react-icons/fa";
const Contact = () => {
    
  return (
    <>
    <div className="text">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: contact@techwaveinnovations.com</p>
        <p>Phone: 1-800-123-4567</p>
        <p>Address: 123 Tech Avenue, Silicon Valley, CA, USA</p>
      </div>

      <div className="social-media">
        <h2>Follow Us</h2>
        <a href="https://www.facebook.com/TechWaveInnovations" className="socialMedia"><FaFacebook/></a>
        <a href="https://www.twitter.com/TechWaveInnovations" className="socialMedia"><FaTwitter/></a>
        <a href="https://www.linkedin.com/TechWaveInnovations" className="socialMedia"><FaLinkedin/></a>
        <a href="https://www.instagram.com/TechWaveInnovations" className="socialMedia"><FaInstagram/></a>
      </div>

      <div className="faq">
        <div>
          <h2>Frequently Asked Questions</h2>
          <p>
            <strong>Q:</strong> What services do you offer?
          </p>
          <p>
            <strong>A:</strong> We offer a range of services including AI
            solutions, quantum computing research, and sustainable tech
            development.
          </p>
        </div>
        <div>
          <p>
            <strong>Q:</strong> How can I partner with TechWave Innovations?
          </p>
          <p>
            <strong>A:</strong> Please fill out the contact form or email us at
            partnerships@techwaveinnovations.com.
          </p>
        </div>
      </div>
    </div>
       <footer>
       <p>&copy; TechWave Innovations Co.Ltd</p>
     </footer>
     </>
    
  );
};

export default Contact;
