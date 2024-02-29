'use client';
import React from 'react';
import { Col, Row } from 'reactstrap';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { ButtonMaker, ImageMaker } from '@components';

import read from '@assets/svgs/blog/reading.svg';
import noImg from '@assets/svgs/noimg.svg';
import { Link } from '@navigation';
import { useTranslate } from '@app/hooks';

interface BlogCardProps {
  title?: string;
  imageSrc?: string | StaticImport;
  description?: string;
  readingTime?: string;
  shareFrom?: string;
  shareFromImage?: string | StaticImport;
  shareDate?: string;
}
const BlogCard = (props: BlogCardProps) => {
  const t = useTranslate('COMP_BlogCard');
  const { title, imageSrc, description, readingTime, shareFrom, shareDate, shareFromImage } = props;
  return (
    <Row>
      <Col md={4}>
        <ImageMaker src={imageSrc ? imageSrc : noImg} alt="blog1" />
      </Col>
      <Col md={8} className="d-flex flex-column justify-content-between">
        <div>
          <p className="fw-bold font-24 text-primary">{title}</p>
          <div className="d-flex paddingy-16">
            {shareFromImage && (
              <div>
                <ImageMaker src={shareFromImage} alt={`${shareFrom}`} />
              </div>
            )}
            <div className="paddingx-16">
              <div className="d-flex pb-2">
                <p> {t('ARTICLE_FROM_SITE')}</p>
                <p className="text-primary fw-bold ps-2">{shareFrom}</p>
              </div>
              <p>{shareDate}</p>
            </div>
          </div>
          <p>{description}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Link href={'/blog/123'} className="bg-primary text-white rounded px-3 py-2">
            {t('READ_MORE')}
          </Link>
          <div className="d-flex align-items-center">
            <ImageMaker src={read} alt="read" />
            <p className="font-14 ps-2">{readingTime}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BlogCard;
