import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slides.css';

// import required modules
import {  Button, Heading, Text, VStack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function Slides() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}

        // centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper slides"
      >
        {
          [1,2,3,4,5,6,7,8,9].map((item) => {
            return    <SwiperSlide key={item}>
            <VStack align={'flex-start'} p={'1rem'} color={'white'} gap={'.8rem'} cursor={'grab'}
            _active={{
              cursor: 'grabbing'
            }}
            >
              <Heading fontSize={'1.2rem'}>Lorem Ipsum</Heading>
              <Text align={'left'} fontSize={'1rem'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi rem rerum consequuntur fugit alias, ratione </Text>
              <Button rightIcon={<ChevronRightIcon color={'black'} boxSize={'1.5rem'} bgColor={'white'} borderRadius={'full'}/>} variant={'transparent'} paddingInline={'0'}>
                Know More
              </Button>
            </VStack>
          </SwiperSlide>
          })
        }
     
       
      </Swiper>
    </>
  );
}