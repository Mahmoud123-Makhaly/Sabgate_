'use client';
import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Image from 'next/image';
import { useTranslate } from '@app/hooks';
import { Modal } from '@components';
import { Link } from '@navigation';

import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import BranchCard from './BranchCard';
import xmark from '@assets/svgs/contact-us/xmark.svg';
import { branches } from '../data';

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslate('COMP_Contact_Us');

  const onSubmit = (values: any) => {
    setShowModal(!showModal);
  };
  return (
    <Container className="my-4">
      <Modal isOpen={showModal} toggleShow={() => setShowModal(!showModal)}>
        <div className="py-5 text-center">
          <div className="text-start paddingx-20" onClick={() => setShowModal(false)}>
            <Image src={xmark} alt="xmark" className="pointer" />
          </div>
          <i className="bg-primary rounded-circle p-2 fa-solid fa-check fa-2x text-white"></i>
          <p className="font-24 fw-bold pt-3">{t('MODAL_THANKS')}</p>
          <p className="paddingy-32">{t('MODAL_MESSAGE')}</p>
          <Link
            href={'/list'}
            onClick={() => setShowModal(false)}
            className="bg-primary text-white paddingy-10 paddingx-106 rounded"
          >
            {t('MODAL_BUTTON')}
          </Link>
        </div>
      </Modal>
      <Row className="mb-4">
        <Col lg={7} className="mb-3 mb-lg-0">
          <ContactForm onSubmit={onSubmit} />
        </Col>
        <Col lg={5}>
          <ContactCard />
        </Col>
      </Row>
      <div>
        <div className="flex-col-start gap-2">
          <p className="fw-bold font-24">{t('BRANCHES_HEADER')}</p>
          <p className="pb-4">{t('BRANCHES_HEADER_MESSAGE')}</p>
        </div>
        <Row className="mb-4">
          {branches.map((branch, index) => (
            <Col md={6} lg={4} key={index} className="mb-3">
              <BranchCard name={branch.name} contactData={branch.contactData} mapLink="" />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ContactUs;
