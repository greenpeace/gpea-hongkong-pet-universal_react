import React, { useState, useEffect } from 'react';
import SwiperCore, { Mousewheel, Scrollbar, A11y, Autoplay } from 'swiper';
import { AspectRatio, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

SwiperCore.use([Scrollbar, A11y, Autoplay, Mousewheel]);

const ImageCarousel = ({ swiperData, slideIndex, style }) => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (!swiper) {
      return;
    }

    swiper.slideTo(slideIndex, 1000);
  }, [slideIndex]);

  useEffect(() => {
    const mySwiper = document.querySelector('.simple-swiper').swiper;
    setSwiper(mySwiper);
  }, []);

  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      className={'simple-swiper'}
      modules={[EffectFade]}
      effect='fade'
    >
      {(swiperData || []).map((d, i) => {
        return (
          <SwiperSlide key={i}>
            <AspectRatio ratio={16 / 9}>
              <Image
                src={d}
                style={style}
                objectFit='cover'
                alt='image'
                loading='lazy'
              />
            </AspectRatio>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageCarousel;
