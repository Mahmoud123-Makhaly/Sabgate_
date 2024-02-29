import React from 'react';
import { Badge, Col, Row } from 'reactstrap';

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
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import step1 from '@assets/svgs/my-orders/step1.svg';
import step2 from '@assets/svgs/my-orders/step2.svg';
import step3 from '@assets/svgs/my-orders/step3.svg';
import Image from 'next/image';
import { address } from '../../../data/address';
import { shipmentDetails } from '../../../data';

interface IReturnDetails {
  products: Array<{
    title: string;
    img: string | StaticImport;
    price: number;
    discount?: number;
    currency?: string;
    quantity?: number;
  }>;
}
const ReturnDetails = (props: IReturnDetails) => {
  const { products } = props;
  const t = useTranslate('COMP_Return_Details');
  const stepper = [
    { label: t('PREPARING'), icon: <Image src={step1} alt="step1" /> },
    { label: t('ON_ROAD'), icon: <Image src={step2} alt="step2" />, step: <Image src={step2} alt="step2" /> },
    { label: t('DELIVERED'), icon: <Image src={step3} alt="loading" />, menuItem: <Image src={step3} alt="step3" /> },
  ];

  const TableData: Array<ICartSummaryDataProps> = [
    { text: t('SUBTOTAL'), price: 30 },
    { text: t('DELIVERY_FEES'), price: 20 },
    { text: t('TOTAL'), price: 261 },
  ];
  return (
    <div className="view-returns">
      <h3 className="bg-light-gray font-24 fw-bold  p-3 rounded mb-3 text-dark text-start mb-3">{t('VIEW_RETURNS')}</h3>
      <div>
        <Steps model={stepper} />
      </div>
      <div className="border p-1 rounded mb-3">
        <Row>
          {products.map((product, index) => (
            <Col className="col-12" key={index}>
              <ItemRecap
                title={product.title}
                price={product.price}
                discount={product.discount}
                qty={product.quantity}
                imgSrc={product.img}
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
      <div>
        {/* <div className="shippment-details rounded mb-3 border">
          <h5 className="mb-0 flex-between bg-light-gray text-dark p-3 mb-3"> {t('SHIPPMENT_DELIVERY_ADDRESS')}</h5>
          <div className="shippment-info p-3">
            <ShippingAddress data={address} />
          </div>
        </div> */}
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

export default ReturnDetails;
