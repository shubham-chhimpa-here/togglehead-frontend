import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './landing.css';

// import required modules
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import { useState } from 'react';

export default () => {
 const total = [1,2,3,4,5,6,7,8,9];
  return (
    <>
    <Swiper
  loop= 'true'
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}

      autoplay = {{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[Mousewheel, Pagination, Autoplay]}
      className="mySwiper landing"
    >
      {
        total.map((item) => <SwiperSlide key={item}>Slide {item}</SwiperSlide>)

      }
  
    </Swiper>
  </>
  );
};