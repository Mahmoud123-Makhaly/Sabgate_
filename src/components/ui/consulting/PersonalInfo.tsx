import React from 'react';
import { InputGroup, Label, Input } from 'reactstrap';
import { ImageMaker } from '@components';
import cservice from '@assets/images/consulting-form/cservice.png';
import { useTranslate } from '@app/hooks';

const PersonalInfo = () => {
  const t = useTranslate('COMP_PersonalInfo');
  return (
    <InputGroup className="flex-col-start gap-3">
      <ImageMaker src={cservice.src} alt="" className="w-25 align-self-center" />
      <h4> {t('PERSONAL_DATA')}</h4>
      <Label> {t('NAME')}</Label>
      <Input type="text" />
      <Label>   {t("PHONE_NUMBER")}</Label>
      <Input type="text" />
    </InputGroup>
  );
};

export default PersonalInfo;
