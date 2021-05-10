import React, { useState, useEffect } from "react";
import SwiperCore, { Mousewheel, Scrollbar, A11y, Autoplay } from "swiper";
import { Box, Image } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Scrollbar, A11y, Autoplay, Mousewheel]);

const IMAGES = ['/events/biodiversity/demo_s.jpg', '/events/biodiversity/demo_s.jpg']

export default function SwiperContent() {
  const isMobile = useMediaQuery({ query: "(max-device-width: 564px)" });
  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    const mySwiper = document.querySelector(".swiper-container").swiper;
    setSwiper(mySwiper);
  }, []);

  // const swiperProps = {
  //   spaceBetween: isMobile ? 0 : 20,
  //   direction: isMobile ? 'vertical' : 'horizontal',
  // }

  // <Image
  //   src={
  //     process.env.PUBLIC_URL +
  //     "/events/biodiversity/Artboard-1_2-BD-webinar-final-tinypng.jpg"
  //   }
  // />

  return (
    <Swiper autoplay={{ delay: 4000 }}>
        {IMAGES.map((d,i)=><SwiperSlide key={i}>
          <Image src={ process.env.PUBLIC_URL + d}/>
        </SwiperSlide>)}
    </Swiper>
  );
}
