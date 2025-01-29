import './Contact.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Contact() {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <section className="contact-us-section py-5" id='contact'>
      <div className="container text-center">
        <h2
          className="display-4 fw-bold mb-4"
          data-aos="fade-down"
        >
          Contact Us
        </h2>
        <p
          className="mb-5 lead"
          data-aos="fade-up"
        >
          Reach out to us through our social media channels or email. We’d love to hear from you!
        </p>
        <div className="row justify-content-center g-4">
          {/* Facebook */}
          <div className="col-4 col-sm-2 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <a href="https://www.facebook.com/profile.php?id=61571872515062" target="_blank" rel="noopener noreferrer" className="contact-icon facebook">
              <FaFacebook size={50} />
              <p className="mt-3">Facebook</p>
            </a>
          </div>
          {/* Instagram */}
          <div className="col-4 col-sm-2 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <a href="https://www.instagram.com/empclub/" target="_blank" rel="noopener noreferrer" className="contact-icon instagram">
              <FaInstagram size={50} />
              <p className="mt-3">Instagram</p>
            </a>
          </div>
          {/* Email */}
          <div className="col-4 col-sm-2 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300">
            <a href="https://mail.google.com/mail/u/0/#search/empclub0%40gmail.com?compose=new" target="_blank" className="contact-icon email">
              <FaEnvelope size={50} />
              <p className="mt-3">Email</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
