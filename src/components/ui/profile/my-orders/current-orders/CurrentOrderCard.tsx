'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import { ButtonMaker, ItemRecap } from '@components';
import { Link } from '@navigation';
import { CustomerOrderType } from '@core';
import { useTranslate } from '@app/hooks';
import Date from '@assets/svgs/my-orders/date.svg';
import { Col, Row } from 'reactstrap';
import product from '@assets/images/product/image 98.png';
import OrderHistory from '../OrderHistory';
interface ICompletedOrderCardProps {
  order?: CustomerOrderType;
  delivered?: boolean;
  setDelivered?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  productRating?: boolean;
  setProductRating: React.Dispatch<React.SetStateAction<boolean>>;
  setShowOrderReturn: React.Dispatch<React.SetStateAction<boolean>>;
}
const CurrentOrderCard = (props: ICompletedOrderCardProps) => {
  const { order, delivered, setDelivered, setShowOrderReturn } = props;
  const t = useTranslate('Comp_CurrentOrderCard');
  const [toggle, setToggle] = useState(true);
  return toggle ? (
    <div className="border p-3 rounded mb-3 complete-order-card">
      <div className="d-flex justify-content-between border-bottom">
        <div>
          <strong className="order-number d-block text-dark ">
            {t('ORDER_NUMBER')}: #123456
            {/* {order?.number} */}
          </strong>
          <div className="d-flex align-items-center my-3">
            <Image src={Date} alt="date" width={0} height={0} />

            <p className="py-0 date text-dark ms-2">
              {/* {order?.createdDate}  */}
              14 ديسمبر 2023
            </p>
          </div>
          <div className=" evaluation my-3">
            <ButtonMaker
              block={false}
              text={t('EVALUATE')}
              design="bg-transparent text-primary "
              onClick={() => setToggle!(!toggle)}
            />
          </div>
        </div>

        <div>
          <Link
            onClick={() => setDelivered!(!delivered)}
            href={'#'}
            className="flex-between bg-light-blue text-primary   rounded-pill  p-2 px-3 fw-bold"
          >
            <p className="fw-bold font-14 me-2">{t('DETAILS')}</p>
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
            imgAlt="product"
            imgSpace="col-md-5   "
            contentSpace="col-md-7 "
            imgClassName="border p-2 rounded-2"
            className="border"
          />
        </Col>
        <Col xl={4} md={6}>
          <ItemRecap
            title={`product name`}
            price={`100د.إ`}
            discount={`120 د.إ`}
            qty={`2`}
            imgSrc={product.src}
            imgSpace="col-md-5  "
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
        <p className="text-start mb-3 fw-semibold">
          {t('PAYMENT_METHOD')} :Credit card
          {/* {order?.inPayments[0]?.paymentMethod?.typeName} */}
        </p>

        <div className="product-return ">
          <ButtonMaker
            block={false}
            text={t('ORDER_RETURN')}
            outline
            design="border-disabled text-disabled  "
            onClick={() => setShowOrderReturn(false)}
          />
        </div>
      </div>
    </div>
  ) : (
    <OrderHistory />
  );
};

export default CurrentOrderCard;
