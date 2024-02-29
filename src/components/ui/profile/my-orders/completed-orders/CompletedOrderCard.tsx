'use client';
import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'reactstrap';

import { ButtonMaker, ItemRecap } from '@components';
import { Link } from '@navigation';
import { CustomerOrderType } from '@core';
import { useTranslate } from '@app/hooks';
import Date from '@assets/svgs/my-orders/date.svg';

import product from '@assets/images/product/image 98.png';
interface ICompletedOrderCardProps {
  order?: CustomerOrderType;
  productRating: boolean;
  setProductRating: React.Dispatch<React.SetStateAction<boolean>>;
  delivered: boolean;
  setDelivered: React.Dispatch<React.SetStateAction<boolean>>;
  setShowOrderReturn: React.Dispatch<React.SetStateAction<boolean>>;
}
const CompletedOrderCard = (props: ICompletedOrderCardProps) => {
  const { productRating, setProductRating, delivered, setDelivered, setShowOrderReturn } = props;
  const t = useTranslate('Comp_CompletedOrderCard');
  return (
    <div className="border p-3 rounded mb-3 complete-order-card">
      <div className="d-flex justify-content-between border-bottom">
        <div>
          <strong className="order-number d-block text-dark ">{t('ORDER_NUMBER')}: #123456</strong>
          <div className="d-flex align-items-center my-3">
            <Image src={Date} alt="date" width={0} height={0} />

            <p className="py-0 date text-dark ms-2">14 ديسمبر 2023</p>
          </div>
          <div className=" evaluation my-3">
            <ButtonMaker
              block={false}
              text={t('EVALUATE')}
              design="bg-transparent text-primary "
              onClick={() => setProductRating!(!productRating)}
            />
          </div>
        </div>

        <div>
          <Link
            onClick={() => setDelivered!(!delivered)}
            href={'#'}
            className="flex-between bg-light-blue text-primary   rounded-pill  p-2 px-3 fw-bold"
          >
            <p className="fw-bold font-14 me-2">{t('DELIVERED')}</p>
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </div>
      </div>
      <Row>
        <Col xl={4} md={6}>
          <ItemRecap
            title={`product name`}
            price={`100د.إ`}
            discount={`120 د.إ`}
            qty={`2`}
            imgSrc={product.src}
            imgSpace="col-md-5   "
            contentSpace="col-md-7 "
            imgClassName="border p-2 rounded-2"
            imgAlt="product"
            className="mb-0 border"
          />
        </Col>
        <Col xl={4} md={6}>
          <ItemRecap
            title={`product name`}
            price={`100د.إ`}
            discount={`120 د.إ`}
            qty={`2`}
            imgSrc={product.src}
            imgSpace="col-md-5   "
            contentSpace="col-md-7 "
            imgClassName="border p-2 rounded-2"
            imgAlt="product"
            className="mb-0 border"
          />
        </Col>
        <Col xl={4} md={6}>
          <ItemRecap
            title={`product name`}
            price={`100د.إ`}
            discount={`120 د.إ`}
            qty={`2`}
            imgSrc={product.src}
            imgSpace="col-md-5   "
            contentSpace="col-md-7 "
            imgClassName="border p-2 rounded-2"
            imgAlt="product"
            className="mb-0 border"
          />
        </Col>
      </Row>
      <div>
        <p className="text-start my-3 fw-semibold">
          {t('PAYMENT_METHOD')} :Credit card
          {/* {order?.inPayments[0]?.paymentMethod?.typeName} */}
        </p>

        <div className="product-return  mb-3">
          <ButtonMaker
            block={false}
            text={t('ORDER_RETURN')}
            design="border-disabled text-disabled"
            outline
            onClick={() => setShowOrderReturn(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default CompletedOrderCard;
