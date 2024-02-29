'use client';
import React, { useState } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import Image from 'next/image';
import { Steps } from 'primereact/steps';

import {
  ButtonMaker,
  CartSummary,
  ICartSummaryDataProps,
  ItemRecap,
  ShipmentDetails,
  ShippingAddress,
} from '@components';

import { useTranslate } from '@app/hooks';
import step1 from '@assets/svgs/my-orders/step1.svg';
import step2 from '@assets/svgs/my-orders/step2.svg';
import step3 from '@assets/svgs/my-orders/step3.svg';
import check from '@assets/images/check.svg';
import { address } from '../../../data/address';
import { shipmentDetails } from '../../../data';
import { orders } from '../../../data/OrderRecap';

interface IReturnStepsProps {
  btnText?: string;
  showCancelButton?: boolean;
  recoverySuccessfully?: boolean;
  showTitle?: boolean;
  index?: number;
}
const ReturnSteps = (props: IReturnStepsProps) => {
  const { btnText, showCancelButton = false, recoverySuccessfully = false, showTitle = true, index } = props;
  const t = useTranslate('COMP_Return_Details');
  const stepper = [
    { label: t('PREPARING'), icon: <Image src={step1} alt="step1" /> },
    { label: t('ON_ROAD'), icon: <Image src={step2} alt="step2" />, step: <Image src={step2} alt="step2" /> },
    {
      label: t('DELIVERED'),
      icon: <Image src={step3} alt="loading" />,
      menuItem: <Image src={step3} alt="step3" />,
    },
  ];

  const TableData: Array<ICartSummaryDataProps> = [
    { text: t('SUBTOTAL'), price: 30 },
    { text: t('DELIVERY_FEES'), price: 20 },
    { text: t('TOTAL'), price: 261 },
  ];
  return (
    <div className="view-returns">
      {recoverySuccessfully && (
        <div className="text-center">
          <Image src={check} alt="check" width={0} height={0} />
          <h3 className="text-dark my-3">{t('RETURNED_SUCCESSFULLY')}</h3>
        </div>
      )}
      {showTitle && (
        <div className="bg-light-gray flex-between p-3  rounded mb-3 ">
          <h3 className=" font-24 fw-bold  text-dark text-start ">{t('VIEW_RETURNS')}</h3>
          {showCancelButton && <ButtonMaker text={t('CANCEL_ORDER')} design="bg-transparent text-primary" />}
        </div>
      )}

      <div>
        <div className=" rounded mb-3 border">
          <h5 className=" mb-0 flex-between bg-light-gray text-dark p-3 mb-3"> {t('ORDER_NUMBER')} :1234</h5>
          {btnText && <ButtonMaker text={btnText} design="rounded-pill m-3" />}

          <div className="p-2">
            <Steps model={stepper} activeIndex={index} readOnly={false} className="m-2 pt-4" />{' '}
            <Row>
              {orders?.map((item, index) => (
                <Col className="col-12" key={index}>
                  <ItemRecap
                    title={item.name}
                    price={item.price}
                    discount={item.discount}
                    imgSrc={item.imgSrc}
                    imgAlt="product"
                    imgSpace="col-md-2  "
                    contentSpace="col-md-10 "
                    imgClassName="border p-2 rounded-2"
                    className=" mb-2 border "
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>

      <div>
        <div className=" rounded mb-3 border">
          <h5 className=" mb-0 flex-between bg-light-gray text-dark p-3 mb-3"> {t('SHIPPING_DETAILS')}</h5>
          <div className="shippment-info">
            <div className="px-3">
              <div className="p-3 border rounded mb-3">
                <ShipmentDetails data={shipmentDetails} />
              </div>

              <ShippingAddress data={address[0]} />
            </div>
          </div>
        </div>
        <div className="rounded mb-3 border ">
          <h5 className=" mb-0 flex-between bg-light-gray p-3">
            <p className="pill fw-bold "> {t('BILL')}</p>
            <Badge color="primary" className="rounded-pill badge">
              {t('CASH')}
            </Badge>
          </h5>
          <div className="order-summary-info">
            <CartSummary title={t('CART_SUMMARY')} data={TableData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnSteps;
