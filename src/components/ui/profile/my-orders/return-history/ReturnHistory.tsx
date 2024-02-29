import React, { useState } from 'react';
import ReturnedCard from './ReturnedCard';
import ReturnDetails from './ReturnDetails';
import { Nullable } from 'primereact/ts-helpers';
import { productDetails } from '../../../data';
const ReturnHistory = () => {
  const [details, setDetails] = useState<Nullable<number>>(null);

  return (
    <React.Fragment>
      {details === null ? (
        productDetails.map((item, index) => (
          <ReturnedCard
            key={index}
            orderDate={item.orderDate}
            orderNumber={item.ordernumber}
            products={item.products}
            seeDetails={() => setDetails(index)}
          />
        ))
      ) : (
        <ReturnDetails products={productDetails[details!].products} />
      )}
    </React.Fragment>
  );
};

export default ReturnHistory;
