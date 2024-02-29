import React from 'react';
import { CarouselMaker, ImageMaker } from '@components';
import ecg from '@assets/svgs/ecg.svg';
import blouki from '@assets/svgs/blouki.svg';
import ace from '@assets/svgs/ace.svg';
import ecc from '@assets/svgs/ecc.svg';
import adu from '@assets/svgs/adu.svg';
import { Container } from 'reactstrap';
import { useTranslate } from '@app/hooks';
const Clients = () => {
  const t = useTranslate('COMP_Clients');
  const clients = [
    <div key={0}>
      <ImageMaker src={ecg} alt="ecg" />
    </div>,
    <div key={1}>
      <ImageMaker src={blouki} alt="ecg" />
    </div>,
    <div key={2}>
      <ImageMaker src={ace} alt="ecg" />
    </div>,
    <div key={3}>
      <ImageMaker src={ecc} alt="ecg" />
    </div>,
    <div key={4}>
      <ImageMaker src={ecg} alt="ecg" />
    </div>,
    <div key={5}>
      <ImageMaker src={adu} alt="amazon" />
    </div>,
    <div key={6}>
      <ImageMaker src={ecg} alt="amazon" />
    </div>,
    <div key={7}>
      <ImageMaker src={blouki} alt="amazon" />
    </div>,
  ];
  return (
    <div className="py-4">
      <h4 className="text-center text-primary mb-4">{t('OUR_CLIENTS')}</h4>
      <CarouselMaker
        numVisible={5}
        items={clients}
        delay={0.001}
        navigation={false}
        pagination={false}
        speed={2000}
        spaceBetween={24}
        disableOnInteraction={false}
        loop
        autoplay
      />
    </div>
  );
};

export default Clients;
