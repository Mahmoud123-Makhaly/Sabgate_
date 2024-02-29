import React from 'react';

import RatingCard from './completed-orders/RatingCard';
import { RatingCardData } from './canceled-orders/rating/data';

const OrderHistory = () => {
  return (
    <div className="products-evaluate">
      {RatingCardData.map((item, index) => (
        <RatingCard key={index} data={item} />
      ))}
    </div>
  );
};

export default OrderHistory;
