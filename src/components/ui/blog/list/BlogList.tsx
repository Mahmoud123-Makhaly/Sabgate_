'use client';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ReactPaginate from 'react-paginate';

import { useTranslate } from '@app/hooks';

import BlogCard from './BlogCard';
import CompanyCard from '../CompanyCard';

import blog1 from '@assets/images/blog/blog1.png';
import construction from '@assets/svgs/blog/Ellipse 1.svg';
import blog2 from '@assets/images/blog/blog2.png';
import blog3 from '@assets/images/blog/log3.png';

const BlogList = () => {
  const t = useTranslate('COMP_ConstructionGuide');
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
    {
      className: 'bg-light-blue',
      title: 'يدين Lorem ipsum ، المؤلف من كلمات',
      shareFrom: 'Lorem ipsum',
      shareFromImage: construction,
      shareDate: '20 أكتوبر 2023',
      description:
        'يدين Lorem ipsum ، المؤلف من كلمات غير ذات صلة بالموضوع ، بوجوده إلى Marco Tullio Cicerone وإلى بعض خطوات De finibus bonorum et ',
    },
  ];
  const BlogData = [
    {
      title: 'يدين Lorem ipsum ، المؤلف من كلمات',
      imageSrc: blog1,
      description:
        'يدين Lorem ipsum ، المؤلف من كلمات غير ذات صلة بالموضوع ، بوجوده إلى Marco Tullio Cicerone وإلى بعض خطوات De finibus bonorum et malorum (أعلى الخير والشر الأكبر) كتب عام 45 قبل الميلاد ، وهو كلاسيكي من الأدب اللاتيني يعود تاريخه إلى أكثر من 2000 عام.',
      readingTime: '2 دقائق قراءة',
      shareFrom: 'Lorem ipsum',
      shareFromImage: construction,
      shareDate: '20 أكتوبر 2023',
    },
    {
      title: 'يدين Lorem ipsum ، المؤلف من كلمات',
      imageSrc: blog2,
      description:
        'يدين Lorem ipsum ، المؤلف من كلمات غير ذات صلة بالموضوع ، بوجوده إلى Marco Tullio Cicerone وإلى بعض خطوات De finibus bonorum et malorum (أعلى الخير والشر الأكبر) كتب عام 45 قبل الميلاد ، وهو كلاسيكي من الأدب اللاتيني يعود تاريخه إلى أكثر من 2000 عام.',
      readingTime: '2 دقائق قراءة',
      shareFrom: 'Lorem ipsum',
      shareFromImage: construction,
      shareDate: '20 أكتوبر 2023',
    },
    {
      title: 'يدين Lorem ipsum ، المؤلف من كلمات',
      imageSrc: blog3,
      description:
        'يدين Lorem ipsum ، المؤلف من كلمات غير ذات صلة بالموضوع ، بوجوده إلى Marco Tullio Cicerone وإلى بعض خطوات De finibus bonorum et malorum (أعلى الخير والشر الأكبر) كتب عام 45 قبل الميلاد ، وهو كلاسيكي من الأدب اللاتيني يعود تاريخه إلى أكثر من 2000 عام.',
      readingTime: '2 دقائق قراءة',
      shareFrom: 'Lorem ipsum',
      shareFromImage: construction,
      shareDate: '20 أكتوبر 2023',
    },
  ];
  return (
    <Container className="mt-4 mb-4 ">
      <Row>
        <Col md={9} className="flex-col-start gap-4 justify-content-start">
          {BlogData.map((blog, index) => (
            <BlogCard
              key={index}
              description={blog.description}
              imageSrc={blog.imageSrc}
              readingTime={blog.readingTime}
              shareDate={blog.shareDate}
              shareFrom={blog.shareFrom}
              shareFromImage={blog.shareFromImage}
              title={blog.title}
            />
          ))}
        </Col>
        <Col md={3} className="flex-col-start gap-4 justify-content-start">
          {companyData.map((company, index) => (
            <CompanyCard
              className={company.className}
              description={company.description}
              key={index}
              shareDate={company.shareDate}
              shareFrom={company.shareFrom}
              shareFromImage={company.shareFromImage}
              title={company.title}
            />
          ))}
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
  );
};

export default BlogList;
