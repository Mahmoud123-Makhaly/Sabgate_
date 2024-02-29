import React from 'react';
import img1 from '@assets/images/service/project-manager.png';
import img2 from '@assets/images/service/tools.png';
import { Col, Row } from 'reactstrap';
import { Figure } from '@components';
import { Link } from '@navigation';
const Figures = () => {
  return (
    <Row>
      <Col md={6}>
        <Link href="/consulting">
          <Figure
            img={img1.src}
            textPosition="down"
            text="استشارات هندسية خدمه عالية الجودة"
            className="s-figure1 rounded-4"
            textColor="white"
          />
        </Link>{' '}
      </Col>
      <Col md={6}>
        <Link href="/services/reservation">
          <Figure
            img={img2.src}
            textPosition="down"
            text="تطبيقات و خدمات"
            className="s-figure2 rounded-4"
            textColor="white"
          />
        </Link>
      </Col>
    </Row>
  );
};

export default Figures;
