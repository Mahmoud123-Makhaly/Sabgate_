"use client";

import React, { useState } from "react";
import { Badge, Col, Row } from "reactstrap";

import { useTranslate } from "@app/hooks";
import { ButtonMaker, Counter, ImageMaker } from "@components";
import del from "@assets/svgs/bin.svg";
import product from "@assets/images/product/image 98.png";
const CartItem = () => {
  const [counter, setCounter] = useState(1);
  const t = useTranslate("COMP_CartItem");
  return (
    <div className="rounded mb-4 border p-3">
      <Row>
        <Col lg={4} className="ps-0 border rounded flex-col">
          <ImageMaker src={product} alt="cart-item" className="rounded" />
        </Col>
        <Col lg={8}>
          <Badge color="success" pill>
            {t("NEW")}
          </Badge>
          <div className="flex-between">
            <div>
              <h5 className="fw-bold my-2 font-14"> Product Name </h5>
            </div>
            <div className="d-flex align-items-center">
              <h6 className="my-3 fw-bold font-16">360 د.إ.</h6>
              <del className="mx-1 font-16 text-muted">400 د.إ.</del>
            </div>
          </div>
          <p className="font-14">{t("DELIVERY_TIME")}</p>
          <hr />
          <p className="font-12">
            لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
            ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور
            او فلاير على سبيل المثال
          </p>
          <hr />
          <div>
            <div className="d-flex align-items-center">
              <h5 className="fw-bold my-2 pe-3 font-16"> {t("SIZE")} </h5>
              <p className="text-muted">600مم * 1250مم</p>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="fw-bold my-2 pe-3 font-16"> {t("DENSITY")} </h5>
              <p className="text-muted">(32-35) كغ/سم 3</p>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="fw-bold my-2 pe-3 font-16"> {t("THICKNESS")}</h5>
              <p className="text-muted">(50مم)</p>
            </div>
            <hr />
          </div>
          <div className="d-flex">
            <ButtonMaker
              block={false}
              design="bg-transparent card-icon border rounded"
            >
              <ImageMaker
                src={del}
                alt="delete"
                className="img-fluid rounded"
              />
            </ButtonMaker>
            <ButtonMaker
              block={false}
              design="bg-transparent card-icon border rounded-circle mx-3"
            >
              <i className="fa-regular fa-heart icon text-primary font-24 "></i>
            </ButtonMaker>
            <Counter count={counter} setCount={setCounter} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
