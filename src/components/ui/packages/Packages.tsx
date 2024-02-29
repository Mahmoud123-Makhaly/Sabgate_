'use client';
import React from 'react';
import Tabs from '../../common/atoms/tabs/Tabs';
import PaymentPlans from './payment-plans/PaymentPlans';
import { useTranslate } from '@app/hooks';

const Packages = () => {
  const t = useTranslate('COMP_Package');
  const tabs = [
    { header: t('INDIVIDUALS'), content: <PaymentPlans /> },
    { header: t('COMPANIES'), content: <PaymentPlans /> },
  ];
  return (
    <React.Fragment>
      <Tabs tabs={tabs} className="blocks" align="start" />
    </React.Fragment>
  );
};

export default Packages;
