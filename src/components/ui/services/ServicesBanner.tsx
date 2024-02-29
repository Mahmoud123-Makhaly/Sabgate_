import React from "react";
import Image from "next/image";
import engineer from "@assets/images/service/engineer.png";
import { Col, Container, Row } from "reactstrap";
import { Link } from "@navigation";
import { ImageMaker } from "@components";
import whatsapp from "@assets/svgs/social-media/whatsapp.svg";
const ServicesBanner = () => {
  return (
    <div className="service-banner position-relative flex-col p-5 bg-orange">
      <Container>
        <Row className="bg-white p-3 p-lg-5 rounded w-100">
          <Col lg={8} className="order-lg-last">
            <ImageMaker src={engineer} className="rounded my-2 my-lg-0" />
          </Col>
          <Col lg={4} className="flex-col-start px-0">
            <Row>
              <Col md={6} lg={12} className="flex-col ">
                <h4 className="text-center  pt-3 pt-md-0 ">
                  احجز استشارات هندسية أو احصل على عروض أسعار
                </h4>
              </Col>
              <Col md={6} lg={12} className="flex-col">
                <Link
                  href={""}
                  className="bg-orange text-white w-100 rounded p-3 text-center my-2"
                >
                  إحجز الان
                </Link>
                <a
                  href="https://wa.me/+971600541110"target="_blank"
                  className="w-100 bg-success text-white rounded p-3 text-center my-2"
                >
                  <Image src={whatsapp} alt="" className="me-2" />
                  واتساب معنا
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesBanner;
