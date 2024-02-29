import React from "react";
import { Col, Row } from "reactstrap";
import { Figure } from "@components";
import { useTranslate } from "@app/hooks";
import packages from "@assets/images/home/packages.png";
import consulting from "@assets/images/home/consulting.png";
import products from "@assets/images/home/products.png";
const Figures = () => {
  const t = useTranslate("COMP_Figures");
  return (
    <Row className="overflow-x-auto">
      <Col>
        <Figure
          textPosition="floating"
          img={products.src}
          text={t("PRODUCTS")}
          textbg="bg-black"
          textColor="white"
          opacity={75}
        />
      </Col>
      <Col>
        <Figure
          textPosition="floating"
          img={consulting.src}
          text={t("CONSULTING")}
          textbg="bg-black"
          textColor="white"
          opacity={75}
        />
      </Col>
      <Col>
        <Figure
          textPosition="floating"
          img={packages.src}
          text={t("PACKAGES")}
          textbg="bg-black"
          textColor="white"
          opacity={75}
        />
      </Col>
    </Row>
  );
};

export default Figures;
