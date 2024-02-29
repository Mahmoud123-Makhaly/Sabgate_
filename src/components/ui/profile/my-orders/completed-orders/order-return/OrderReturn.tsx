import React from 'react';
import { Badge, FormGroup, Label } from 'reactstrap';
import product from '@assets/images/product/image 98.png';
import * as Yup from 'yup';
import { Field } from 'formik';
import { useTranslate } from '@app/hooks';
import {
  ShipmentDetails,
  ShippingAddress,
  CartSummary,
  ICartSummaryDataProps,
  ButtonMaker,
  ItemRecap,
  AppForm,
  FormFieldType,
} from '@components';

import { address } from '../../../../data/address';
import { shipmentDetails } from '../../../../data';

interface IOrderReturn {
  showRecoveryDetails: React.Dispatch<React.SetStateAction<boolean>>;
}
const OrderReturn = (props: IOrderReturn) => {
  const t = useTranslate('Comp_Order_Return');

  const TableData: Array<ICartSummaryDataProps> = [
    { text: t('SUBTOTAL'), price: 30 },
    { text: t('DELIVERY_FEES'), price: 20 },
    { text: t('TOTAL'), price: 261 },
  ];
  const onSubmit = (value: any) => {
    console.log(value);
  };
  const formFields: Array<FormFieldType> = [
    {
      name: 'returnReason',
      label: t('RETURN_REASON'),
      type: 'textarea',
    },
  ];
  const validationSchema = Yup.object().shape({
    returnReason: Yup.string().required(t('REQUIRED_RETURN_REASON')),
  });

  return (
    <div className="mb-3">
      <h3 className="bg-light-gray font-24 fw-bold  p-3 rounded mb-3 text-dark">{t('ORDER_RETURN')}</h3>

      <AppForm
        initialValues={{
          returnReason: '',
        }}
        validationSchema={validationSchema}
        fields={formFields}
        buttonText={t('CONFIRM_RETURN')}
        onSubmit={onSubmit}
        FieldComponent={({ children }) => (
          <React.Fragment>
            <div className="p-3 rounded border mb-3">
              <ItemRecap
                title={`product name`}
                price={`100د.إ`}
                discount={`120 د.إ`}
                qty={`2`}
                imgSrc={product.src}
                imgAlt="product"
                imgSpace="col-md-2  "
                contentSpace="col-md-10 "
                imgClassName="border p-2 rounded-2"
                className="border"
              />
              <FormGroup>
                <Label>{t('RETURN_REASON')}</Label>
                <Field
                  as="textarea"
                  placeholder={t('RETURN_REASON')}
                  name="returnReason"
                  className="form-control"
                ></Field>
              </FormGroup>
            </div>
            <div className="p-3 rounded border mb-3">
              <ItemRecap
                title={`product name`}
                price={`100د.إ`}
                discount={`120 د.إ`}
                qty={`2`}
                imgSrc={product.src}
                imgAlt="product"
                imgSpace="col-md-2  "
                contentSpace="col-md-10 "
                imgClassName="border p-2 rounded-2"
                className="border"
              />
              <FormGroup>
                <Label>{t('RETURN_REASON')}</Label>
                <Field
                  as="textarea"
                  placeholder={t('RETURN_REASON')}
                  name="returnReason"
                  className="form-control"
                ></Field>
              </FormGroup>
            </div>
            <div className="rounded mb-3 border ">
              <h5 className=" mb-0 flex-between bg-light-gray p-3">
                <p className="pill fw-bold "> {t('BILL')}</p>
                <Badge color="primary" className="rounded-pill badge">
                  {t('CASH')}
                </Badge>
              </h5>
              <div className="order-summary-info">
                <CartSummary title={t('CART_SUMMARY')} data={TableData} />
              </div>
            </div>
            <div className=" rounded mb-3 border">
              <h5 className=" mb-0 flex-between bg-light-gray text-dark p-3 mb-3"> {t('SHIPPING_DETAILS')}</h5>
              <div className="shippment-info">
                <div className="px-3">
                  <div className="p-3 border rounded mb-3">
                    <ShipmentDetails data={shipmentDetails} />
                  </div>

                  <ShippingAddress data={address[0]} />
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      />
      {/* <ButtonMaker
        text={t('RETURN_CONFIRMATION')}
        design="mb-3"
        block
        disabled={toggleButton}
        onClick={() => showRecoveryDetails(false)}
      /> */}
      {/* ...............................app form    */}
    </div>
  );
};

export default OrderReturn;
