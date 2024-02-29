'use client';

import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import { BreadCrumb, CartSummary, ShippingAddress, ShipmentDetails } from '@components';
import { useTranslate } from '@app/hooks';
import { ItemRecap } from '@components';
import { address } from '../data/address';
interface IInvoiceProps {
  id: string;
}
const Invoice = (props: IInvoiceProps) => {
  const { id } = props;
  const t = useTranslate('COMP_Invoice');
  const TableData = [
    { text: t('TOTAL_SUB'), price: '300د.إ' },
    { text: t('DELIVERY_FEES'), price: '20د.إ' },
    { text: t('TOTAL'), price: '350 د.إ' },
  ];
  const shipmentDetails = [
    {
      label: 'رقم الطلب:',
      value: '#123057822',
    },
    {
      label: 'المبلغ:',
      value: '381.65 د.إ',
    },
    {
      label: 'تاريخ الطلب:',
      value: '12 نوفمبر 2023 - الساعة 10 صباحا',
    },
    {
      label: 'تاريخ التوصيل:',
      value: '12 نوفمبر 2023 - الساعة 11 صباحا',
    },
  ];
  return (
    <Container>
      <div className="pt-4">
        <Row>
          <Col className="col-12 pt-4 pb-3">
            {/* <BreadCrumb
              title={t('BREAD_MAIN')}
              paths={[
                {
                  title: t('BREAD_SHOPPING_CART'),
                  semanticUrl: '/cart',
                },
                {
                  title: t('BREAD_CHECKOUT'),
                  semanticUrl: '/checkout',
                },
                {
                  title: t('BREAD_ORDER_INVOICE'),
                  semanticUrl: `/invoice/${id}`,
                },
              ]}
            /> */}
          </Col>
        </Row>

        <div className="text-center">
          <i className="bg-success rounded-circle p-2 fa-solid fa-check fa-2x text-white"></i>
        </div>
        <h5 className="fw-bold text-center my-4 font-24 text-black">{t('ORDER_COMPLETED')}</h5>
        <div className="p-3 border mt-2">
          <h5 className="my-3 font-18 text-black">{t('ORDER_CONFIRMATION')}</h5>
          <hr />
          <ShipmentDetails data={shipmentDetails} />
          <hr />
          <ShippingAddress data={address[0]} />
          <hr />
          <h6 className="fw-bold mb-3 text-black"> {t('ORDER_DETAILS')}</h6>
          <ItemRecap title={`product name`} price={`100د.إ`} discount={`120 د.إ`} qty={`2`} className="border ps-3" />
          <ItemRecap title={`product name`} price={`100د.إ`} discount={`120 د.إ`} qty={`2`} className="border ps-3" />
          <hr />
          <Row>
            <Col md={3}>
              <div>
                <CartSummary data={TableData} title={t('ORDER_SUMMARY')} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <h5 className="text-center mt-4 mb-5 fw-bold text-black">{t('THANKS_MESSAGE')}</h5>
    </Container>
  );
};

export default Invoice;
