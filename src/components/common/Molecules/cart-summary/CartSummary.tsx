'use client';

import React from 'react';
import { Card, CardBody } from 'reactstrap';

import { ICartSummaryDataProps } from './ICartSummaryDataProps';

interface ICartSummaryProps {
  title: string;
  data: Array<ICartSummaryDataProps>;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}
const CartSummary = (props: ICartSummaryProps) => {
  const { data, title, children, className } = props;

  return (
    <div className="cart-summar">
      <Card className={`p-3 ${className}`}>
        <h6 className="card-title mb-0 fw-bold"> {title}</h6>
        <CardBody className="pt-2">
          <table className="table table-borderless mb-0">
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="ps-0">{item.text}</td>
                    <td className="text-end w-50 pe-0">{item?.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
      {children}
    </div>
  );
};

export default CartSummary;
