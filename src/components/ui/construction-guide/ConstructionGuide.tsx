'use client';
import React from 'react';
import { Col, Container, Input, Row } from 'reactstrap';
import ReactPaginate from 'react-paginate';

import { useTranslate } from '@app/hooks';
import { CarouselMaker, ImageMaker, Search } from '@components';
import add from '@assets/images/construction-guide/add-img.png';
import ConstructionCard from './ConstructionCard';

const ConstructionGuide = () => {
  const t = useTranslate('COMP_ConstructionGuide');
  return (
    <React.Fragment>
      <div className="mb-3">
        <CarouselMaker
          numVisible={1}
          items={[
            <div className="flex-center" key={0}>
              <ImageMaker src={add} alt="add" />
            </div>,
            <div className="flex-center" key={1}>
              <ImageMaker src={add} alt="add" />
            </div>,
          ]}
        />
      </div>
      <div className="bg-light-blue p-3 mb-3">
        <Container>
          <Row>
            <Col md={6}>
              <Search
                searchButton={<i className="fa-solid fa-magnifying-glass"></i>}
                placeholder={t('SEARCH')}
                inputType="text"
              />
            </Col>
            <Col md={6}>
              <Input type="select" className="construction-select text-primary">
                <option value={'1'}> {t('CHOOSE_FEILD')}</option>
                <option value={'2'}>أختر المجال</option>
                <option value={'3'}>أختر المجال</option>
              </Input>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-3">
        <Row>
          <Col md={4} className="pb-3">
            <ConstructionCard />
          </Col>
          <Col md={4} className="pb-3">
            <ConstructionCard />
          </Col>
          <Col md={4} className="pb-3">
            <ConstructionCard />
          </Col>
          <Col md={4} className="pb-3">
            <ConstructionCard />
          </Col>
          <Col md={4} className="pb-3">
            <ConstructionCard />
          </Col>
          <Col md={4} className="pb-3">
            <ConstructionCard />
          </Col>
          <Col className="text-muted text-nowrap">
            <ReactPaginate
              containerClassName="react-paginate"
              breakLabel="..."
              nextLabel={t('NEXT_LABEL')}
              pageRangeDisplayed={3}
              pageCount={10}
              previousLabel={t('PREV_LABEL')}
              renderOnZeroPageCount={null}
              forcePage={1}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ConstructionGuide;
