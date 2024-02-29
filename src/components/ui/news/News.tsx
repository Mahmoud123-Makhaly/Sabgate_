'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from '@navigation';
import { Container, Row, Col } from 'reactstrap';
import { ImageMaker } from '@components';
import { useTranslate } from '@app/hooks';

import construction from '@assets/svgs/blog/Ellipse 1.svg';
import blog from '@assets/images/blog/blogDetails.png';
import read from '@assets/svgs/blog/reading.svg';
import arrow from '@assets/svgs/blog/arrow.svg';

const News = () => {
  const t = useTranslate('COMP_News');
  const companyData = [
    {
      className: 'bg-light-blue',
      title: 'يدين Lorem ipsum ، المؤلف من كلمات',
      shareFrom: 'Lorem ipsum',
      shareFromImage: construction,
      shareDate: '20 أكتوبر 2023',
      description:
        'يدين Lorem ipsum ، المؤلف من كلمات غير ذات صلة بالموضوع ، بوجوده إلى Marco Tullio Cicerone وإلى بعض خطوات De finibus bonorum et ',
    },
    {
      className: 'bg-light-orange',
      title: 'يدين Lorem ipsum ، المؤلف من كلمات',
      shareFrom: 'Lorem ipsum',
      shareFromImage: construction,
      shareDate: '20 أكتوبر 2023',
      description:
        'يدين Lorem ipsum ، المؤلف من كلمات غير ذات صلة بالموضوع ، بوجوده إلى Marco Tullio Cicerone وإلى بعض خطوات De finibus bonorum et ',
    },
  ];
  return (
    <Container className="my-4">
      <Row>
        <Col md={9} className="flex-col-start ">
          <div className="w-100">
            <ImageMaker src={blog} alt="blog" />
          </div>
          <div>
            <p className="fw-bold font-24 text-primary py-3">تهنئة بمناسبة موسم المطر</p>
            <div className="d-flex align-items-center">
              <div>
                <ImageMaker src={construction} alt="construction" />
              </div>
              <div className="paddingx-16 d-flex align-items-center">
                <p className="pe-1"> {t('ARTICLE_FROM_SITE')} </p>
                <p className="text-primary fw-bold">Lorem ipsum</p>
                <p className="px-3">20 أكتوبر 2023</p>
                <div className="d-flex align-items-center">
                  <ImageMaker src={read} alt="read" />
                  <p className="font-14 ps-2">2 دقائق قراءة</p>
                </div>
              </div>
            </div>
            <p>
              يدين Lorem ipsum ، المؤلف من كلمات غير ذات صلة بالموضوع ، بوجوده إلى Marco Tullio Cicerone وإلى بعض
              خطوات De finibus bonorum et malorum (أعلى الخير والشر الأكبر) كتب عام 45 قبل الميلاد ، وهو كلاسيكي من
              الأدب اللاتيني يعود تاريخه إلى أكثر من 2000 عام.يدين Lorem ipsum ، المؤلف من كلمات غير ذات صلة بالموضوع ،
              بوجوده إلى Marco Tullio Cicerone وإلى بعض خطوات De finibus bonorum et malorum (أعلى الخير والشر
              الأكبر) كتب عام 45 قبل الميلاد ، وهو كلاسيكي من الأدب اللاتيني يعود تاريخه إلى أكثر من 2000 عام.يدين Lorem
              ipsum ، المؤلف من كلمات غير ذات صلة بالموضوع ، بوجوده إلى Marco Tullio Cicerone وإلى بعض خطوات De finibus
              bonorum et malorum (أعلى الخير والشر الأكبر) كتب عام 45 قبل الميلاد ، وهو كلاسيكي من الأدب اللاتيني يعود
              تاريخه إلى أكثر من 2000 عام.يدين Lorem ipsum ، المؤلف من كلمات غير ذات صلة بالموضوع ، بوجوده إلى Marco
              Tullio Cicerone وإلى بعض خطوات De finibus bonorum et malorum (أعلى الخير والشر الأكبر) كتب عام 45 قبل
              الميلاد ، وهو كلاسيكي من الأدب اللاتيني يعود تاريخه إلى أكثر من 2000 عام.يدين Lorem ipsum ، المؤلف من
              كلمات غير ذات صلة بالموضوع ، بوجوده إلى Marco Tullio Cicerone وإلى بعض خطوات De finibus bonorum et
              malorum (أعلى الخير والشر الأكبر) كتب عام 45 قبل الميلاد ، وهو كلاسيكي من الأدب اللاتيني يعود تاريخه إلى
              أكثر من 2000 عام.
            </p>
            <div className="flex-between">
              <div className="d-flex paddingy-24 fw-bold">
                <p> {t('SORT_BY')} :</p>
                <p className="text-primary ps-2"> انظمة العزل المائي</p>
              </div>
              <div className="d-flex paddingy-24 fw-bold">
                <p> {t('LAST_UPDATE')} :</p>
                <p className="text-primary ps-2">2/11/2023</p>
              </div>
            </div>
            <Link
              href={'/services'}
              className="d-flex gap-1 align-items-center bg-primary text-white paddingy-8 paddingx-16 rounded fit-content"
            >
              <div className="bg-white paddingx-6 rounded me-2">
                <Image src={arrow} alt="arrow" />
              </div>
              <p className="fw-bold"> {t('PREVIOUS_ARTICLE')}</p>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default News;
