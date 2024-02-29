import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'reactstrap';
import Notification from './Notification';
import MiniCart from './MiniCart';
import AccountMenu from './AccountMenu';
import LanguageSelect from './LanguageSelect';
import { Link } from '@navigation';
import favorite from '@assets/svgs/heart-icon.svg';
import { useTranslate } from '@app/hooks';
const ToolbarItems = () => {
  const t = useTranslate('COMP_ToolBar');
  const menu = [
    <div className="triangle" key={0}></div>,
    <Link href={'/auth/login'} className="border rounded py-2 px-4 d-block" key={1}>
      تسجيل دخول
    </Link>,
    <Link href={'/auth/sign-up'} className="border rounded py-2 px-4 d-block" key={2}>
      إنشاء حساب
    </Link>,
  ];

  const notification = [
    {
      title: 'طريقة لكتابة النصوص في النشر ',
      date: '22 يناير ',
      time: '10:10 صباحا',
    },
    {
      title: 'طريقة لكتابة النصوص في النشر ',
      date: '22 يناير ',
      time: '10:10 صباحا',
    },
    {
      title: 'طريقة لكتابة النصوص في النشر ',
      date: '22 يناير ',
      time: '10:10 صباحا',
    },
    {
      title: 'طريقة لكتابة النصوص في النشر ',
      date: '22 يناير ',
      time: '10:10 صباحا',
    },
  ];
  return (
    <Row className="toolbar-items">
      <Col>
        <Notification data={notification} />
      </Col>
      <Col>
        <MiniCart />
      </Col>
      <Col>
        <Link href={'#'} className="flex-between">
          <Image src={favorite} alt="favorite" className="me-1" />
          <p>{t('FAVORITES')}</p>
        </Link>
      </Col>
      <Col>
        <LanguageSelect />
      </Col>
      <Col>
        <AccountMenu menu={menu} />
      </Col>
    </Row>
  );
};

export default ToolbarItems;
