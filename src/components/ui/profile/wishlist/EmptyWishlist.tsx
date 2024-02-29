import React from 'react';
import Image from 'next/image';
import { ButtonMaker } from '@components';
import emptyWishlist from '@assets/images/empty-list.jpg';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';
const EmptyWishlist = () => {
  const t = useTranslate('COMP_EmptyWishlist');
  return (
    <div className="flex-col pb-5 text-center static-page">
      <div className="empty-wishlist-image mb-5">
        <Image src={emptyWishlist} alt="wishlist is empty" width={400} height={400} className="img-fluid" />
      </div>
      <div className="mt-3">
        <h3 className="mb-3 text-dark">{t('WISHLIST-IS-EMPTY')}</h3>
        <h5 className="text-muted mb-4">{t('EMPTY_TILL_NOW')}</h5>
      </div>
      <div className="button-container">
        <Link className="px-5 py-2 bg-primary text-white rounded" href={'/list'}>
          {t('SHOP_NOW')}
        </Link>
      </div>
    </div>
  );
};

export default EmptyWishlist;
