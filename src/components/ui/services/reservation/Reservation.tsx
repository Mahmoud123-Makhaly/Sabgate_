'use client';
import React from 'react';
import * as Yup from 'yup';
import { Divider } from 'primereact/divider';
import { InputGroup, Row, Col, Input, Label } from 'reactstrap';
import { ImageMaker, ButtonMaker, CheckInput, AppForm, FormFieldType } from '@components';
import { services } from '../../data/services';
import { useTranslate } from '@app/hooks';

const Reservation = () => {
  const t = useTranslate('COMP_RESERVATION');
  const formFields: Array<FormFieldType> = [
    {
      type: 'html',
      html: <h4 className="p-0 mt-3"> {t('PERSONAL_DATA')} </h4>,
    },
    {
      name: 'firstName',
      type: 'text',
      placeholder: t('FIRST_NAME'),
      design: 'me-3 mt-3',
      col: 2,
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: t('SECOND_NAME'),
      design: 'me-3 mt-3',
      col: 2,
    },
    {
      type: 'html',
      html: <div></div>,
      col: 8,
    },
    {
      name: 'phone',
      type: 'text',
      placeholder: t('PHONE_NUMBER'),
      design: 'me-3',
      col: 2,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: t('EMAIL'),
      design: 'me-3',
      col: 2,
    },
    {
      type: 'html',
      html: (
        <div className="flex-start gap-2 my-3 p-0">
          <Input type="checkbox" name="send-message" id="message" className="border-primary" />
          <Label htmlFor="message" className="m-0">
            {t('REMEMBER_MSG')}
          </Label>
        </div>
      ),
      col: 8,
    },
    {
      type: 'html',
      html: <Divider />,
    },
    {
      type: 'html',
      html: (
        <div className="mb-3 p-0">
          <h4 className="mb-4"> {t('TELL_US_SIZE_PLACE')} </h4>
          <div className="flex-start gap-2 p-0">
            <CheckInput type="radio" className="border border-light paddingy-10 paddingx-90 rounded" name={'size'}>
              <p className="text-primary fw-bold">{t('INDIVIDUALS')}</p>
            </CheckInput>
            <CheckInput type="radio" className="border border-light paddingy-10 paddingx-90 rounded" name={'size'}>
              <p className="text-primary fw-bold"> {t('COMPANIES')}</p>
            </CheckInput>
          </div>
        </div>
      ),
    },
    {
      type: 'html',
      html: <Divider />,
    },
    {
      type: 'html',
      html: <h4 className="p-0"> {t('BUILDING_SPECIFICATIONS')}</h4>,
    },
    {
      name: 'buildingArea',
      type: 'text',
      placeholder: t('BUILDING_SIZE'),
      design: 'me-3 mt-3',
      col: 2,
    },
    {
      name: 'floorsNumber',
      type: 'select',
      design: 'me-3 mt-3',
      col: 2,
    },
    {
      type: 'html',
      html: <div></div>,
      col: 8,
    },
    {
      name: 'buildingMaterials',
      type: 'select',
      design: 'me-3',
      col: 2,
    },
    {
      name: 'buildingAge',
      type: 'text',
      placeholder: t('BUILDING_AGE'),
      design: 'me-3',
      col: 2,
    },
    {
      type: 'html',
      html: <Divider />,
    },
    {
      type: 'html',
      html: <h4 className="p-0"> {t('WATER_PROOF_REQUIREMENTS')}</h4>,
    },
    {
      name: 'buildingMaterials',
      type: 'textarea',
      placeholder: t('WATERPROOF_QEQUIREMENTS_PLACEHOLDERS'),
      design: 'me-3 mt-3',
    },
    {
      name: 'buildingAge',
      type: 'text',
      placeholder: t('CONCERNS_PLACEHOLDER'),
      design: 'me-3',
    },
    {
      type: 'html',
      html: <Divider />,
    },
    {
      type: 'html',
      html: <h4 className="p-0"> {t('VISIT_COUNT')}</h4>,
    },
    {
      type: 'html',
      html: (
        <div className="flex-start gap-2 my-2 p-0">
          <CheckInput type="radio" className="border border-light paddingy-10 px-2 rounded" name={'visits'}>
            <p>{t('WEEKLY')}</p>
          </CheckInput>
          <CheckInput type="radio" className="border border-light paddingy-10 px-2 rounded" name={'visits'}>
            <p>{t('MONTHLY')}</p>
          </CheckInput>
          <CheckInput type="radio" className="border border-light paddingy-10 px-2 rounded" name={'visits'}>
            <p>{t('ANNUALLY')}</p>
          </CheckInput>
        </div>
      ),
    },
    {
      type: 'html',
      html: <Divider />,
    },
    {
      type: 'html',
      html: <h4 className="p-0"> {t('SUITABLE_TIME')}</h4>,
    },
    {
      name: 'date',
      type: 'date',
      design: 'me-3 mt-3',
      col: 3,
    },
    {
      name: 'date',
      type: 'date',
      design: 'me-3 mt-3',
      col: 3,
    },

    {
      type: 'html',
      html: <Divider />,
    },
    {
      type: 'html',
      html: <h4 className="p-0"> {t('ADDITIONAL_DATA')}</h4>,
    },
    {
      name: 'buildingAge',
      type: 'text',
      placeholder: t('RELEVANT_INFO_PLACEHOLDER'),
      design: 'me-3 mt-3',
    },
    {
      type: 'html',
      html: <Divider />,
    },
    {
      type: 'html',
      html: <h4 className="p-0"> {t('BUDGET')}</h4>,
    },
    {
      name: 'buildingMaterials',
      type: 'text',
      placeholder: t('EXPECTED_BUDGET'),
      design: 'me-3 mt-3',
      col: 3,
    },
    {
      name: 'buildingAge',
      type: 'text',
      placeholder: t('TIMETABLE'),
      design: 'me-3 mt-3',
      col: 3,
    },
    {
      name: 'buildingAge',
      type: 'text',
      placeholder: t('WATERPROOFING_ATTEMPTS'),
      design: 'me-3 ',
    },
    {
      type: 'html',
      html: <Divider />,
    },
    {
      type: 'html',
      html: <h4 className="p-0"> {t('ATTATACHMENTS')}</h4>,
    },
    {
      name: 'buildingAge',
      type: 'text',
      placeholder: t('EVALUATE_WATERPROFFING'),
      design: 'me-3 ',
    },
    {
      type: 'html',
      html: <Divider />,
    },
    {
      type: 'html',
      html: (
        <a target="_blank" href={'/content/terms-and-conditions'} className="mb-3 p-0">
          <h4 className="border-bottom d-inline border-primary"> {t('TERMS_CONDITIONS')}</h4>
        </a>
      ),
    },
    {
      type: 'html',
      html: (
        <div className="d-flex gap-2 p-0 mb-2">
          <Input type="checkbox" id="terms" className="border-primary" />
          <Label className="font-16 text-gray" htmlFor="terms">
            {t('TERMS_CONDITION_APPROVAL')}
          </Label>
        </div>
      ),
    },
  ];

  const initialValues = {
    fisrtName: '',
    lastName: '',
    phone: '',
    email: '',
  };

  const validationSchema = Yup.object().shape({});
  return (
    <div className="mb-5">
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        fields={formFields}
        onSubmit={() => {}}
        buttonText={t('SEND')}
        ActionComponent={({ children }) => (
          <div className="flex-between w-100 gap-3">
            <div className="w-100">{children}</div>
            <div className="w-100">
              <ButtonMaker text={t('SKIP')} outline block design="text-primary fw-bold" />
            </div>
          </div>
        )}
        FieldComponent={({ children }) => (
          <React.Fragment>
            <div>
              <InputGroup className="py-3 border-bottom">
                <Row>
                  <Col md={12} className="mb-2">
                    <h4> {t('SELECT_SERVICES_TYPE')}</h4>
                  </Col>
                  {services.map((item, index) => {
                    return (
                      <Col key={index} className="col-6 col-md-3 col-lg-2 mb-3">
                        <div className="service-card">
                          <ImageMaker src={item.img} />
                          <p className="mt-2">{item.text}</p>
                          <Input type="checkbox" />
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </InputGroup>
            </div>
            {children}
          </React.Fragment>
        )}
      ></AppForm>
    </div>
  );
};

export default Reservation;
