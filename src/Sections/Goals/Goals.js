import './Goals.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Goals = () => {
  const goals = [
    {
      title: 'Empowering Youth',
      description: 'We aim to equip young minds with essential skills and knowledge for a better future.',
    },
    {
      title: 'Encouraging Innovation',
      description: 'Fostering creativity and problem-solving skills through workshops & conferences.',
    },
    {
      title: 'Community Growth',
      description: 'Building a strong, supportive community for knowledge-sharing and collaboration.',
    },
    {
      title: 'Professional Development',
      description: 'Providing career guidance and technical training to prepare members for the job market.',
    },
    
  ];

  return (
    <section className="goals-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold display-4 mb-4" data-aos="fade-down">
          Our Goals
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // Two slides in tablet mode
            1024: { slidesPerView: 3 }, // Three slides in desktop mode
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="swiper-container"
        >
          {goals.map((goal, index) => (
            <SwiperSlide key={index}>
              <div className="goal-card shadow p-4 text-center">
                <h4 className="fw-bold">{goal.title}</h4>
                <p className="text-muted">{goal.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Goals;
