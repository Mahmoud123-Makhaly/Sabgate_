import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import noImage from '@assets/svgs/noimg.svg';
import { ImageMaker } from '@components';
import { useTranslate } from '@app/hooks';

interface ItemRecapProps {
  imgSrc?: string | StaticImport;
  imgAlt?: string;
  imgClassName?: string;
  title: string | undefined;
  description?: string | undefined;
  price: string | number | undefined;
  qty?: number | string;
  discount?: string | number;
  discountPercentage?: number;
  className?: string;
  imgSpace?: string;
  contentSpace?: string;
}
const ItemRecap = (props: ItemRecapProps) => {
  const {
    imgSrc,
    imgAlt,
    imgClassName,
    title,
    description,
    discount,
    discountPercentage,
    price,
    qty,
    className,
    imgSpace,
    contentSpace,
  } = props;
  const t = useTranslate('Comp_Item_Recap');
  return (
    <Card className={`my-3 ${className}`}>
      <CardBody className="py-3">
        <Row className="align-items-center gap-column-3">
          <Col className={`${imgSpace ? imgSpace : 'col-5 col-xl-1 col-lg-2 col-md-3 border rounded'}`}>
            <ImageMaker src={imgSrc ? imgSrc : noImage.src} alt={imgAlt || ''} className={imgClassName} />
          </Col>
          <Col className={`${contentSpace ? contentSpace : 'col-7 col-lg-10 col-md-9 col-xl-11'}`}>
            <div className="flex-col-start gap-2 order-details">
              <p className="order-title fw-bold">{title}</p>
              {description && <p>{description}</p>}
              <div className="flex-between order-price fw-bold">
                <p className="text-primary pe-2 price">{price}</p>
                <del className="text-dimmed">{discount || discountPercentage}</del>
              </div>
              {qty && (
                <p className="text-end text-muted">
                  {t('QUANTITY')} : {qty}
                </p>
              )}
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ItemRecap;
