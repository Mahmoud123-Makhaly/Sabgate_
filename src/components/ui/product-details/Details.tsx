'use client';

import React, { useState } from 'react';
import { Badge, Col, Container, Row } from 'reactstrap';
import Image from 'next/image';
import { Rating as Rate } from 'primereact/rating';

import { ButtonMaker, CarouselMaker, Counter, ImageMaker } from '@components';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';

import facebook from '@assets/svgs/contact-us/facebook.svg';
import instagram from '@assets/svgs/contact-us/insta.svg';
import whatsApp from '@assets/svgs/contact-us/whatsapp.svg';
import x from '@assets/svgs/contact-us/x.svg';
import paintrst from '@assets/svgs/contact-us/paintrst.svg';
import mail from '@assets/svgs/contact-us/mail.svg';
import messenger from '@assets/svgs/contact-us/messanger.svg';
import compare from '@assets/svgs/product-details/compare.svg';
import noImage from '@assets/svgs/noimg.svg';
import engineer from '@assets/images/home/technichian.jpg';
import fact from '@assets/images/home/factory.jpg';
import ShareInSocial from './ShareInSocial';
import Properties from './Properties';
import OptionItem from './OptionItem';

interface IDetailsProps {
  product: any;
}
const Details = (props: IDetailsProps) => {
  const { product } = props;
  const [count, setCount] = useState(1);
  const t = useTranslate('COMP_ProductDetails.Details');
  const handleAddToCart = async (id: string) => {};

  const handleChangeIcon = () => {
    if (product?.inWishlist) {
      product.inWishlist = false;
    } else {
      product!.inWishlist = true;
    }
  };

  const properties = [
    {
      name: t('SIZE'),
      value: '600مم * 1250مم',
    },
    {
      name: t('DENSITY'),
      value: '(32-35) كغ/سم 3',
    },
    {
      name: t('THICKNESS'),
      value: '(50مم)',
    },
  ];

  return (
    <Row>
      <Col md={5}>
        <CarouselMaker
          autoplay={false}
          items={[
            ,
            <ImageMaker src={noImage} alt="noImage" key={0} />,
            <ImageMaker src={noImage} alt="engineer" key={1} />,
            <ImageMaker src={fact} alt="fact" key={2} />,
            <ImageMaker src={noImage} alt="fact" key={3} />,
            <ImageMaker src={noImage} alt="fact" key={4} />,
          ]}
          numVisible={1}
          navigation={false}
          showThumbs={true}
          spaceBetween={10}
        />
      </Col>
      <Col md={7}>
        <div className="border-bottom pb-3">
          <div className="flex-between">
            <h3 className="fw-bold text-black ">Product Name</h3>
            <div className="d-flex">
              <Badge color="warning" className="me-2 rounded-4">
                {t('SAMPLE_REQUEST')}
              </Badge>
              <Badge color="success" className="rounded-4">
                {t('NEW')}
              </Badge>
            </div>
          </div>
          <div className="pb-2 flex-start">
            <div className="me-2 product-rate">
              <Rate value={5} cancel={false} readOnly />
            </div>
            <div>
              <p>20 {t('EVALUATE')}</p>
            </div>
          </div>
          <div className="d-flex">
            <p className="fw-bold text-black font-24">178.00 د.إ.</p>
            <del className="fw-bold text-dimmed font-24">360.00 د.إ.</del>
          </div>
          <p className="text-gray mt-3"> {t('DELIVERED_DAY')} يومين</p>
        </div>
        <div className="border-bottom py-3">
          <p className="text-gray m-0 p-0 text-break">
            كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من
            الأحرف بشكل عشوائي أخذته الأحرف.
          </p>
        </div>
        <Row className="border-bottom py-3">
          {properties.map((property, index) => (
            <Col md={3} key={index}>
              <Properties name={property.name} value={property.value} />
            </Col>
          ))}
        </Row>
        <Row className="my-3 border-bottom pb-3">
          <Col md={6}>
            <OptionItem
              id="one-side"
              label="One Side Aluminum Foil"
              price={'178.00 د.إ.'}
              type="radio"
              containerClassName="p-3"
            />
          </Col>
          <Col md={6}>
            <OptionItem id="Unfaded" label="Unfaded" price={'147.00 د.إ.'} type="radio" containerClassName="p-3" />
          </Col>
        </Row>
        <div className="border-bottom pb-2 mb-3">
          <ShareInSocial
            images={[
              {
                imgSrc: facebook,
                href: '#',
                ImageClassName: 'me-5',
              },
              {
                imgSrc: whatsApp,
                href: '#',
                ImageClassName: 'me-5',
              },
              {
                imgSrc: instagram,
                href: '#',
                ImageClassName: 'me-5',
              },
              {
                imgSrc: x,
                href: '#',
                ImageClassName: 'me-5',
              },
              {
                imgSrc: paintrst,
                href: '#',
                ImageClassName: 'me-5',
              },
              {
                imgSrc: mail,
                href: '#',
              },
            ]}
            title={t('SHARE')}
            className="d-flex pe-3 mb-3"
          />
        </div>
        <Row className="mb-3 border-bottom pb-3">
          <Col md={6}>
            <ButtonMaker
              text={t('REQUEST_PRICE_VIEW')}
              design="bg-transparent text-primary me-2 w-100 border-light fw-bold"
            />
          </Col>
          <Col md={6}>
            <ButtonMaker text={t('COMPARISON')} design="bg-transparent text-primary w-100 border-light fw-bold">
              <Image alt="compare" src={compare} className="ms-3" />
            </ButtonMaker>
          </Col>
        </Row>
        <Row className="mb-3 border-bottom pb-3">
          <Col md={4}>
            <Link href={'#'} className=" me-2 w-100 d-flex border px-3 py-2 rounded">
              <div className="border-end me-2 pe-2">
                <Image alt="whatsApp" src={whatsApp} />
              </div>
              <p> {t('CONTACT_US')}</p>
            </Link>
          </Col>
          <Col md={4}>
            <Link href={'#'} className=" me-2 w-100 d-flex border px-3 py-2 rounded">
              <div className="border-end me-2 pe-2">
                <Image alt="messenger" src={messenger} />
              </div>
              <p> {t('CONTACT_US')}</p>
            </Link>
          </Col>
          <Col md={4}>
            <Link href={'#'} className=" me-2 w-100 d-flex border px-3 py-2 rounded">
              <div className="border-end me-2 pe-2">
                <Image alt="mail" src={mail} />
              </div>
              <p> {t('CONTACT_US')}</p>
            </Link>
          </Col>
        </Row>
        <div className="d-flex align-items-center">
          <div>
            <Counter count={count} setCount={setCount} />
          </div>
          <div className="flex-grow-1 px-2 ">
            <ButtonMaker block={true} text={t('ADD_TO_CART_BTN')} design="add-to-cart" onClick={handleAddToCart} />
          </div>
          <div>
            <i
              className={`padding-7 font-24 ${
                product?.inWishlist ? 'fa-heart fa-solid' : 'fa-regular fa-heart'
              } text-primary border rounded`}
              onClick={handleChangeIcon}
            ></i>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Details;
