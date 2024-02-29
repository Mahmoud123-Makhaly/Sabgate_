import React from 'react';
import { InputGroup, Label, Input } from 'reactstrap';
import { useTranslate } from '@app/hooks';

const Property = () => {
  const t = useTranslate('COMP_Property');
  return (
    <InputGroup className="d-flex flex-column gap-3 my-3">
      <h4 className="text-heading"> {t('CHOOSE_BUILDING_TYPE')} </h4>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('APARTMENT')}
      </Label>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('VILLA')}
      </Label>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('HOUSING_GATHEERING')}
      </Label>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('ECOMMERCE_BUILDING')}
      </Label>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('INSTITUION')}
      </Label>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('RENEW_REBUILDING')}
      </Label>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />

        {t('OTHER')}
      </Label>
      <p className="text-gray"> {t('MORE_DETAILS')} </p>
      <Input type="text" placeholder={t('MORE_DETAILS_PLACEHOLDER')} className="w-100" />
    </InputGroup>
  );
};

export default Property;
