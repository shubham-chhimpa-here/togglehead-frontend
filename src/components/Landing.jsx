import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './landing.css';

// import required modules
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import { useState } from 'react';

import Img1 from '../assets/Img1.jpg';
import Img2 from '../assets/Img2.jpg';
import Img3 from '../assets/Img3.jpg';
import Img4 from '../assets/Img4.jpg';


export default () => {
  const total = [Img1, Img2, Img3, Img4];
  return (
    <>
      <Swiper
        loop='true'
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="mySwiper landing"
      >
        {
          total.map((item) => <SwiperSlide key={item}>
            <img src={item} alt={item}/>
          </SwiperSlide>)

        }

      </Swiper>
    </>
  );
};