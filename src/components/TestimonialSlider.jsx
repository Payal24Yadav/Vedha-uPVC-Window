import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useSelector } from 'react-redux';
import { staggerContainer, staggerItem } from '../animations/variants';

const TestimonialCard = ({ testimonial }) => (
  <div className="app-card p-7 sm:p-8 flex flex-col min-h-[330px]">
    {/* Quote icon */}
    <div className="icon-tile w-12 h-12 mb-6">
      <Quote size={20} className="text-white" />
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating || 5)].map((_, i) => (
        <Star key={i} size={14} className="text-[#c4a265] fill-[#c4a265]" />
      ))}
    </div>

    <p className="text-[#2c2c2c]/70 dark:text-gray-300 text-base leading-relaxed italic flex-1 mb-6">
      "{testimonial.review}"
    </p>

    <div className="flex items-center gap-4 pt-5 border-t border-[#4a7c59]/10 dark:border-white/5">
      <div className="icon-tile w-12 h-12 rounded-full font-bold text-lg">
        {testimonial.name?.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-[#1a3c34] dark:text-white text-sm">{testimonial.name}</p>
        <p className="text-xs text-[#4a7c59] dark:text-[#6b9e7a]">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

const TestimonialSlider = () => {
  const testimonials = useSelector((state) => state.testimonials?.items) || [];

  const fallback = [
    { id: 1, name: 'Ramesh Kumar', location: 'Chennai, Tamil Nadu', review: 'Vedha uPVC windows transformed our home completely. The quality is exceptional and the installation team was professional and punctual.', rating: 5 },
    { id: 2, name: 'Priya Sharma', location: 'Bangalore, Karnataka', review: 'We chose Vedha for our villa project and couldn\'t be happier. The sliding doors are smooth and the energy efficiency is remarkable.', rating: 5 },
    { id: 3, name: 'Suresh Reddy', location: 'Hyderabad, Telangana', review: 'Excellent product quality and after-sales service. The casement windows keep our home quiet even near a busy street.', rating: 5 },
    { id: 4, name: 'Anitha Krishnan', location: 'Coimbatore, Tamil Nadu', review: 'The team was very professional. They helped us choose the right style for our home and the installation was flawless.', rating: 5 },
    { id: 5, name: 'Vikram Singh', location: 'Pune, Maharashtra', review: 'Worth every rupee. Our electricity bills dropped significantly after installing Vedha uPVC windows. Amazing thermal insulation.', rating: 5 },
  ];

  const data = testimonials.length ? testimonials : fallback;

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={28}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 32 },
      }}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="testimonial-swiper"
    >
      {data.map((t) => (
        <SwiperSlide key={t.id} className="h-auto">
          <TestimonialCard testimonial={t} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
