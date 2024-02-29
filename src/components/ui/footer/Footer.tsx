'use client';
import React from 'react';
import Image from 'next/image';
import { Col, Container, Form, Input, Row } from 'reactstrap';
import { ButtonMaker } from '../../common';
import facebook from '@assets/svgs/social-media/facebook.svg';
import youtube from '@assets/svgs/social-media/youtube.svg';
import logo from '@assets/svgs/white-logo.svg';
import appStore from '@assets/svgs/touchpoints/app-store.svg';
import googlePlay from '@assets/svgs/touchpoints/google-play.svg';
import phone from '@assets/svgs/touchpoints/phone.svg';
import location from '@assets/svgs/touchpoints/location.svg';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';
const Footer = () => {
  const t = useTranslate('COMP_Footer');
  return (
    <div className="bg-dark text-white ">
      <Container>
        <div className="flex-between border-bottom pb-5 align-items-end">
          <Form className="flex-between w-50 rounded overflow-hidden">
            <Input type="text" className="rounded-0" placeholder={t('EMAIL_ADDRESS')} />
            <ButtonMaker design="bg-warning px-5 rounded-0" text={t('SUBSCRIBE_NOW')} type="submit" />
          </Form>
          <div className="d-none d-md-block">
            <p className="fw-bold mb-3">{t('FOLLOW_US')}</p>
            <div className="flex-between gap-3 ">
              <a href="https://www.linkedin.com/company/13334202/admin/" target="_blank">
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </a>
              <a href="https://www.instagram.com/sab_uae" target="_blank">
                <i className="fa-brands fa-instagram fa-xl"></i>
              </a>
              <a href="https://www.facebook.com/SABUAE" target="_blank">
                <Image src={facebook} alt="" />
              </a>
              <a href="https://www.youtube.com/c/SAB2281030" target="_blank">
                <Image src={youtube} alt="" />
              </a>
              <a href="https://twitter.com/SAB_UAE" target="_blank">
                <i className="fa-brands fa-x-twitter fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <Row className="py-5 border-bottom">
          <Col lg={3}>
            <Link href={'/'}>
              <Image src={logo} alt="" className="mb-3" />
            </Link>
            <p className="font-12">{t('ABOUT_SAB')}</p>
          </Col>
          <Col lg={2}>
            <h6 className="fw-bold mb-3">{t('SUPPORT_TEAM')}</h6>
            <ul className="font-12">
              <li>
                {' '}
                <Link href="/content/terms-and-conditions">{t('TERMS')} </Link>
              </li>

              <li>
                {' '}
                <Link href="/content/delivery-policy">{t('DELIVERY_POLICY')} </Link>
              </li>

              <li>
                {' '}
                <Link href="/content/return-policy">{t('RETURN_POLICY')} </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h6 className="fw-bold mb-3">{t('CONTACT_US')}</h6>
            <ul className="font-14">
              <li>
                <i className="fa-regular fa-envelope me-2"></i>
                <a href="mailto:info@sab-uae.com">info@sab-uae.com</a>
              </li>
              <li>
                <Image src={phone} alt="" className="me-2" />
                <a href="tel:+971600541110">(+971) 600 541110</a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/oi2U3oTTHRmPJRqz9" target="_blank">
                  <Image src={location} alt="" className="me-2" />
                  {t('SAB_ADDRESS')}
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2}>
            <h6 className="fw-bold mb-3">{t('SAB')}</h6>
            <ul>
              <li>
                <Link href={'/list'}>{t('SHOP')}</Link>
              </li>
    
                <li>          <Link href="/contact-us">{t('SAB_TEAM')}   </Link></li>
           
            </ul>
          </Col>
          <Col>
            <h6>{t('GET_APP')}</h6>
            <div className="flex-col-start">
              <a href="https://play.google.com/store/apps/details?id=com.app.sabgate&pli=1" target="_blank">
                <Image src={googlePlay} alt="" />
              </a>
            </div>
          </Col>
          <Col>
            <div className="d-md-none d-block">
              <p className="fw-bold mb-3">{t('FOLLOW_US')}</p>
              <div className="flex-between gap-3 ">
                <a href="https://www.linkedin.com/company/13334202/admin/" target="_blank">
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </a>
                <a href="https://www.instagram.com/sab_uae" target="_blank">
                  <i className="fa-brands fa-instagram fa-xl"></i>
                </a>
                <a href="https://www.facebook.com/SABUAE" target="_blank">
                  <Image src={facebook} alt="" />
                </a>
                <a href="https://www.youtube.com/c/SAB2281030" target="_blank">
                  <Image src={youtube} alt="" />
                </a>
                <a href="https://twitter.com/SAB_UAE" target="_blank">
                  <i className="fa-brands fa-x-twitter fa-xl"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <p className="pt-4 text-end">&copy; {new Date().getFullYear()} SAB All rights reserved</p>
      </Container>
    </div>
  );
};

export default Footer;
