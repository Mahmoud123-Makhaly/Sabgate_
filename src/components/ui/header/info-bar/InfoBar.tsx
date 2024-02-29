import Image from 'next/image';
import React from 'react';
import location from '@assets/svgs/touchpoints/location.svg';
import phone from '@assets/svgs/touchpoints/phone.svg';
import {useTranslate} from '@app/hooks';

const InfoBar = () => {
  const t =useTranslate("COMP_InfoBar")
  return (
    <div className=" flex-between text-white p-1">
      <div className="flex-between">
        <div className="rounded-circle border outline-icon-24 flex-center me-2">
          <Image src={location} alt="location" />
        </div>
        <a className="font-14" href="https://maps.app.goo.gl/oi2U3oTTHRmPJRqz9" target="_blank">
          {t("ADDRESS")}
        </a>
      </div>
      <a className="flex-between" href={'mailto:info@sab-uae.com'}>
        <div className="rounded-circle border p-1 flex-center me-2">
          <i className="fa-regular fa-envelope"></i>
        </div>
        <p>info@sab-uae.com</p>
      </a>
      <a className="flex-between" href={'tel:+97160054-1110'}>
        <div className="rounded-circle border p-1 flex-center me-2">
          <Image src={phone} alt="location" />
        </div>
        <p>+971 (600) 54-1110</p>
      </a>
    </div>
  );
};

export default InfoBar;
