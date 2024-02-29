import React from 'react';
import { Row, Col } from 'reactstrap';
import { RadioCheck } from '@components';
import user from '@assets/svgs/form-steps/user.svg';
import userActive from '@assets/svgs/form-steps/user-active.svg';
import company from '@assets/svgs/form-steps/company.svg';
import companyActive from '@assets/svgs/form-steps/company-active.svg';
import { useTranslate } from '@app/hooks';
const BetterService = () => {
  const t = useTranslate('COMP_BetterService');
  return (
    <Row>
      <Col md={6}>
        <RadioCheck
          icon={user.src}
          activeIcon={userActive.src}
          className="p-5 rounded-4"
          text={t('INDIVIDUALS')}
          value={'أفراد'}
        />
      </Col>
      <Col md={6}>
        <RadioCheck
          icon={company.src}
          activeIcon={companyActive.src}
          className="p-5 rounded-4"
          text={t('COMPANIES')}
          value={'شركات'}
        />
      </Col>
    </Row>
  );
};

export default BetterService;
