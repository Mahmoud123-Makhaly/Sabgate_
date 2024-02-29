'use client';
import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'reactstrap';

import { BreadCrumb, CartSummary } from '@components';
import CartItem from './CartItem';

import { useTranslate } from '@app/hooks';
const ShoppingCart = () => {
  const t = useTranslate('COMP_ShoppingCart');
  return (
    <Container className="mt-3">
      <Row>
        <Col md={12} className="mb-3">
          <BreadCrumb paths={['/', t('SHOPPING_CART')]} />
        </Col>
        <Col md={8} className="me-5">
          <CartItem />
          <CartItem />
          <CartItem />
        </Col>
        <Col md={3}>
          <div>
            <CartSummary
              title={t('CART_SUMMARY')}
              data={[
                {
                  text: t('SUB_TOTAL'),
                  price: '100',
                },
                {
                  text: t('DELIVERY_CHARGE'),
                  price: '100',
                },
                {
                  text: t('TAXES'),
                  price: '100',
                },
                {
                  text: t('TOTAL'),
                  price: '100',
                },
              ]}
            />
            <Link
              href="/checkout"
              className="checkout-btn bg-primary text-white p-2 d-flex rounded justify-content-center"
            >
              {t('CHECKOUT_BTN')}
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
