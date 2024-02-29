'use client';

import React from 'react';
import * as Yup from 'yup';
import { useLocale } from 'next-intl';
import { FormGroup, Input, Label } from 'reactstrap';
import { Field, FieldAttributes, FormikErrors, FormikHelpers, FormikValues, useFormikContext } from 'formik';

import { useTranslate } from '@app/hooks';
import { AppForm, ButtonMaker, FormFieldType } from '@components';
import egyptCities from '@assets/egypt.json';
import { appRegx } from '@libs/regx';

interface IAddAddressProps {
  onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void;
  onCancel: () => void;
  initialValues?: {
    id: string;
    addressType: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    countryName: string;
    countryCode: string;
    postalCode: string;
    city: string;
    district: string;
    building: string;
    floor: string;
    flat: string;
    address: string;
  };
}

const DependentField = (props: FieldAttributes<any>) => {
  const { values } = useFormikContext<any>(); // get Formik state and helpers via React Context
  const t = useTranslate('COMP_AddAddresses');
  const locale: 'ar' | 'en' = useLocale() as 'ar' | 'en';

  const DistrictOptions = () => (
    <React.Fragment>
      <option value="">{t('DEFAULT_SELECT')}</option>
      {egyptCities
        .find(city => city.en === values.city)
        ?.districts.sort((a, b) => a[locale].localeCompare(b[locale]))
        .map((dist: { ar: string; en: string }) => (
          <option key={dist.en} value={dist.en}>
            {dist[locale]}
          </option>
        ))}
    </React.Fragment>
  );

  return values.city ? <DistrictOptions /> : <option value="">{t('DEFAULT_SELECT')}</option>;
};

