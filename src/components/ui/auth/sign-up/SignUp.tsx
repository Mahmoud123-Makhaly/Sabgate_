'use client';

import React, { useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import { Col, FormGroup } from 'reactstrap';
import * as Yup from 'yup';
import { useSearchParams } from 'next/navigation';

import { Actions } from '@libs/actions';
import { Link } from '@navigation';
import { FormFieldType, AppForm, Modal } from '@components';
import { useTranslate } from '@app/hooks';
import { appRegx } from '@libs/regx';

import ConfirmModal from './ConfirmModal';
import SocialLogin from '../SocialLogin';

interface ISignUpValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  termsAndConditions: true;
}

const SignUp = () => {
  const t = useTranslate('COMP_SignUpForm');
  const [successModal, setSuccessModal] = useState(false);
  const searchParams = useSearchParams();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    termsAndConditions: false,
  };

  const formFields: Array<FormFieldType> = [
    {
      name: 'firstName',
      label: t('FIRST_NAME'),
      type: 'text',
      autoComplete: 'given-name',
    },
    {
      name: 'lastName',
      label: t('LAST_NAME'),
      type: 'text',
      autoComplete: 'family-name',
    },
    {
      name: 'email',
      label: t('EMAIL_ADDRESS'),
      type: 'text',
      autoComplete: 'email',
    },
    {
      name: 'password',
      label: t('PASSWORD'),
      type: 'password',
      autoComplete: 'new-password',
    },
    {
      name: 'confirmPassword',
      label: t('CONFIRM_PASSWORD'),
      type: 'password',
      autoComplete: 'new-password',
    },
  ];

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, t('ERR_FIRST_NAME_MIN', { length: 3 }))
      .max(128, t('ERR_FIRST_NAME_MAX', { length: 128 }))
      .required(t('REQUIRED_FIRST_NAME')),
    lastName: Yup.string()
      .min(3, t('ERR_LAST_NAME_MIN', { length: 3 }))
      .max(128, t('ERR_LAST_NAME_MAX', { length: 128 }))
      .required(t('REQUIRED_LAST_NAME')),
    email: Yup.string().email(t('INVALID_EMAIL')).required(t('REQUIRED_EMAIL')),
    password: Yup.string().matches(appRegx.PasswordRegExp, t('PASSWORD_REGX_MATCH')).required(t('REQUIRED_PASSWORD')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], t('CONFIRM_PASSWORD_MATCH'))
      .required(t('CONFIRM_PASSWORD')),
    termsAndConditions: Yup.boolean()
      .oneOf([true], t('REQUIRED_TERMS_CONDITIONS'))
      .required(t('REQUIRED_TERMS_CONDITIONS')),
  });

  return (
    <div className="auth-form bg-white rounded-3 h-auto">
      <Modal isOpen={successModal}>
        <ConfirmModal />
      </Modal>
      <AppForm
        title={t('SIGNUP')}
        initialValues={initialValues}
        validationSchema={validationSchema}
        fields={formFields}
        buttonText={t('BTN_REGISTER_LABEL')}
        onSubmit={async (values, formikHelpers) => {
          const isEmailUnique = await Actions.account.checkEmailUniqueness(values.email);
          if (isEmailUnique.data?.error || isEmailUnique.serverError || isEmailUnique.validationErrors) {
            formikHelpers.setFieldError('errorSummary', t('GENERIC_ERR_MSG'));
          }
          if (isEmailUnique.data?.data) {
            const result = await Actions.account.signUp(values as ISignUpValues);
            if (result.data?.error || result.serverError || result.validationErrors) {
              formikHelpers.setFieldError('errorSummary', t('GENERIC_ERR_MSG'));
            } else {
              setSuccessModal(true);
            }
          } else {
            formikHelpers.setFieldError('email', t('ALREADY_EMAIL_EXISTS'));
          }
        }}
      >
        <Col md={12} className="p-0">
          <FormGroup>
            <div className="d-flex align-items-center">
              <Field type="checkbox" name="termsAndConditions" title="Terms and conditions" />
              <label className="px-2" htmlFor="termsAndConditions">
                {t.rich('TERMS_CONDITIONS', {
                  link: chunks => (
                    <Link href="/content/terms-and-conditions" target="_blank">
                      {chunks}
                    </Link>
                  ),
                })}
              </label>
            </div>
            <ErrorMessage name="termsAndConditions" component="small" className="text-danger" />
          </FormGroup>
        </Col>
      </AppForm>
      <SocialLogin />
      <div className="flex-center">
        <p className="px-1"> {t('HAVE_EMAIL')}</p>
        <Link
          className="forget-password"
          href={`/auth/login${searchParams.get('redirectURL') ? `?redirectURL=${searchParams.get('redirectURL')}` : ''}`}
        >
          {t('LOGIN')}
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
