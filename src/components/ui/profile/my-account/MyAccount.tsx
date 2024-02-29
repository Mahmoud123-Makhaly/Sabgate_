'use client';

import React, { useState } from 'react';
import * as Yup from 'yup';
import { FormikHelpers } from 'formik';
import { useSession } from 'next-auth/react';

import { useTranslate } from '@app/hooks';
import { AppForm, ButtonMaker, FormFieldType, FormikValues, SubmitButton } from '@components';
import { DTO } from '@tot/core/types';
import { Link, useRouter } from '@navigation';
import { appRegx } from '@libs/regx';
import { Actions } from '@libs/actions';
import { Utils } from '@libs';

import ChangePassword from './ChangePassword';

const MyAccount = ({ data }: { data: DTO.IContactDTO }) => {
  const t = useTranslate('COMP_MyAccount');
  const [displayedForm, setDisplayedForm] = useState<'account' | 'change-password'>('account');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const { data: session } = useSession();
  const router = useRouter();

  const formFields: Array<FormFieldType> = [
    {
      name: 'firstName',
      label: t('FIRST_NAME'),
      type: 'text',
      col: 6,
      design: 'me-3',
      autoComplete: 'given-name',
    },
    {
      name: 'lastName',
      label: t('LAST_NAME'),
      type: 'text',
      col: 6,
      autoComplete: 'family-name',
    },
    {
      name: 'email',
      label: t('EMAIL_ADDRESS'),
      type: 'email',
      col: 12,
      design: 'read-only',
      autoComplete: 'email',
    },
    {
      name: 'phoneNumber',
      label: t('PHONE_NUMBER'),
      type: 'text',
      col: 4,
      design: 'me-lg-3 me-0',
      autoComplete: 'tel',
    },
    {
      name: 'language',
      label: t('LANGUAGE'),
      as: 'select',
      col: 4,
      design: 'me-lg-3 me-0',
      autoComplete: 'tel',
    },
    {
      name: 'company',
      label: t('COMPANY_NAME'),
      type: 'text',
      col: 4,
      autoComplete: 'tel',
    },
    {
      type: 'html',
      html: <div className="p-0 mb-2">{t('BIRTHDATE')}</div>,
    },
    {
      name: 'day',
      as: 'select',
      col: 4,
      design: 'me-lg-3 me-0',
      autoComplete: 'bday-day',
      max: 31,
      min: 1,
    },
    {
      name: 'month',
      as: 'select',
      col: 4,
      design: 'me-lg-3 me-0',
      autoComplete: 'bday-month',
      max: 12,
      min: 1,
    },
    {
      name: 'year',
      as: 'select',
      col: 4,
      autoComplete: 'bday-years',
    },
  ];

  const initialValues = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.emails ? data.emails[0] : '',
    phoneNumber: data.phones ? data.phones[0] : '',
    day: data.birthdate?.getDay().toString() ?? '',
    month: data.birthdate?.getMonth().toString() ?? '',
    year: data.birthdate?.getFullYear().toString() ?? '',
  };

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
    phoneNumber: Yup.string()
      .required(t('REQUIRED_PHONE_NUMBER'))
      .matches(appRegx.PhoneRegExp, t('INVALID_PHONE_NUMBER')),
  });

  const onSubmit = async (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
    setSuccessMessage('');
    // const isUniqueEmail = async () => {
    //   const isEmailUnique = await Actions.account.checkEmailUniqueness(values.email);
    //   if (isEmailUnique.data?.error || isEmailUnique.serverError || isEmailUnique.validationErrors) {
    //     formikHelpers.setFieldError('errorSummary', t('GENERIC_ERR_MSG'));
    //     return false;
    //   } else if (!isEmailUnique.data?.data) {
    //     formikHelpers.setFieldError('email', t('ALREADY_EMAIL_EXISTS'));
    //     return false;
    //   } else return true;
    // };

    // if (values.email.toLowerCase() != session?.user?.email?.toLowerCase() && !(await isUniqueEmail())) return;

    // let birthDate: Date | undefined;
    // if (values.day || values.month || values.year) {
    //   birthDate = Utils.isValidBirthDate(values.day, values.month, values.year);
    //   if (!birthDate) {
    //     formikHelpers.setFieldError('errorSummary', t('INVALID_BIRTH_DATE'));
    //     return;
    //   }
    // }

    // const updateContactStatus = await Actions.account.updateContact({
    //   id: session!.user!.memberId!,
    //   firstName: values.firstName,
    //   lastName: values.lastName,
    //   phone: values.phoneNumber,
    //   email: values.email,
    //   birthDate: birthDate,
    // });

    // if (updateContactStatus.data?.error || updateContactStatus.serverError || updateContactStatus.validationErrors) {
    //   formikHelpers.setFieldError('errorSummary', t('GENERIC_ERR_MSG'));
    //   return false;
    // } else {
    //   setSuccessMessage(t('SUCCESS_MSG'));
    //   window.scrollTo(0, 0);
    // }
    setSuccessMessage(t('SUCCESS_MSG'));
  };

  const CancelBtn = ({ children }: { children: React.ReactNode }) => (
    <div className="d-flex align-items-center gap-3">
      <SubmitButton design="mt-3 mb-3 py-2 flex-center" size="lg" isLoading={false} text={t('SAVE')} />
      <ButtonMaker
        block={false}
        text={t('CANCEL')}
        design="mt-3 mb-3 save py-2 text-primary"
        type="button"
        size="lg"
        onClick={() => router.push('/')}
        outline
      />
    </div>
  );

  return displayedForm === 'account' ? (
    <div className="my-account">
      <h3 className="account-title mb-3 text-24 text-black rounded paddingx-24 paddingy-26 fw-bold">
        {t('PERSONAL_INFORMATION')}
      </h3>
      {successMessage && <h5 className="success-info">{successMessage}</h5>}
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        fields={formFields}
        onSubmit={onSubmit}
        ActionComponent={CancelBtn}
        submitBlock={false}
      >
        <Link
          href={''}
          className="change-password text-primary border-bottom border-primary"
          onClick={() => setDisplayedForm('change-password')}
        >
          {t('CHANGE_PASSWORD')}
        </Link>
      </AppForm>
    </div>
  ) : (
    <ChangePassword setToggleFormShow={() => setDisplayedForm('account')} />
  );
};

export default MyAccount;
