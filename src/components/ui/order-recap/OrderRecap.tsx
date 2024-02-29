'use client';

import React from 'react';

import { useTranslate } from '@app/hooks';

import ItemRecap from './ItemRecap';

interface IOrderRecapProps {
  data: any | null | undefined;
}
const OrderRecap = (props: IOrderRecapProps) => {
  const { data } = props;
  const t = useTranslate('Comp_Order_Recap');
  return (
    <React.Fragment>
      <div className="border rounded  p-3 box">
        <h5 className="py-2 px-5 rounded bg-light-blue">{t('DELIVERY_TIME')} الاثنين، 23 أكتوبر 2023</h5>
        {data?.map((item: any, index: number) => (
          <ItemRecap
            className="border ps-3"
            key={index}
            imgSrc={item.imageUrl}
            imgAlt={item.name}
            title={item.name}
            description={item.description}
            price={item.price}
            qty={item.quantity}
            discount={item.discount}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default OrderRecap;
