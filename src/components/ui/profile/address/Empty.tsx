import React from 'react';
import Image from 'next/image';
import emptyImg from '@assets/images/address/no-address.png';
import { useTranslate } from '@app/hooks';
import { ImageMaker } from '../../../common';
const Empty = () => {
  const t = useTranslate('COMP_Profile_Address');
  return (
    <div className="flex-col py-5 text-center static-page">
      <div className="empty-wishlist-image mb-3">
        <ImageMaker src={emptyImg.src} alt="wishlist is empty" className="img-fluid" />
      </div>
    </div>
  );
};

export default Empty;
