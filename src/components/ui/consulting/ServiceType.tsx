import React from 'react';
import { InputGroup, Row, Col } from 'reactstrap';
import { RadioCheck } from '../../common';
import user from '@assets/svgs/form-steps/user.svg';
import userActive from '@assets/svgs/form-steps/user-active.svg';
import company from '@assets/svgs/form-steps/company.svg';
import companyActive from '@assets/svgs/form-steps/company-active.svg';
import house from '@assets/svgs/form-steps/house.svg';
import houseActive from '@assets/svgs/form-steps/house-active.svg';
import { useTranslate } from '@app/hooks';
const ServiceType = () => {
  const t = useTranslate('COMP_ServicesType');
  return (
    <React.Fragment>
      <Row className="mb-3">
        <Col>
          <h4> {t('SERVICES_TYPE')} </h4>
        </Col>
      </Row>
      <InputGroup>
        <Row className="w-100">
          <Col md={6}>
            <RadioCheck
              icon={user.src}
              activeIcon={userActive.src}
              className="p-5 rounded-4"
              text={t('IMPROVE_BUILDING_PERFORMANCE')}
              value={'أفراد'}
            />
          </Col>
          <Col md={6}>
            <RadioCheck
              icon={house.src}
              activeIcon={houseActive.src}
              className="p-5 rounded-4"
              text={t('WATERBROOF_SERVICES')}
              value={'شركات'}
            />
          </Col>
          <Col md={6}>
            <RadioCheck
              icon={company.src}
              activeIcon={companyActive.src}
              className="p-5 rounded-4"
              text={t('SERVICES_CONSULTATIONS')}
              value={'أفراد'}
            />
          </Col>
          <Col md={6}>
            <RadioCheck
              icon={company.src}
              activeIcon={companyActive.src}
              className="p-5 rounded-4"
              text={t('OTHER')}
              value={'شركات'}
            />
          </Col>
        </Row>
      </InputGroup>
    </React.Fragment>
  );
};

export default ServiceType;
