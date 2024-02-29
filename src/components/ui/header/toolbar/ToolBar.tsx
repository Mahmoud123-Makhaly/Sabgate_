'use client';
import React from 'react';
import Image from 'next/image';
import { Form, Input } from 'reactstrap';
import { ButtonMaker, ImageMaker, Search, SearchForm } from '@components';

import ToolbarItems from './toolbar-items/ToolbarItems';
import logo from '@assets/images/logo.svg';
import burgerBtn from '@assets/svgs/burger-button.svg';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';

interface IToolBar {
  offcanvasToggeler: () => void;
}

const ToolBar = ({ offcanvasToggeler }: IToolBar) => {
  const t = useTranslate('COMP_ToolBar');
  return (
    <div className="toolbar py-2 flex-wrap ">
      <div className="flex-between">
        <ButtonMaker onClick={offcanvasToggeler} design="border-0 d-lg-none pe-3 bg-white">
          <Image src={burgerBtn} alt="" />
        </ButtonMaker>
        <Link href={'/'}>
          <ImageMaker src={logo} alt="sab gate" />
        </Link>
      </div>
      <SearchForm
        className="mx-xl-5 mx-lg-3 search"
        btnContent={<i className="fa-solid fa-magnifying-glass"></i>}
        placeholder={t('SEARCH')}
      />
      <ToolbarItems />
    </div>
  );
};

export default ToolBar;
