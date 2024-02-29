'use client';

import React from 'react';
import { Row, Col } from 'reactstrap';

import more from '@assets/images/shop/more.svg';
import sapGate from '@assets/images/shop/sapgate.svg';
import electronic from '@assets/images/shop/electronic.svg';
import experts from '@assets/images/shop/experts.svg';
import information from '@assets/images/shop/information.svg';

import { Isolation } from '@components';
import { useTranslate } from '@app/hooks';

import ImageOverlay from './ImageOverlay';

const Shop = () => {
  const t = useTranslate('Comp_Shop');
  return (
    <React.Fragment>
      <div className="shop my-4">
        <Row>
          <Col lg={6}>
            <ImageOverlay
              imgSrc={more}
              imgAlt="more"
              className="find_out_more  mb-3 mb-xl-0 w-100"
              text={t('FIND_OUT_MORE')}
              textBackground="primary"
            />
          </Col>
          <Col lg={6}>
            <Row>
              <Col className="col-6 col-md-6 flex-col">
                <ImageOverlay
                  imgSrc={sapGate}
                  imgAlt="sapGate"
                  className="sab_gate mb-4 p-0 w-100"
                  text={t('SAB_GATE')}
                  textBackground="primary"
                />
                <ImageOverlay
                  imgSrc={electronic}
                  imgAlt="electronic"
                  className="sab_store  mb-4 mb-lg-0 p-0 w-100"
                  text={t('SAB_ELECTRONIC_STORE')}
                  textBackground="primary"
                  path="/list/123"
                />
              </Col>
              <Col className="col-6 col-md-6 flex-col">
                <ImageOverlay
                  imgSrc={experts}
                  imgAlt="experts"
                  className="ask_experts  mb-4 px-0 w-100"
                  text={t('ASK_EXPERTS')}
                  textBackground="primary"
                />

                <ImageOverlay
                  imgSrc={information}
                  imgAlt="information"
                  className="sab_information  px-0 w-100"
                  text={t('SAB_INFORMATION_CENTER')}
                  textBackground="primary"
                  path="/blog"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Isolation />
    </React.Fragment>
  );
};

export default Shop;
