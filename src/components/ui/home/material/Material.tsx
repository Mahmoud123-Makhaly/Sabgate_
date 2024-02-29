'use client';
import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'reactstrap';
import { ButtonMaker, IconLink } from '@components';
import productData from '../../data/ProductData';
import { ProductCard } from '@components';
import compare from '@assets/svgs/compare.svg';
import { useToast, useTranslate } from '@app/hooks';
const Material = () => {
  const t = useTranslate('COMP_Material');
  const toast = useToast();
  const buttons = (
    <React.Fragment>
      <ButtonMaker outline design="text-primary mb-2 fw-bold" text={t('PRICE_LIST')} block />
      <div className="d-flex">
        <ButtonMaker
          text={t('ADD_TO_CART')}
          design="fw-bold"
          block
          onClick={() => toast.success('added to cart successfully')}
        />
        <ButtonMaker outline design="p-2 ms-2 compare">
          <Image src={compare} alt="" />
        </ButtonMaker>
      </div>
    </React.Fragment>
  );
  const { img, title, description, specs, price, pricePer, badgeText } = productData;
  return (
    <React.Fragment>
      <div className="flex-between">
        <h4>{t('HEAT_ISOLATE')}</h4>
        <IconLink text={t('SEE_ALL')} href={'/list'} color="white" textColor="primary" iconbg="primary" />
      </div>
      <div className="flex-between overflow-auto">
        <div className="p-3">
          <ProductCard
            img={img.src}
            title={title}
            specs={specs}
            buttons={buttons}
            description={description}
            price={price}
            pricePer={pricePer}
            badgeText={badgeText}
          />
        </div>
        <div className="p-3">
          <ProductCard
            img={img.src}
            title={title}
            specs={specs}
            buttons={buttons}
            description={description}
            price={price}
            pricePer={pricePer}
            badgeText={badgeText}
          />
        </div>
        <div className="p-3">
          <ProductCard
            img={img.src}
            title={title}
            specs={specs}
            buttons={buttons}
            description={description}
            price={price}
            pricePer={pricePer}
            badgeText={badgeText}
          />
        </div>
        <div className="p-3">
          <ProductCard
            img={img.src}
            title={title}
            specs={specs}
            buttons={buttons}
            description={description}
            price={price}
            pricePer={pricePer}
            badgeText={badgeText}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Material;
