'use client';
import React from 'react';
import Image from 'next/image';
import { DropDown } from '@components';
import { useTranslate } from '@app/hooks';

import alert from '@assets/svgs/alert.svg';
import { Link } from '@navigation';
interface INotificationProps {
  data: Array<{ title: string; date: string; time: string }>;
}
const Notification = ({ data }: INotificationProps) => {
  const t = useTranslate('COMP_ToolBar');
  const items = [
    <div className="triangle" key={0}></div>,
    <React.Fragment key={1}>
      {data.map((item, index) => (
        <Link href={'/blog'} className="flex-col-start border-bottom notification" key={index}>
          <div className="paddingx-16 paddingy-8">
            <p className="text-black font-16">{item.title}</p>
            <div className="d-flex align-items-center gap-3">
              <p>{item.date}</p>
              <p>{item.time}</p>
            </div>
          </div>
        </Link>
      ))}
    </React.Fragment>,
  ];
  return (
    <DropDown menuItems={items} title={t('NOTIFICATION')}>
      <Image src={alert} alt="alert" className="me-1" />
    </DropDown>
  );
};

export default Notification;
