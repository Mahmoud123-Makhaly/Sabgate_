import React from 'react';

import { Rating as Rate } from 'primereact/rating';

interface IRatingItem {
  name?: string;
  date?: string;
  description?: string;
  rate?: number;
}
const RatingItem = (props: IRatingItem) => {
  const { name, date, description, rate } = props;
  return (
    <div className="border text-start rounded-2 my-3 p-3 ">
      <div>
        <p className="fw-bold font-16 mb-2 text-primary"> {name} </p>
      </div>
      <div className="flex-start product-rate">
        <Rate value={rate} cancel={false} readOnly />
      </div>
      <div>
        <p className="text-muted my-2">{date}</p>
      </div>
      <div>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
};

export default RatingItem;
