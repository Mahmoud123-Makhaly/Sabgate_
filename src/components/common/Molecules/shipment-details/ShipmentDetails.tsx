'use client';
import React from 'react';

interface IShippingDetailsProps {
  data?: any;
}
const ShipmentDetails = (props: IShippingDetailsProps) => {
  const { data } = props;
  return (
    <div className="rounded ">
      <table className="table table-borderless mb-0">
        <tbody>
          {data?.map((item: any, index: number) => {
            return (
              <tr key={index}>
                <th className="ps-0">{item.label}</th>
                <td className="pe-0">{item?.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentDetails;
