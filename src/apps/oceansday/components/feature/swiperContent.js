import React, { useState, useEffect } from "react";
import SwiperCore, {
  EffectFade,
  Mousewheel,
  Scrollbar,
  Autoplay,
} from "swiper";
import { Image } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([EffectFade, Scrollbar, Autoplay, Mousewheel]);

const IMAGES = [
  "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/951047fe-gif1.jpg",
  "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/a1c5c211-gif2.jpg",
  "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/71dbb914-gif3.jpg",
  "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/293149ef-gif4.jpg",
  "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/c71a1dcc-gif5.jpg",
  "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/f904ba4e-gif6.jpg",
  "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/1f5bd6af-gif7.jpg",
];

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
    <Swiper autoplay={{ delay: 2000 }} effect='fade'>
      {IMAGES.map((d, i) => (
        <SwiperSlide key={i}>
          <Image src={d} borderRadius='8px' objectFit='cover' boxSize='240px' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
