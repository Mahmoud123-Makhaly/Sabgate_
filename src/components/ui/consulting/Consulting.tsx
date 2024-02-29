'use client';
import { ButtonMaker, FormStepper, IconLink, Message } from '@components';
import React from 'react';
import { useTranslate } from '@app/hooks';
import success from '@assets/images/consulting-form/success.png';
import BetterService from './BetterService';
import Budget from './Budget';
import PersonalInfo from './PersonalInfo';
import Property from './Property';
import ServiceType from './ServiceType';
import WaterproofForm from './WaterproofForm';

const Consulting = () => {
  const t = useTranslate('COMP_StepForm');
  const btns = (
    <div className="flex-between">
      <ButtonMaker text={t('SKIP')} outline design="border text-dark py-3 px-5 rounded-3" />
      <IconLink as="button" text={t('NEXT')} fill color="primary" className="py-3 px-4" type="submit" />
    </div>
  );
  return (
    <div className="border rounded-5 p-5 my-5">
      <IconLink
        text={t('BACK')}
        textColor="black"
        as="button"
        className="flex-row-reverse border-gray mb-3"
        icon="caret"
        iconColor="black"
        iconDirection="left"
        type="reset"
      />
      <FormStepper buttons={btns}>
        <BetterService key={0} />
        <Budget key={1} />
        <Property key={2} />
        <ServiceType key={3} />
        <WaterproofForm key={4} />
        <PersonalInfo key={5} />
        <div key={6} className="flex-col gap-3">
          <Message
            img={success.src}
            btnContent={t('APPLICATIONS_SERVICES')}
            btnDesign="bg-orange py-2 px-4 rounded text-white"
            href={'/services'}
            className="gap-4"
          >
            <div className="text-center text-heading">
              <h4 className="text-heading"> {t('REQUEST_RECEIVED')} </h4>
              <h4 className="text-heading">{t('CONTACT_AS_SOON_AS')} </h4>
            </div>
          </Message>
        </div>
      </FormStepper>
    </div>
  );
};

export default Consulting;
