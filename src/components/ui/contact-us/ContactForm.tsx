'use client';
import React from 'react';
import * as Yup from 'yup';
import { ButtonMaker, FormFieldType, FormProvider } from '@components';
import { useTranslate } from '@app/hooks';
const ContactForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const t = useTranslate('COMP_Contact_Us.Form');
  const formFields: Array<FormFieldType> = [
    {
      label: '',
      name: 'firstName',
      placeholder: t('FIRST_NAME'),
      type: 'text',
      col: 6,
      design: 'me-3',
    },
    {
      label: '',
      name: 'lastName',
      placeholder: t('LAST_NAME'),
      type: 'text',
      col: 6,
    },
    {
      label: '',
      name: 'email',
      placeholder: t('EMAIL_ADDRESS'),
      type: 'email',
    },
    {
      label: '',
      name: 'subject',
      placeholder: t('SUBJECT'),
      type: 'text',
    },
    {
      label: '',
      name: 'message',
      placeholder: t('MESSAGE'),
      type: 'textarea',
      design: 'rows-6',
    },
  ];
  const validationSchema = Yup.object().shape({
    message: Yup.string().required(t('MESSAGE_ERROR')),
    email: Yup.string().email(t('INVALID_EMAIL_ERROR')).required(t('EMAIL_ERROR')),
    firstName: Yup.string().required(t('FIRST_NAME_ERROR')),
  });
  return (
    <div className="border rounded p-5 flex-col-start gap-3 h-100">
      <div className="border-bottom flex-col-start gap-3 w-100 paddingb-32">
        <p className="font-24 fw-bold">{t('HEADER_THANKS')}</p>
        <p>{t('HEADER_MESSAGE')}</p>
      </div>
      <div>
        <FormProvider
          fields={formFields}
          validationSchema={validationSchema}
          initialValues={{
            subject: '',
            message: '',
            email: '',
            firstName: '',
            lastName: '',
          }}
          onSubmit={onSubmit}
        >
          <div className="w-50">
            <ButtonMaker text={t('SUBMIT_BUTTON')} block />
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default ContactForm;
