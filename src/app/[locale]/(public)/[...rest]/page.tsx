import React from 'react';

import { ImageMaker } from '@components';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';

import err from '@assets/images/404.jpg';

const Page = () => {
  const t = useTranslate('COMP_Custom404');
  return (
    <div className="flex-col pb-5 gap-4 mb-5">
      <div className="w-25">
        <ImageMaker src={err.src} alt="" />
      </div>
      <h2>404</h2>
      <h3 className="text-gray">{t('NOT_FOUND')}</h3>
      <Link href={'/'} className="bg-primary text-white p-2 rounded">
        {t('BACK_TO_HOME')}
      </Link>
    </div>
  );
};

export default Page;
