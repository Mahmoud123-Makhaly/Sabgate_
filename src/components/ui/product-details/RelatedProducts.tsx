'use client';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Image from 'next/image';

import { ButtonMaker } from '@components';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';
import showAll from '@assets/svgs/product-details/show-all.svg';
import noImg from '@assets/svgs/noimg.svg';
import { ProductCard } from '@components';
import productData from '../../../components/ui/data/ProductData';
import compare from '@assets/svgs/compare.svg';
const RelatedProducts = ({ product }: { product: any }) => {
  const { img, title, description, specs, price, pricePer, badgeText } = productData;
  const t = useTranslate('COMP_ProductDetails.RelatedProducts');
  const data = [];
  const buttons = (
    <React.Fragment>
      <ButtonMaker outline design="text-primary mb-2 fw-bold" text={t('REQUEST_PRICE_VIEW')} block />
      <div className="d-flex">
        <ButtonMaker text={t('ADD_TO_CART')} design="fw-bold" block />
        <ButtonMaker outline design="p-2 ms-2 compare">
          <Image src={compare} alt="" />
        </ButtonMaker>
      </div>
    </React.Fragment>
  );
  for (let i = 0; i < 5; i++) {
    data.push({
      title: 'لوح رغوة البوليسترين',
      imgSrc: noImg,
      text: '50 سعر حراري',
      price: product?.price?.actual?.formattedAmount,
      hasIcon: 'fff',
      disc: 'لوح رغوة البوليسترين مبثوق ، رووف مات ، مقاس 600مم * 1250مم ، الكثافة (32-35) كغ/سم 3 ، السماكة (50مم)',
      btn: <ButtonMaker block={true} text={t('ADD_TO_CART')} />,
    });
  }
  return (
    <section>
      <Row>
        <Col className="col-12 flex-between">
          <h1 className="py-3 font-24 fw-bold">{t('SIMILAR_PRODUCTS')}</h1>
          <Link href={'#'} className="d-flex align-items-center">
            <p className="pe-2">   {t("SEE_ALL")}</p>
            <Image src={showAll} alt="showAll" />
          </Link>
        </Col>
        <Col>
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
        </Col>
        <Col>
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
        </Col>
        <Col>
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
        </Col>
        <Col>
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
        </Col>
      </Row>
    </section>
  );
};

export default RelatedProducts;
