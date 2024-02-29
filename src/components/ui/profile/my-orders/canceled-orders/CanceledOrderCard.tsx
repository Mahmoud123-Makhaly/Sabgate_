'use client';
import React from 'react';
import { Col, Row } from 'reactstrap';
import Image from 'next/image';

import { ItemRecap } from '@components';
import { Link } from '@navigation';
import { useTranslate } from '@app/hooks';
import Date from '@assets/svgs/my-orders/date.svg';
import product from '@assets/images/product/image 98.png';
import { productDetails } from '../../../data';

const CanceledOrderCard = () => {
  const t = useTranslate('Comp_CanceledOrderCard');
  return productDetails.map((item, index) => (
    <div className="border p-3 rounded mb-3 complete-order-card" key={index}>
      <div className="d-flex justify-content-between border-bottom">
        <div>
          <strong className="order-number d-block">{t('ORDER_NUMBER')}: #123456</strong>
          <div className="d-flex align-items-center">
            <div className="d-flex">
              <Image src={Date} alt="date" width={0} height={0} className="ms-2" />
            </div>
            <div>
              <p className="py-0 date">14 ديسمبر 2023</p>
            </div>
          </div>
          <div className=" evaluation my-3"></div>
        </div>

        <div>
          <Link
            href={'#'}
            className="d-flex align-items-center bg-light-blue text-primary rounded-pill deliverd-btn pe-2 py-2"
          >
            <p className="px-2 py-0">{t('CANCELED')}</p>
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </div>
      </div>
      <Row>
        {productDetails.slice(0, 2).map((item, index) => (
          <Col md={6} key={index}>
            <ItemRecap
              title={`product name`}
              price={`100د.إ`}
              discount={`120 د.إ`}
              qty={`2`}
              imgSrc={product.src}
              imgAlt="product"
              imgSpace="col-md-4   "
              contentSpace="col-md-8 "
              imgClassName="border p-2 rounded-2"
              className="border"
            />
          </Col>
        ))}
      </Row>
      <div>
        <div>
          <p className="payment-method pb-0">
            {t('PAYMENT_METHOD')} :Credit card
            {/* {order?.inPayments[0]?.paymentMethod?.typeName} */}
          </p>
        </div>
      </div>
    </div>
  ));
};

export default CanceledOrderCard;
