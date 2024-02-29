import React from 'react';
import Image from 'next/image';
import { Badge, Row } from 'reactstrap';

import check from '@assets/svgs/arabic-icon.svg';
import { useTranslate } from '@app/hooks';
import { ButtonMaker, ItemRecap, ShippingAddress, ICartSummaryDataProps, CartSummary } from '@components';
import { address } from '../../../../data/address';
import product from '@assets/images/product/image 98.png';

const ReturnInvoice = () => {
  const t = useTranslate('Comp_Order_Return_invoice');
  const calendarDays = [
    { time: '10/12', text: t('MONDAY') },
    { time: '10/03', text: t('EVENING') },
  ];

  const TableData: Array<ICartSummaryDataProps> = [
    { text: t('SUBTOTAL'), price: 30 },
    { text: t('DELIVERY_FEES'), price: 20 },
    { text: t('TOTAL'), price: 261 },
  ];
  return (
    <div className="return-invoice ">
      <Image src={check} alt="check" width={0} height={0} />
      <h3 className="text-center text-info font-24 fw-bold invoice-title"> {t('RETURN_SUCCESSFULLY')} </h3>
      <p className="font-18 text-info return-message text-center">{t('RETURN_MESSAGE')}</p>
      <div className="order-info rounded">
        <h6 className="order-info-title flex-between m-0">
          <span className="order-number text-14 text-info">{t('ORDER_NUMBER')} :1234</span>

          <ButtonMaker block={false} text={t('CANCEL_ORDER')} design="text-primary bg-white" />
        </h6>
        <div className="order-info-info p-3">
          <Row>
            <ItemRecap
              title={`product name`}
              price={`100د.إ`}
              discount={`120 د.إ`}
              qty={`2`}
              imgSrc={product.src}
              imgAlt="product"
              description="350 جرام"
              className="mb-3"
            />
          </Row>
          <Row className=" ">
            <ItemRecap
              title={`product name`}
              price={`100د.إ`}
              discount={`120 د.إ`}
              qty={`2`}
              imgSrc={product.src}
              imgAlt="product"
              description="350 جرام"
            />
          </Row>
        </div>
      </div>
      <div className="shippment-details   rounded mb-3">
        <h5 className="shippment-title mb-0"> {t('SHIPPMENT_DELIVERY_ADDRESS')}</h5>
        <div className="shippment-info">
          <ShippingAddress data={address[0]} />
          <h5 className="font-16 text-info fw-bold  my-3"> {t('SHIPPMENT_DELIVERY_TIME')}</h5>
          {calendarDays.map((item, index) => {
            return (
              <ButtonMaker key={index} design={'bg-primary me-3'}>
                <span className="d-block   text-12 date date-text">{item.time}</span>
                <span className="d-block   text-12 date-text">{item.text}</span>
              </ButtonMaker>
            );
          })}
        </div>
      </div>
      <div className="order-summary rounded ">
        <h5 className="order-summary-title mb-0 flex-between">
          <p className="pill"> {t('BILL')}</p>
          <Badge color="primary" className="rounded-pill badge">
            {t('CASH')}
          </Badge>
        </h5>
        <div className="order-summary-info">
          <CartSummary title={t('CART_SUMMARY')} data={TableData} />
        </div>
      </div>
    </div>
  );
};

export default ReturnInvoice;
