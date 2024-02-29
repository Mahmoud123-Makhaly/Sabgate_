'use client';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import { useTranslate } from '@app/hooks';
import { Tabs } from '@components';
import RatingItem from './RatingItem';

const ProductInfo = () => {
  const t = useTranslate('COMP_ProductDetails.Info');
  const ratingData = [
    {
      name: 'احمد علي ',
      date: '11/11/2023',
      desc: ' لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة أو الخط دون الاعتماد على محتوى معنوي',
    },
    {
      name: 'احمد علي ',
      date: '11/11/2023',
      desc: ' لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة أو الخط دون الاعتماد على محتوى معنوي',
    },
  ];
  return (
    <section className="my-4 product-info-tabs">
      <Tabs
        headerClassName="pill me-5"
        tabs={[
          {
            header: t('SPECIFICATIONS'),

            content: (
              <Row>
                <Col md={6}>
                  <div className="border p-4 flex-col-start gap-3 rounded">
                    <div className="flex-between border-bottom pb-3 w-100">
                      <p> {t('PRODUCT_DATE')}</p>
                      <p>2020</p>
                    </div>
                    <div className="flex-between border-bottom pb-3  w-100">
                      <p> {t('WEIGHT')}</p>
                      <p>2.3 كجم</p>
                    </div>
                    <div className="flex-between border-bottom pb-3  w-100">
                      <p> {t('THIKNESS')}</p>
                      <p>33 سم</p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="border p-4 flex-col-start gap-3 rounded">
                    <div className="flex-between border-bottom pb-3 w-100">
                      <p> {t('PRODUCT_DATE')}</p>
                      <p>2020</p>
                    </div>
                    <div className="flex-between border-bottom pb-3  w-100">
                      <p> {t('WEIGHT')}</p> <p>2.3 كجم</p>
                    </div>
                    <div className="flex-between border-bottom pb-3  w-100">
                      <p> {t('THIKNESS')}</p>
                      <p>33 سم</p>
                    </div>
                  </div>
                </Col>
              </Row>
            ),
          },
          {
            header: t('DETAILS'),
            content: (
              <ul className="text-gray unordered-list ms-3 text-start">
                <li>الأحرف.كان لوريم إيبسوم ولايزال المعيار للنص الشكلي</li>
                <li>الأحرف.كان لوريم إيبسوم ولايزال المعيار للنص الشكلي</li>
                <li>الأحرف.كان لوريم إيبسوم ولايزال المعيار للنص الشكلي</li>
                <li>الأحرف.كان لوريم إيبسوم ولايزال المعيار للنص الشكلي</li>
                <li>الأحرف.كان لوريم إيبسوم ولايزال المعيار للنص الشكلي</li>
                <li>الأحرف.كان لوريم إيبسوم ولايزال المعيار للنص الشكلي</li>
              </ul>
            ),
          },
          {
            header: t('BENFITS'),
            content: (
              <ol className="text-gray text-start">
                <li>الأحرف.كان لوريم إيبسوم ولايزال المعيار للنص الشكلي</li>
                <li>الأحرف.كان لوريم إيبسوم ولايزال المعيار للنص الشكلي</li>
                <li>الأحرف.كان لوريم إيبسوم ولايزال المعيار للنص الشكلي</li>
                <li>الأحرف.كان لوريم إيبسوم ولايزال المعيار للنص الشكلي</li>
                <li>الأحرف.كان لوريم إيبسوم ولايزال المعيار للنص الشكلي</li>
                <li>الأحرف.كان لوريم إيبسوم ولايزال المعيار للنص الشكلي</li>
              </ol>
            ),
          },
          {
            header: t('COMMON_QUESTIONS'),
            content: (
              <ul className="text-gray unordered-list ms-3 flex-col-start gap-3 text-start">
                <div>
                  <li className="mb-2">هل يمكن استخدام هذه الألواح للعزل الحراري والصوتي؟</li>
                  <p>تم تصميم ألواح الصوف الصخري للعزل الحراري والصوتي للأسطح المسطحة أو المنحنية قليلاً.</p>
                  <p>يمكن استخدامها على الأسطح المسطحة والمنحنية قليلاً للعزل الحراري والصوتي.</p>
                  <p>
                    كما أنها مناسبة للعزل الحراري للقنوات والخزانات والأوعية الكبيرة وجدران التجاويف والجدران الساترة
                    والألواح العازلة.
                  </p>
                </div>
                <div>
                  <li className="mb-2">هل هناك أي تطبيقات محددة حيث لا ينبغي استخدام هذه الألواح؟</li>
                  <p>
                    يُنصح المستخدم بالتأكد من عدم تجاوز الحد الأقصى لدرجة حرارة استخدام الواجهات والمواد اللاصقة، وتركيب
                    سمك كافٍ بحيث لا يتعرض أي من هذه العناصر الملحقة لدرجات حرارة أعلى من درجة حرارة الاستخدام القصوى.
                  </p>
                </div>
                <div>
                  <li className="mb-2">ما هي أنواع الأسطح التي يمكن استخدام Rockwool Slab Unfaced عليها؟</li>
                  <p>
                    يمكن استخدام Rockwool Slab Unfaced على الأسطح المسطحة أو المنحنية قليلاً، مما يجعلها خيارًا متعدد
                    الاستخدامات لمجموعة واسعة من التطبيقات.
                  </p>
                </div>
              </ul>
            ),
          },
          {
            header: t('EVALUATIONS'),
            content: (
              <React.Fragment>
                {ratingData.map((rating, index) => (
                  <RatingItem date={rating.date} description={rating.desc} key={index} name={rating.name} rate={5} />
                ))}
              </React.Fragment>
            ),
          },
        ]}
      />
    </section>
  );
};

export default ProductInfo;
