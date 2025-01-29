import './What.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function What() {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  const testimonials = [
    {
      name: 'Ahmed Khalil Kafi',
      position: 'president',
      opinion:
        'نادي تمكين نادي جامعي علمي ثقافي تأسس على يد مجموعة من نخبة الجامعة بغرض تمكين الطالب من شتى مجالات الحياة ليكون قادرا على مواجهة صعوباتها',
    },
    {
      name: 'Mohamed Islem takdenti',
      position: 'Advisor',
      opinion:
        'Joining this club was one of the best decisions I’ve ever made. The people, resources, and community are amazing!',
    },
    {
      name: 'Monder Kafi',
      position: 'Founder',
      opinion:
        'A fantastic club that provides so many opportunities for growth and networking.',
    },
  ];

  return (
    <section className="what-they-say-section py-5">
      <div className="container">
        <h2
          className="text-center fw-bold display-4 mb-5"
          data-aos="fade-down"
        >
          What Did They Say About Our Club
        </h2>
        <div className="row g-2 justify-content-center">
          {testimonials.map((testimonial, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 mb-4 d-flex"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="card testimonial-card cloud-card shadow w-100">
                <div className="card-body text-center">
                  <h5 className="testimonial-name small">{testimonial.name}</h5>
                  <p className="text-muted small">{testimonial.position}</p>
                  <p className="text-muted">"{testimonial.opinion}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default What;
