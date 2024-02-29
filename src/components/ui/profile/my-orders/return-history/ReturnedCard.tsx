import React from 'react';
import Image from 'next/image';

import Date from '@assets/svgs/my-orders/date.svg';
import { useTranslate } from '@app/hooks';
import { Col, Row } from 'reactstrap';
import { ButtonMaker, ItemRecap } from '@components';
import product from '@assets/images/product/image 98.png';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
interface IReturnedCard {
  orderNumber: string | number;
  orderDate: string;
  products: Array<{
    title: string;
    img: string | StaticImport;
    price: number;
    discount?: number;
    currency?: string;
    quantity?: number;
  }>;
  seeDetails?: React.Dispatch<React.SetStateAction<number>>;
}

const ReturnedCard = (props: IReturnedCard) => {
  const { orderDate, orderNumber, products, seeDetails } = props;
  const t = useTranslate('Comp_ReturnedCard');

  return (
    <div className="border p-3 rounded mb-3 complete-order-card">
      <Row>
        <Col className="d-flex justify-content-between border-bottom">
          <div>
            <strong className="order-number d-block mb-3">
              {t('ORDER_NUMBER')}: {orderNumber}
            </strong>
            <div className="d-flex align-items-center">
              <div className="d-flex ">
                <Image src={Date} alt="date" width={0} height={0} className=" me-3" />
              </div>
              <div>
                <p className="py-0 date ">{orderDate}</p>
              </div>
            </div>
            <div className=" evaluation my-3"></div>
          </div>
          <div>
            <ButtonMaker
              design="d-flex align-items-center bg-light-blue text-primary rounded-pill deliverd-btn pe-2 py-2"
              onClick={seeDetails}
            >
              <p className="px-2 py-0">{t('DETAILS')}</p>
              <i className="fa-solid fa-chevron-right"></i>
            </ButtonMaker>
          </div>
        </Col>
      </Row>
      <Row>
        {products.map((product, index) => (
          <Col md={6} key={index}>
            <ItemRecap
              title={`product name`}
              price={`100د.إ`}
              discount={`120 د.إ`}
              qty={`2`}
              imgSrc={product.img}
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
          <p className="payment-method pb-0 text-start">
            {t('PAYMENT_METHOD')} :Credit card
            {/* {order?.inPayments[0]?.paymentMethod?.typeName} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnedCard;