const AddAddress = (props: IAddAddressProps) => {
  const { onSubmit, onCancel, initialValues } = props;
  const t = useTranslate('COMP_AddAddresses');
  const locale: 'ar' | 'en' = useLocale() as 'ar' | 'en';
  const CityOptions = () => (
    <React.Fragment>
      <option value="">{t('DEFAULT_SELECT')}</option>
      {egyptCities
        .sort((a, b) => a[locale].localeCompare(b[locale]))
        .map(
          (city: {
            ar: string;
            en: string;
            districts: {
              ar: string;
              en: string;
            }[];
          }) => (
            <option key={city.en} value={city.en}>
              {city[locale]}
            </option>
          ),
        )}
    </React.Fragment>
  );

  const formFields: Array<FormFieldType> = [
    {
      name: 'firstName',
      label: t('FIRST_NAME'),
      type: 'text',
      design: 'me-3',
      div: 6,
      autoComplete: 'given-name',
    },
    {
      name: 'lastName',
      label: t('LAST_NAME'),
      type: 'text',
      design: 'me-3',
      div: 6,
      autoComplete: 'family-name',
    },
    {
      name: 'phone',
      label: t('PHONE_NUMBER'),
      type: 'text',
      design: 'me-3',
      div: 6,
      autoComplete: 'tel',
    },
    {
      name: 'email',
      label: t('EMAIL_ADDRESS'),
      type: 'email',
      design: 'me-3',
      div: 6,
      autoComplete: 'email',
    },
    {
      name: 'city',
      label: t('CITY'),
      type: 'select',
      design: 'me-3',
      div: 6,
      children: CityOptions(),
      autoComplete: 'address-level1',
    },
    {
      name: 'district',
      label: t('DISTRICT'),
      type: 'select',
      design: 'me-3',
      div: 6,
      children: <DependentField />,
      autoComplete: 'address-level2',
    },
    {
      name: 'building',
      label: t('BUILDING'),
      type: 'text',
      design: 'me-3',
      div: 4,
      autoComplete: 'on',
    },
    {
      name: 'floor',
      label: t('FLOOR'),
      type: 'text',
      design: 'me-3',
      div: 4,
      autoComplete: 'on',
    },
    {
      name: 'flat',
      label: t('FLAT'),
      type: 'text',
      design: 'me-3',
      div: 4,
      autoComplete: 'on',
    },
    {
      name: 'address',
      label: t('LINE1'),
      type: 'text',
      design: 'me-3',
      autoComplete: 'street-address',
    },
    {
      name: 'countryName',
      label: '',
      type: 'hidden',
      value: 'Egypt',
    },
    {
      name: 'countryCode',
      label: '',
      type: 'hidden',
      value: 'EGY',
    },
    {
      name: 'postalCode',
      label: '',
      type: 'hidden',
      value: '0020',
    },
    {
      name: 'id',
      label: '',
      type: 'hidden',
    },
  ];

  const defaultValues = {
    id: '',
    addressType: '',
    firstName: '',
    lastName: '',
    phone: '',
    city: '',
    district: '',
    address: '',
    countryName: 'Egypt',
    countryCode: 'EGY',
    postalCode: '0020',
  };

  const validationSchema = Yup.object().shape({
    addressType: Yup.string().min(1).required(t('REQUIRED_CITY')),
    firstName: Yup.string()
      .min(3, t('ERR_FIRST_NAME_MIN', { length: 3 }))
      .max(128, t('ERR_FIRST_NAME_MAX', { length: 128 }))
      .required(t('REQUIRED_FIRST_NAME')),
    lastName: Yup.string()
      .min(3, t('ERR_LAST_NAME_MIN', { length: 3 }))
      .max(128, t('ERR_LAST_NAME_MAX', { length: 128 }))
      .required(t('REQUIRED_LAST_NAME')),
    email: Yup.string().email(t('INVALID_EMAIL')).required(t('REQUIRED_EMAIL')),
    phone: Yup.string().required(t('REQUIRED_PHONE_NUMBER')).matches(appRegx.PhoneRegExp, t('INVALID_PHONE_NUMBER')),
    city: Yup.string().required(t('REQUIRED_CITY')),
    district: Yup.string().required(t('REQUIRED_DISTRICT')),
    building: Yup.string().required(t('REQUIRED_BUILDING_NUMBER')),
    floor: Yup.string().required(t('REQUIRED_FLOOR_NUMBER')),
    flat: Yup.string().required(t('REQUIRED_FLAT_NUMBER')),
    address: Yup.string().required(t('REQUIRED_ADDRESS')),
  });

  const CancelBtn = ({ children }: { children: React.ReactNode }) => (
    <React.Fragment>
      {children}
      <ButtonMaker block={true} text={t('CANCEL')} design="my-2" type="button" onClick={onCancel} outline={true} />
    </React.Fragment>
  );

  const FieldComponents = ({
    children,
    values,
    errors,
  }: {
    children: React.ReactNode;
    values: FormikValues;
    errors: FormikErrors<FormikValues>;
  }) => (
    <React.Fragment>
      <FormGroup>
        <div
          role="group"
          aria-labelledby="addressType"
          className="d-flex gap-2 mb-3"
          defaultValue={initialValues?.addressType ?? defaultValues.addressType}
        >
          <div>
            <Field className="btn-check" type="radio" name="addressType" id="addressType-home" value="2" />
            <Label
              className={`mb-0 border flex-between rounded px-2 address-type-label${values.addressType === '2' ? ' active' : ''}`}
              htmlFor="addressType-home"
            >
              <i className="fa-solid fa-house fs-3 me-2 py-2 text-primary"></i>
              {t('HOME')}
            </Label>
          </div>
          <div>
            <Field className="btn-check" type="radio" name="addressType" id="addressType-work" value="1" />
            <Label
              className={`mb-0 border flex-between rounded px-2 address-type-label${values.addressType === '1' ? ' active' : ''}`}
              htmlFor="addressType-work"
            >
              <i className="fa-solid fa-briefcase fs-3 me-2 py-2 text-primary"></i>
              {t('WORK')}
            </Label>
          </div>
          <div>
            <Field className="btn-check" type="radio" name="addressType" id="addressType-other" value="3" />
            <Label
              className={`mb-0 border flex-between rounded px-2 address-type-label${values.addressType === '3' ? ' active' : ''}`}
              htmlFor="addressType-other"
            >
              <i className="fa-solid fa-city fs-3 me-2 py-2 text-primary"></i>
              {t('OTHER')}
            </Label>
          </div>
        </div>
        {errors.addressType && <small className="text-danger">{t('REQUIRED_ADDRESS_TYPE')}</small>}
      </FormGroup>
      {children}
      <div className="d-flex align-items-center gap-2 mb-3">
        <Input type="checkbox" name="default" className="m-0" id="default" />
        <Label htmlFor="default" className="m-0">
          {t('SET_DEFAULT')}
        </Label>
      </div>
    </React.Fragment>
  );

  return (
    <AppForm
      initialValues={initialValues ?? defaultValues}
      validationSchema={validationSchema}
      fields={formFields}
      buttonText={t('SAVE_ADDRESSES')}
      onSubmit={onSubmit}
      ActionComponent={CancelBtn}
      FieldComponent={FieldComponents}
    />
  );
};

export default AddAddress;
