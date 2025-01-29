import './Who.css';
import logo from '../../assets/logo/logoempc.jpg';

function Who() {
  return (
    <section className="who-we-are-section py-5" id='about'>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-md-6 text-center text-md-start mb-4 mb-md-0"
            data-aos="fade-right"
          >
            <h2 className="display-4 fw-bold">Who We Are</h2>
            <p className="lead">
            We are a scientific and cultural club founded in early January 2025 at Yahya Fares University in Medea, made up of a group of passionate and ambitious students.
            </p>
            <p>
              Join us to explore new opportunities, develop new skills, and
              create meaningful experiences with people who share the same
              passion and vision.
            </p>
          </div>
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src={logo}
              alt="Who We Are"
              className="img-fluid rounded shadow who-we-are-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Who;
