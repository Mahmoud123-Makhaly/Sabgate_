import React from 'react';
import { Input, Label } from 'reactstrap';

interface IPaymentMethodProps {
  data?: Array<{ text: string }>;
  onSelect?: (value: string) => void;
}
const PaymentMethod = (props: IPaymentMethodProps) => {
  const { data, onSelect } = props;
  return (
    <React.Fragment>
      {data?.map((item, index) => (
        <Label htmlFor="cash" className=" flex-between border rounded mb-2 px-3 pointer" key={index}>
          <div className="d-flex align-items-center p-2">
            <div>
              <i className="fa-solid fa-money-bill text-primary"></i>
            </div>
            <div className="px-2">
              <p>{item?.text}</p>
            </div>
          </div>
          <div className="p-2">
            <Input type="radio" id="cash" />
          </div>
        </Label>
      ))}
    </React.Fragment>
  );
};

export default PaymentMethod;
