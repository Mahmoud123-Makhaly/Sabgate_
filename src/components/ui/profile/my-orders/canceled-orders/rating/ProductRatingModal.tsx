import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Rating } from 'primereact/rating';
import { Nullable } from 'primereact/ts-helpers';
import * as Yup from 'yup';

import { FormFieldType, ImageMaker } from '@components';
import { useTranslate } from '@app/hooks';

import ProductEvaluationForm from './ProductRatingForm';
import { RatingCardData } from './data';

interface IProductEvaluationProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<string>>;
}
const ProductRatingModal = (props: IProductEvaluationProps) => {
  const { setIsOpenModal } = props;
  const [ratingValue, setRatingValue] = useState<Nullable<number>>(null);
  const t = useTranslate('COMP_Product_Evaluation');
  const formFields: Array<FormFieldType> = [
    {
      name: 'subject',
      label: t('WHRITE_PRODUCT_EVALUATION'),

      placeholder: t('EXEPERIENCE_INQUIRY'),
      type: 'textarea',
    },
  ];
  const onSubmit = (values: any) => {
    setIsOpenModal('');
    setIsOpenModal('feedback');
  };
  const validationSchema = Yup.object().shape({
    subject: Yup.string().required(t('REQUIRED_EVALUATION')),
  });

  return (
    <div>
      <i
        className="fa-solid fa-xmark close-icon text-gray pointer w-100   text-end"
        onClick={() => setIsOpenModal('')}
      ></i>

      <div className="my-3">
        <Row>
          <Col md={2} className="pe-0">
            <div className="p-3 border rounded-2">
              <ImageMaker src={RatingCardData[0].imgSrc} alt={RatingCardData[0].imgAlt} />
            </div>
          </Col>
          <Col md={10}>
            <div>
              <p className="text-start text-dark fw-bold"> {RatingCardData[0].title}</p>
              <div className="my-3 border-top border-bottom py-3">
                <Rating value={ratingValue || 0} onChange={e => setRatingValue(e.value)} cancel={false} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <ProductEvaluationForm
        initialValues={{
          subject: '',
        }}
        validationSchema={validationSchema}
        fields={formFields}
        buttonText={t('SEND')}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ProductRatingModal;
