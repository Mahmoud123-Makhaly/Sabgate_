"use client";
import React from "react";
import { Col, Row } from "reactstrap";
import { plans } from "./plans";
import clsx from "clsx";
import { ButtonMaker, ImageMaker } from "@components";
import Image from "next/image";
import benefit from "@assets/svgs/feature-mark.svg";
import packagelabel from "@assets/svgs/package.svg";
import {BadgeMaker} from "@components";
import fact from "@assets/images/packages/image 37.png";
import worker1 from "@assets/images/packages/Rectangle 1153.png";
import worker2 from "@assets/images/packages/image 20.png";
const PaymentPlans = () => {
  return (
    <React.Fragment>
      <div className="flex-col-start gap-3 mb-3">
        <h4>اختر خطة ساب جيت الخاصة بك</h4>
        <p className="font-20">نظام باقات ساب جيت</p>
        <p className="text-start">
          لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة أو
          الخط دون الاعتماد على محتوى معنوي. قد يستخدم لوريم إيبسوم كنص بديل قبل
          وضع النص النهائي المطلوب للتصميم. كما يستخدم لإخفاء النص في عملية تسمى
          بالتغريق، والتي تسمح للمصممين بالنظر إلى شكل صفحة ويب أو منشور، دون أن
          يؤثر معنى النص على التصميم. يستخدم لإظهار نماذج أولية لبرامج أو
          تطبيقات أو مواقع إنترنت وغيرها دون ترك أثر كبير
        </p>
      </div>
      <Row className="plans pb-5">
        {plans.map((plan, index) => {
          return (
            <Col
              key={index}
              className={`col-4 ${clsx({
                "standard-plan": plan.title === "Standard",
              })}`}
            >
              <div
                className={`payment-plan ${
                  plan.label && "border-orange pt-0"
                } `}
              >
                {plan.label && (
                  <div className="flex-between w-100">
                    <div className="package-label rounded-bottom">
                      <Image src={packagelabel} alt="" />
                    </div>
                    <BadgeMaker
                      color="primary"
                      text="الأكثر توفيرا"
                      className="p-2 rounded-pill fw-normal"
                    />
                  </div>
                )}
                <div className="plan-title">
                  <h4>{plan.title}</h4>
                </div>
                <div className="plan-price">
                  <p className="font-20 fw-bold">{plan.price}</p>
                </div>
                <div>
                  <p className="text-gray">{plan.expire}</p>
                </div>
                <div className="plan-desc text-gray fw-bold text-center">
                  {plan.description}
                </div>
                <ul>
                  <li className="flex-start gap-3 bg-light-blue p-4">
                    <Image src={benefit} alt="" />
                    <p>لوريم إيبسوم هو نص مؤقت يستخدم </p>
                  </li>
                  <li className="flex-start gap-3 p-4">
                    <Image src={benefit} alt="" />
                    <p>لوريم إيبسوم هو نص مؤقت يستخدم </p>
                  </li>
                  <li className="flex-start gap-3 bg-light-blue p-4">
                    <Image src={benefit} alt="" />
                    <p>لوريم إيبسوم هو نص مؤقت يستخدم </p>
                  </li>
                  <li className="flex-start gap-3 p-4">
                    <Image src={benefit} alt="" />
                    <p>لوريم إيبسوم هو نص مؤقت يستخدم </p>
                  </li>
                  <li className="flex-start gap-3 bg-light-blue p-4">
                    <Image src={benefit} alt="" />
                    <p>لوريم إيبسوم هو نص مؤقت يستخدم </p>
                  </li>
                </ul>
                <ButtonMaker
                  text={plan.buttonText}
                  block
                  design={`mt-3 ${plan.label && "bg-orange"}`}
                />
              </div>
            </Col>
          );
        })}
      </Row>
      <div className="text-start mb-3">
        <p className="fw-bold font-24 text-primary my-3">
          تحتاج مشروع واحد فقط؟
        </p>
        <p>
          لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر بيقات أو مواقع إنترنت
          وغيرها دون ترك أثر كبير
        </p>
      </div>
      <Row className="pt-0  rounded border">
        <Col className="paddingy-38 paddingx-24">
          <div className="bg-light-blue padding-42">
            <Row>
              <Col md={6}>
                <ImageMaker src={fact}></ImageMaker>
              </Col>
              <Col md={6}>
                <ImageMaker src={worker1}></ImageMaker>
                <ImageMaker src={worker2}></ImageMaker>
              </Col>
            </Row>
            <div className="text-start">
              <p className="fw-bold my-3">
                لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر بيقات
              </p>
              <p className="mb-2">
                لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر بيقات أو مواقع
                إنترنت وغيرها دون ترك أثر كبيرلوريم إيبسوم هو نص مؤقت يستخدم في
                التصميم والنشر بيقات أو مواقع إنترنت وغيرها دون ترك أثر
                كبيرلوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر بيقات أو
                مواقع إنترنت وغيرها دون ترك أثر كبيرلوريم إيبسوم هو نص مؤقت
                يستخدم في التصميم والنشر بيقات أو مواقع إنترنت وغيرها دون ترك
                أثر كبيرلوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر بيقات
                أو مواقع إنترنت وغيرها دون ترك أثر كبيرلوريم إيبسوم هو نص مؤقت
                يستخدم في التصميم والنشر بيقات أو مواقع إنترنت وغيرها دون ترك
                أثر كبير
              </p>
            </div>
          </div>
        </Col>
        <Col md={4} className="paddingy-38 paddingx-24">
          <div>
            <div className="plan-title">
              <h4>الباقة المشروع الواحد</h4>
            </div>
            <div className="plan-price mb-3">
              <p className="font-20 fw-bold">150.00 د.إ.</p>
            </div>
            <div className="plan-desc text-gray fw-bold text-center mb-3">
              لوريم إيبسوم هو نص مؤقت يستخدم في التصميم على محتوى معنوي
            </div>
            <ul>
              <li className="flex-start gap-3 bg-light-blue p-4">
                <Image src={benefit} alt="" />
                <p>لوريم إيبسوم هو نص مؤقت يستخدم </p>
              </li>
              <li className="flex-start gap-3 p-4">
                <Image src={benefit} alt="" />
                <p>لوريم إيبسوم هو نص مؤقت يستخدم </p>
              </li>
              <li className="flex-start gap-3 bg-light-blue p-4">
                <Image src={benefit} alt="" />
                <p>لوريم إيبسوم هو نص مؤقت يستخدم </p>
              </li>
              <li className="flex-start gap-3 p-4">
                <Image src={benefit} alt="" />
                <p>لوريم إيبسوم هو نص مؤقت يستخدم </p>
              </li>
              <li className="flex-start gap-3 bg-light-blue p-4">
                <Image src={benefit} alt="" />
                <p>لوريم إيبسوم هو نص مؤقت يستخدم </p>
              </li>
            </ul>
            <ButtonMaker text={"أشترك"} block design={`mt-3 `} />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default PaymentPlans;
