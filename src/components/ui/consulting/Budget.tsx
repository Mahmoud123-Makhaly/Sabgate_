import React from 'react';
import { InputGroup, Label, Input } from 'reactstrap';
import { ImageMaker } from '../../common';
import budget from '@assets/images/consulting-form/budget.png';
import { useTranslate } from '@app/hooks';

const Budget = () => {
  const t = useTranslate('COMP_Budget');
  return (
    <InputGroup className="flex-col-start gap-3">
      <ImageMaker src={budget} alt="budget" className="w-25 align-self-center" />
      <h4 className="text-heading"> {t('WHAT_IS_YOUR_BUDGET')} </h4>
      <div className="d-flex gap-3">
        <div>
          <Label> {t('MIN_PRICES')} </Label>
          <Input type="select">
            <option value={100000}> {t('UNLIMITED')} </option>
          </Input>
        </div>
        <div>
          {' '}
          <Label> {t('MAX_PRICE')}</Label>
          <Input type="select" value={100000}>
            <option>{t('UNLIMITED')} </option>
          </Input>
        </div>
      </div>
    </InputGroup>
  );
};

export default Budget;
