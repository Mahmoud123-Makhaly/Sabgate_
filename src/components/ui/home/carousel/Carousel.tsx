'use client';
import React from 'react';
import { ButtonMaker, CarouselMaker, IconLink, ImageMaker } from '@components';
import slider from '@assets/images/home/slider.png';
import Image from 'next/image';
import logo from '@assets/svgs/sab-logo.svg';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';
const Carousel = () => {
  const t = useTranslate('COMP_HomeCarousel');
  const slides = [
    <div className="position-relative" key={0}>
      <div className="position-absolute content-container">
        <div className=" h-carousel-content gap-4">
          <ImageMaker src={logo} alt="" className="w-50" />
          <h4 className="fw-bold m-0">SAB Gate</h4>
          <p className="text-primary fw-bold">{t('SAB-PLATFORM')}</p>
          <IconLink fill text={t('SHOP_PRODUCtS')} href={'/list'} color="orange" />
        </div>
      </div>
      <ImageMaker src={slider} alt="" className="carousel-img" />
    </div>,
    <div className="position-relative" key={1}>
      <div className="position-absolute content-container">
        <div className=" h-carousel-content gap-4">
          <ImageMaker src={logo} alt="" className="w-50" />
          <h4 className="fw-bold m-0">SAB Gate</h4>
          <p className="text-primary fw-bold">{t('SAB-PLATFORM')}</p>
          <IconLink fill text={t('SHOP_PRODUCtS')} href={'/list'} color="orange" />
        </div>
      </div>
      <ImageMaker src={slider} alt="" className="carousel-img" />
    </div>,
  ];
  const hideNotification = () => {
    const notify = document.getElementById('notification');
    if (notify) {
      notify.classList.add('d-none');
    }
  };
  return (
    <div className="position-relative home-carousel">
      <div className="bg-warning w-100 flex-between" id="notification">
        <div className="bg-primary text-white px-3 py-2 w-25 text-end font-14">{t('DISCOVER')}</div>
        <div className="flex-evenly w-75 ">
          <Link href={'./service'} className="text-center  font-14">
            {t('PROJECT-HELP')}
            <i className="fa-solid fa-arrow-right ms-3 p-1 border border-primary rounded-circle"></i>
          </Link>
          <ButtonMaker close design="border rounded-circle font-14 border-gray" onClick={hideNotification} />
        </div>
      </div>
      <CarouselMaker numVisible={1} items={slides} />
      <div className="position-absolute contact">
        <p>{t('CONTACT_US')}</p>
        <a href="tel:+971600541110" className="font-24 fw-bold">
          +971 600 54 1110
        </a>
      </div>
    </div>
  );
};

export default Carousel;
