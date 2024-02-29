import React from 'react';
import { InputGroup, Label, Input } from 'reactstrap';
import { useTranslate } from '@app/hooks';

const WaterproofForm = () => {
  const t = useTranslate('COMP_WaterProof');
  return (
    <InputGroup className="d-flex flex-column gap-3 my-3">
      <h4 className="text-heading"> {t('WATER_PROOF_SERVICES')}</h4>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('THIN_WATERPROOF')}
      </Label>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('LIQUID_WATERPROOFING')}
      </Label>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('CEMENT_WATERPROOFING')}
      </Label>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('BITUMEN_WATERPROOFING')}
      </Label>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('POLYURETHANE_WATERPROOFING')}{' '}
      </Label>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('RENEW_REBUILDING')}
      </Label>
      <Label className="w-100 border rounded py-2 ps-4">
        <Input type="checkbox" className="me-3" />
        {t('POLYMER_MODIFIED_SYSTEMS')}
      </Label>
    </InputGroup>
  );
};

export default WaterproofForm;
