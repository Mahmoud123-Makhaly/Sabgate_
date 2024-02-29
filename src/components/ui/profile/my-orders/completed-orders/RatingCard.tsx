'use client';
import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Rating } from 'primereact/rating';
import { Nullable } from 'primereact/ts-helpers';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { ButtonMaker, ImageMaker, Modal } from '@components';
import { useTranslate } from '@app/hooks';

import ProductRatingModal from '../canceled-orders/rating/ProductRatingModal';
import DeliveryRatingModal from './delivery-rating/DeliveryRatingModal';
import RatingFeedBackModal from './delivery-rating/RatingFeedBackModal';
interface IRatingCard {
  data: {
    imgSrc: string | StaticImport;
    imgAlt: string;
    title: string;
  };
}
const RatingCard = (props: IRatingCard) => {
  const { data } = props;
  const t = useTranslate('Comp_Rating_Card');
  const [ratingValue, setRatingValue] = useState<Nullable<number>>(null);
  const [isOpenModal, setIsOpenModal] = useState<'product' | 'feedback' | 'delivery' | string>('');
  const toggleShow = () => {
    setIsOpenModal('');
  };
  return (
    <div className=" border rounded mb-3 p-3">
      <Row>
        <Col md={2} className="pe-0">
          <div className="p-3 border rounded-2">
            <ImageMaker src={data.imgSrc} alt={data.imgAlt} />
          </div>
        </Col>
        <Col md={10}>
          <div>
            <p className="text-start text-dark fw-bold"> {data.title}</p>
            <div className="my-3 border-top border-bottom py-3">
              <Rating value={ratingValue || 0} onChange={e => setRatingValue(e.value)} cancel={false} />
            </div>
          </div>
          <div className="d-flex justify-content-center justify-content-md-start">
            <ButtonMaker
              onClick={() => setIsOpenModal('product')}
              text={t('PRODUCT_EVALUATE')}
              design="text-primary bg-white border-primary me-4"
            >
              <i className="fa-regular fa-pen-to-square mx-1"></i>
            </ButtonMaker>
            <ButtonMaker
              text={t('DELIVERY_EVALUATE')}
              design="text-primary bg-white border-primary"
              onClick={() => setIsOpenModal('delivery')}
            >
              <i className="fa-regular fa-pen-to-square mx-1"></i>
            </ButtonMaker>
          </div>
        </Col>
        <Modal toggleShow={toggleShow} isOpen={isOpenModal === 'product'} size="lg">
          <ProductRatingModal setIsOpenModal={setIsOpenModal} />
        </Modal>
        <Modal toggleShow={toggleShow} isOpen={isOpenModal === 'feedback'} size="md">
          <RatingFeedBackModal setIsOpenModal={setIsOpenModal} />
        </Modal>
        <Modal isOpen={isOpenModal === 'delivery'} size="lg" toggleShow={toggleShow}>
          <DeliveryRatingModal setIsOpenModal={setIsOpenModal} />
        </Modal>
      </Row>
    </div>
  );
};

export default RatingCard;
