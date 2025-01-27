import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../styles/Home/Reviews/index.scss';
import Review from '../../../assets/Home/Reviews/review-1.jpg';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Michale',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique inventore qui omnis corrupti quis adipisci aperiam ducimus reiciendis odio sunt praesentium minus hic iusto, unde quae quod tenetur maiores!',
      image: Review,
    },
    {
      id: 2,
      name: 'John',
      review:
        'Dolor sit amet consectetur adipisicing elit. Aut similique inventore qui omnis corrupti quis adipisci aperiam ducimus reiciendis odio sunt praesentium minus hic iusto.',
      image: Review,
    },
    {
      id: 3,
      name: 'Sophia',
      review:
        'Consectetur adipisicing elit. Aut similique inventore qui omnis corrupti quis adipisci aperiam ducimus reiciendis odio sunt praesentium minus hic iusto.',
      image: Review,
    },
    {
      id: 4,
      name: 'Emma',
      review:
        'Adipisicing elit. Aut similique inventore qui omnis corrupti quis adipisci aperiam ducimus reiciendis odio sunt praesentium minus hic iusto.',
      image: Review,
    },
  ];

  return (
    <section className="reviews">
      <h2 className="reviews__heading">Customer Reviews</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="reviews__card">
              <img src={review.image} className="reviews__card-img" alt={review.name} />
              <h3 className="reviews__card-name">{review.name}</h3>
              <p className="reviews__card-review">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
