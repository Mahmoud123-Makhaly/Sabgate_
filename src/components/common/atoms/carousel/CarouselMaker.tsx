'use client';

import React, { ReactNode, useState } from 'react';
import { Swiper, SwiperClass, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Thumbs } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/scss';
import 'swiper/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/autoplay';
SwiperCore.use([Navigation, Thumbs]);
interface ICarousel extends SwiperProps {
  loop?: boolean;
  numVisible: number;
  orientation?: 'vertical' | 'horizontal';
  items: Array<ReactNode>;
  pagination?: boolean;
  navigation?: boolean;
  delay?: number;
  speed?: number;
  spaceBetween?: number;
  freeMode?: boolean;
  disableOnInteraction?: boolean;
  showThumbs?: boolean;
  autoplay?: boolean;
}

const CarouselMaker = (props: ICarousel) => {
  const {
    items,
    loop = true,
    numVisible,
    orientation = 'horizontal',
    navigation = true,
    pagination = true,
    delay = 3000,
    speed,
    spaceBetween,
    freeMode,
    disableOnInteraction = true,
    showThumbs,
    autoplay,
    ...rest
  } = props;

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  const autoplayOptions = autoplay && {
    delay: delay,
    disableOnInteraction: disableOnInteraction,
  };

  const mainSwiperParams = {
    modules: showThumbs ? [Navigation, Pagination, A11y, Thumbs] : [Navigation, Pagination, A11y],
    pagination: pagination ? { clickable: true } : false,
    slidesPerView: numVisible,
    spaceBetween: spaceBetween,
    autoplay: autoplayOptions,
    speed: speed,
    direction: orientation,
    loop: loop,
    navigation: navigation,
    freeMode: freeMode,
    thumbs: showThumbs && thumbsSwiper ? { swiper: thumbsSwiper } : undefined,
    ...rest,
  };

  const thumbSwiperParams = {
    modules: [Navigation, Pagination, A11y, Thumbs],
    navigation: true,
    freeMode: true,
    loop: true,
    slidesPerView: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    onSwiper: setThumbsSwiper,
    centeredSlides: true,
  };

  return (
    <div className={`${showThumbs && 'thumb-swiper'}`}>
      <Swiper {...mainSwiperParams} className="main-swiper">
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index} className="flex-center">
              {item}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {showThumbs && (
        <Swiper {...thumbSwiperParams} className="thumbnail-swiper">
          <div className="thumbnail-slides px-5">
            {items.map((item, index) => {
              return (
                <SwiperSlide key={index} className="flex-center">
                  {item}
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      )}
    </div>
  );
};

export default CarouselMaker;
