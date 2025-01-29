import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo and Description */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h4 className="footer-logo mb-2">EMPOWERMENT</h4>
            <p className="small">
            Capacity Building.. Making Leaders.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <ul className="footer-links list-unstyled d-flex justify-content-center gap-3">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#activities">Activities</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="col-md-4 text-center text-md-end">
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} Designed and developed by <a href='https://www.instagram.com/ay.oub514/' target='_blank' className='name'>Ayoub Blm</a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
