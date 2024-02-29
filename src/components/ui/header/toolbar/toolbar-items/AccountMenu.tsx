import React, { ReactNode } from 'react';
import Image from 'next/image';
import { DropDown } from '@components';
import account from '@assets/svgs/account-icon.svg';
import { useTranslate } from '@app/hooks';

interface IAccountMenuProps {
  className?: string;
  menu: Array<ReactNode>;
}

const AccountMenu = (props: IAccountMenuProps) => {
  const { className, menu } = props;
  const t = useTranslate('COMP_ToolBar');

  return (
    <DropDown
      itemClassName="w-100"
      menuItems={menu}
      title=""
      className={`flex-between gap-1 position-relative ${className}`}
    >
      <Image src={account} alt="account" className="me-1" />
      <p>{t('MY_ACCOUNT')}</p>
    </DropDown>
  );
};

export default AccountMenu;
