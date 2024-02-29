import React from 'react';
import { Badge } from 'reactstrap';

import { useTranslate } from '@app/hooks';
import { ShippingAddress, ButtonMaker, ICartSummaryDataProps, CartSummary } from '@components';

import ViewReturnsCard from './ViewReturnsCard';
import { address } from '../../../../data/address';
interface IViewReturns {
  setShowReturnInvoice: React.Dispatch<React.SetStateAction<boolean>>;
}
const ViewReturns = (props: IViewReturns) => {
  const { setShowReturnInvoice } = props;
  const t = useTranslate('Comp_View_Returns');

  const calendarDays = [
    { time: '10/12', text: t('MONDAY') },
    { time: '10/03', text: t('EVENING') },
  ];
  const TableData: Array<ICartSummaryDataProps> = [
    { text: t('SUBTOTAL'), price: 30 },
    { text: t('DELIVERY_FEES'), price: 20 },
    { text: t('TOTAL'), price: 261 },
  ];
  return (
    <div className="view-returns">
      <h3 className="text-24 text-info view-returns-title rounded">{t('VIEW_RETURNS')}</h3>
      <ViewReturnsCard />
      <ViewReturnsCard />
      <div className="shippment-details   rounded mb-3">
        <h5 className="shippment-title mb-0"> {t('SHIPPMENT_DELIVERY_ADDRESS')}</h5>
        <div className="shippment-info">
          <ShippingAddress data={address[0]} />
          <h5 className="font-16 text-info fw-bold  my-3"> {t('SHIPPMENT_DELIVERY_TIME')}</h5>
          {calendarDays.map((item, index) => {
            return (
              <ButtonMaker key={index} design={'bg-primary me-3'}>
                <span className="d-block   text-12 date date-text">{item.time}</span>
                <span className="d-block   text-12 date-text">{item.text}</span>
              </ButtonMaker>
            );
          })}
        </div>
      </div>
      <div className="order-summary rounded mb-3">
        <h5 className="order-summary-title mb-0 flex-between">
          <p className="pill"> {t('BILL')}</p>
          <Badge color="primary" className="rounded-pill badge">
            {t('CASH')}
          </Badge>
        </h5>
        <div className="order-summary-info">
          <CartSummary title={t('CART_SUMMARY')} data={TableData} />
        </div>
      </div>
      <ButtonMaker
        text={t('RETURN_CONFIRMATION')}
        block
        design={`return-confirm`}
        onClick={() => setShowReturnInvoice(false)}
      />
    </div>
  );
};

export default ViewReturns;
