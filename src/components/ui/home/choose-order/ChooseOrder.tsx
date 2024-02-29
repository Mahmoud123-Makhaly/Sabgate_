"use client";
import React from "react";
import { Col, Form, Input, Row } from "reactstrap";
import factory from "@assets/images/home/factory.jpg";
import workers from "@assets/images/home/workers.jpg";
import engineer from "@assets/images/home/technichian.jpg";
import { IconLink, ImageMaker } from "../../../common";
import { useTranslate } from "@app/hooks";
const ChooseOrder = () => {
  const t = useTranslate("COMP_ChooseOrder");
  return (
    <Row className="">
      <Col lg={7}>
        <Row>
          <Col className="col-6">
            <ImageMaker src={factory.src} alt="" />
          </Col>
          <Col className="col-6 flex-col justify-content-between">
            <ImageMaker src={workers.src} alt="" className="w-100" />
            <ImageMaker src={engineer.src} alt="" className="w-100" />
          </Col>
        </Row>
      </Col>
      <Col className="px-md-5" lg={5}>
        <h4 className="fw-bold">{t("CHOOSE_ORDER")}</h4>
        <div className="bg-white rounded p-5 mt-3">
          <Form className="flex-col gap-3">
            <Input type="select" className="construction-select">
              <option>{t("CHOOSE_SERVICE")}</option>
              <option>{t("CHOOSE_SERVICE")}</option>
              <option>{t("CHOOSE_SERVICE")}</option>
            </Input>
            <Input type="select" className="construction-select">
              <option>{t("IDENTIFY_SPACE")}</option>
              <option>{t("IDENTIFY_SPACE")}</option>
              <option>{t("IDENTIFY_SPACE")}</option>
            </Input>
            <Input type="select" className="construction-select">
              <option>{t("CHOOSE_PRODUCTS")}</option>
              <option>{t("CHOOSE_PRODUCTS")}</option>
              <option>{t("CHOOSE_PRODUCTS")}</option>
            </Input>
            <IconLink fill text={t("PRICE_LIST")} href={"/list"} width="100%" />
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default ChooseOrder;
