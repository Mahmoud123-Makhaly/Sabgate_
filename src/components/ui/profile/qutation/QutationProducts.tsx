'use client';
import React from 'react';
import { ButtonMaker, ProductCard } from '@components';
import productData from '../../data/ProductData';
import compare from '@assets/svgs/compare.svg';
import Image from 'next/image';
import { Row, Col } from 'reactstrap';

const QutationProducts = () => {
  const buttons = (
    <React.Fragment>
      <ButtonMaker outline design="text-primary mb-2 fw-bold" text="طلب عرض أسعار" block />
      <div className="d-flex">
        <ButtonMaker text="إضافة إلي عربة التسوق " design="fw-bold" block />
        <ButtonMaker outline design="p-2 ms-2 compare">
          <Image src={compare} alt="" />
        </ButtonMaker>
      </div>
    </React.Fragment>
  );
  const { img, title, description, price, pricePer, badgeText } = productData;

  const DummyProducts = [];
  for (let i = 0; i < 9; i++) {
    DummyProducts.push({
      title: title,
      imgSrc: img.src,
      disc: description,
      price: price,
      badgeText: badgeText,
      pricePer: pricePer,
      buttons: buttons,
    });
  }
  return (
    <div>
      <div className="border rounded-4 qutation-products paddingx-30 paddingy-20">
        <Row className="g-3 w-100 mb-3">
          <Col md={12}>
            <h4>أختر المنتجات التي تريد لها عرض سعر</h4>
          </Col>
          {DummyProducts?.map((product, i) => (
            <Col md={4} key={i} className="px-2 card-column col-12">
              <ProductCard
                img={product.imgSrc}
                title={product.title}
                badgeText={product.badgeText}
                buttons={product.buttons}
                description={product.disc}
                price={product.price}
                pricePer={product.pricePer}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default QutationProducts;
