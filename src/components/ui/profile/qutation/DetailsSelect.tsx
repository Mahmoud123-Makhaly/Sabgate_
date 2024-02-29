import React from 'react';
import { Input, InputGroup } from 'reactstrap';
import QutationCard from './QutationCard';
import { qutationInfo } from '../../data';
import useTranslate from '../../../../hooks/useTranslate';
const DetailsSelect = () => {
  const t = useTranslate('COMP_DetailsSelect');
  return (
    <React.Fragment>
      <QutationCard info={qutationInfo} />
      <p className="text-primary font-16 py-3 px-0 fw-bold"> {t('MORE_DETAILS')} </p>
      <InputGroup className="flex-col p-0 gap-3">
        <Input type="select" className="w-100">
          <option disabled selected>
             {t('INDIVIDUALS_COMPANIES')}
          </option>
          <option value=""> {t('INDIVIDUALS')}</option>
          <option value=""> {t('COMPANIES')}</option>
        </Input>
        <Input type="select" className="w-100">
          <option value="" disabled selected>
            {t('CHOOSE_BUILDING_TYPE')}
          </option>
          <option value="">{t('APARTMENT')}</option>
          <option value=""> {t('VILLA')}</option>
        </Input>
        <Input type="select" className="w-100">
          <option value="" disabled selected>
            {t('CHOOSE_SERVICES')}{' '}
          </option>
          <option value="">شقة</option>
          <option value="">فيلا</option>
        </Input>
        <Input type="select" className="w-100">
          <option value="" disabled selected>
            {t('NEAREST_SPACE')}
          </option>
          <option value="">100 م</option>
          <option value="">200 م</option>
          <option value="">300 م</option>
          <option value="">400 م</option>
        </Input>
        <Input type="textarea" placeholder={t("ADDITIONAL_INFORMATION")} className="w-100" />
      </InputGroup>
    </React.Fragment>
  );
};

export default DetailsSelect;
