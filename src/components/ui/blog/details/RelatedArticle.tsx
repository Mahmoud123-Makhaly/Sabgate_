'use client';
import React from 'react';
import Image from 'next/image';

import { ImageMaker } from '@components';

import worker from '@assets/images/blog/Rectangle 5152.png';
import construction from '@assets/svgs/blog/Ellipse 1.svg';
import { useTranslate } from '@app/hooks';
const RelatedArticle = () => {
  const t = useTranslate('COMP_RelatedArticle');
  return (
    <div className="d-flex">
      <div className="pe-4">
        <Image src={worker} alt="worker" />
      </div>
      <div>
        <h4 className="fw-bold">يدين Lorem ipsum ، المؤلف من كلمات</h4>
        <div className="d-flex  align-items-center">
          <div>
            <ImageMaker src={construction} alt="construction" />
          </div>
          <div className="paddingx-16">
            <p> {t('ARTICLE_FROM_SITE')}</p>
            <p className="text-primary fw-bold">Lorem ipsum </p>
          </div>
        </div>

        <p>20 أكتوبر 2023</p>
      </div>
    </div>
  );
};

export default RelatedArticle;
