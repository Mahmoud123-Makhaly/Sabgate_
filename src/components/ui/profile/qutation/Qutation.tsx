'use client';
import React, { useState } from 'react';
import { ButtonMaker, FormStepper, Message, SearchForm } from '@components';
import { useTranslate } from '@app/hooks';
import EmptyQutation from './EmptyQutation';

import DetailsSelect from './DetailsSelect';
import QutationSummary from './QutationSummary';
import QutationProducts from './QutationProducts';
import success from '@assets/images/consulting-form/success.png';

const Qutation = () => {
  const t = useTranslate('COMP_Qutation');
  const [step, setStep] = useState('empty');
  const increment = () => {
    setStep('steps');
  };
  const btn = (
    <div className="flex-center">
      <ButtonMaker text={t('NEXT')} design="py-2 mt-4 px-5 w-25 rounded-3" />
    </div>
  );
  return (
    <React.Fragment>
      <div className="d-flex gap-4 qutation-header paddingx-24 paddingy-16 rounded">
        <h4 className="text-dark">{t('QUTATION_REQUEST')}</h4>
        <SearchForm placeholder={t('PRODUCT_SEARCH')} />
      </div>
      {step === 'empty' ? (
        <EmptyQutation increment={increment} />
      ) : (
        <div className="p-4 border rounded-5 my-4">
          <FormStepper buttons={btn}>
            <DetailsSelect />
            <QutationProducts />
            <QutationSummary />
          </FormStepper>
        </div>
      )}
      {/* <Message
        img={success.src}
        btnContent="التطبيقات و الخدمات"
        btnDesign="bg-orange py-2 px-4 rounded text-white"
        href={'/services'}
        className="gap-4"
      >
        <div className="text-center text-heading">
          <h4 className="text-heading">تم تلقي طلبك بنجاح</h4>
          <h4 className="text-heading">سيتم التواصل معك في اقرب وقت</h4>
        </div>
      </Message> */}
    </React.Fragment>
  );
};

export default Qutation;
