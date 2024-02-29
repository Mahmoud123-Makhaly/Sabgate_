'use client';

import React from 'react';

import { CustomerOrderType } from '@core';

import CurrentOrderCard from './CurrentOrderCard';

interface ICurrentOrdersProps {
  orders: Array<CustomerOrderType> | undefined;
  setDelivered: React.Dispatch<React.SetStateAction<boolean>>;
  delivered: boolean;
  setProductRating: React.Dispatch<React.SetStateAction<boolean>>;
  productRating: boolean;
  setShowOrderReturn: React.Dispatch<React.SetStateAction<boolean>>;
}
const CurrentOrders = (props: ICurrentOrdersProps) => {
  const { orders, setDelivered, delivered, setProductRating, productRating, setShowOrderReturn } = props;
  return (
    <div>
      <CurrentOrderCard
        delivered={delivered}
        setDelivered={setDelivered}
        productRating={productRating}
        setProductRating={setProductRating}
        setShowOrderReturn={setShowOrderReturn}
      />
      <CurrentOrderCard
        delivered={delivered}
        setDelivered={setDelivered}
        productRating={productRating}
        setProductRating={setProductRating}
        setShowOrderReturn={setShowOrderReturn}
      />
      <CurrentOrderCard
        delivered={delivered}
        setDelivered={setDelivered}
        productRating={productRating}
        setProductRating={setProductRating}
        setShowOrderReturn={setShowOrderReturn}
      />
      <CurrentOrderCard
        delivered={delivered}
        setDelivered={setDelivered}
        productRating={productRating}
        setProductRating={setProductRating}
        setShowOrderReturn={setShowOrderReturn}
      />
    </div>
  );
};

export default CurrentOrders;
