'use client';

import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'reactstrap';

import { useTranslate } from '@app/hooks';

import profile from '@assets/svgs/person_black_24dp.svg';
import favorite from '@assets/svgs/wish-list.svg';
import address from '@assets/svgs/address.svg';
import orders from '@assets/svgs/orders.svg';
import { VTabs } from '@components';

export default function ProfileTemplate({ children }: { children: React.ReactNode }) {
  const t = useTranslate('COMP_PROFILE');

  return (
    <React.Fragment>
      <Row>
        <Col className="pt-4 pb-4">
          {/* <BreadCrumb
            title={t('BREAD_MAIN')}
            paths={[
              {
                title: t('BREAD_PROFILE'),
              },
            ]}
          /> */}
        </Col>
      </Row>

      <Row>
        <Col lg={3}>
          <VTabs
            tabs={[
              {
                title: t('ACCOUNT'),
                link: '/profile/account',
                icon: <Image src={profile} alt={'profile'} width={30} height={30} />,
              },
              {
                title: t('FAVORITE'),
                link: '/profile/wishlist',
                icon: <Image src={favorite} alt={'favorite'} width={30} height={30} />,
              },
              {
                title: t('ADDRESS'),
                link: '/profile/address',
                icon: <Image src={address} alt={'address'} width={30} height={30} />,
              },
              {
                title: t('ORDERS'),
                link: '/profile/my-orders',
                icon: <Image src={orders} alt={'orders'} width={30} height={30} />,
              },
              {
                title: t('QUTATION_REQUEST'),
                link: '/profile/qutation',
                icon: <Image src={orders} alt="orders" width={30} height={30} />,
              },
            ]}
          />
        </Col>
        <Col lg={9}>{children}</Col>
      </Row>
    </React.Fragment>
  );
}
