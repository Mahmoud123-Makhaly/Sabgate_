import React from 'react';
import compare from '@assets/svgs/fixed-btns/compare.svg';
import message from '@assets/svgs/fixed-btns/message.svg';
import { IconLink } from '@components';
import { useTranslate } from '@app/hooks';
const FixedButtons = () => {
  const t = useTranslate('COMP_FixedButtons');
  return (
    <div className="fixed-btns d-flex">
      <div className="d-block">
        <IconLink
          img={compare.src}
          text={t('COMPARISONS')}
          className="flex-row-reverse fixed-link rounded-4"
          textDesign="ps-2"
          fill
          color="orange"
          as="link"
          href={'/compare'}
        />
      </div>
      <div className="d-block">
        <IconLink
          img={message.src}
          blank
          text={t('CONTACT_US')}
          className="flex-row-reverse fixed-link rounded-4"
          textDesign="ps-2"
          fill
          color="primary"
          as="link"
          href={'https://wa.me/+971600541110'}
        />
      </div>
    </div>
  );
};

export default FixedButtons;
