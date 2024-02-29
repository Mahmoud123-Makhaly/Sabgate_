'use client';

import React, { useState } from 'react';

import { useTranslate } from '@app/hooks';

import ReturnSteps from './ReturnSteps';

const MyOrderDetails = () => {
  const [toggleShowSteps, setToggleShowSteps] = useState<'returning' | 'returned' | 'deposing' | 'recovered' | string>(
    'recovered',
  );
  const t = useTranslate('COMP_Return_Details');

  return toggleShowSteps === 'returning' ? (
    <ReturnSteps btnText={t('RETURNING')} showCancelButton={true} index={0} />
  ) : toggleShowSteps === 'returned' ? (
    <ReturnSteps btnText={t('RETURNED')} index={1} />
  ) : toggleShowSteps === 'deposing' ? (
    <ReturnSteps btnText={t('RECOVERED')} index={2} />
  ) : (
    <ReturnSteps recoverySuccessfully={true} showTitle={false} index={2} />
  );
};

export default MyOrderDetails;
