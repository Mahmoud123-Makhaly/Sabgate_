'use client';

import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';

import { SearchForm, Tabs, MyOrderDetails } from '@components';
import { getCurrentOrders } from '@utils';
import { CustomerOrderConnection } from '@core';
import { useTranslate } from '@app/hooks';

import { CurrentOrders } from './current-orders';
import { CompletedOrders } from './completed-orders';
import CanceledOrders from './canceled-orders/CanceledOrders';
import OrderReturn from './completed-orders/order-return/OrderReturn';
import RecoveryDetails from './completed-orders/order-return/RecoveryDetails';
import ViewReturns from './completed-orders/order-return/ViewReturns';
import ReturnInvoice from './completed-orders/order-return/ReturnInvoice';
import ReturnHistory from './return-history/ReturnHistory';
import { productDetails } from '../../data';

const MyOrders = () => {
  const [orders, setOrders] = useState<CustomerOrderConnection | undefined>();
  const [showOrderReturn, setShowOrderReturn] = useState(true);
  const [showRecoveryDetails, setShowRecoveryDetails] = useState(true);
  const [showReturnInvoice, setShowReturnInvoice] = useState(true);
  const [viewReturns, setViewReturns] = useState(true);
  const currentOrder = getCurrentOrders();
  const [delivered, setDelivered] = useState(true);
  const [productRating, setProductRating] = useState(true);

  const t = useTranslate('Comp_CurrentOrder');
  const loadCurrentOrder = async () => {
    setOrders((await currentOrder).items);
  };
  useEffect(() => {
    loadCurrentOrder();
  }, []);

  return delivered ? (
    showOrderReturn ? (
      <div id="myOrders">
        <div className="myOrders-title p-3  rounded bg-light-gray mb-4  ">
          <Row className=" align-items-center">
            <Col md={3}>
              <h3 className="text-black mb-0">{t('MY_ORDERS')}</h3>
            </Col>
            <Col md={9}>
              <SearchForm
                placeholder={t('PRODUCT_SEARCH')}
                btnContent={<i className="fa-solid fa-magnifying-glass"></i>}
              />
            </Col>
          </Row>
        </div>
        <Tabs
          headerClassName="pills"
          align="between"
          tabs={[
            {
              header: t('CURRENT_ORDERS'),

              content: (
                <CurrentOrders
                  setDelivered={setDelivered}
                  delivered={delivered}
                  orders={orders?.items?.filter(item => item.status === 'current')}
                  productRating={productRating}
                  setProductRating={setProductRating}
                  setShowOrderReturn={setShowOrderReturn}
                />
              ),
            },
            {
              header: t('ORDERS_COMPLTED'),
              content: (
                <CompletedOrders
                  orders={orders?.items?.filter(item => item.status === 'completed')}
                  setDelivered={setDelivered}
                  delivered={delivered}
                  setShowOrderReturn={setShowOrderReturn}
                  productRating={productRating}
                  setProductRating={setProductRating}
                />
              ),
            },
            {
              header: t('RETURNS'),
              content: <ReturnHistory />,
            },
            {
              header: t('CANCELED_ORDERS'),
              content: <CanceledOrders />,
            },
          ]}
        />
      </div>
    ) : showRecoveryDetails ? (
      <OrderReturn showRecoveryDetails={setShowRecoveryDetails} />
    ) : viewReturns ? (
      <RecoveryDetails setViewReturns={setViewReturns} />
    ) : showReturnInvoice ? (
      <ViewReturns setShowReturnInvoice={setShowReturnInvoice} />
    ) : (
      <ReturnInvoice />
    )
  ) : (
    <MyOrderDetails products={productDetails} />
  );
};

export default MyOrders;
