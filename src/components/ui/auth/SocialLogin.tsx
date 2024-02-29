'use client';

import React from 'react';
import Image from 'next/image';

import { useTranslate } from '@app/hooks';
import { DividerText } from '@components';
import fbIcon from '@assets/svgs/social-media/facebook-primary.svg';
import gIcon from '@assets/svgs/social-media/google.svg';

const SocialLogin = () => {
  const t = useTranslate('COMP_SOCIAL_LOGIN');

  return (
    <React.Fragment>
      <div className="other-options">
        <DividerText text={t('OR')} />
      </div>
      <div className="social-login">
        <button className="d-flex w-100 bg-white p-2 rounded mb-3 border password">
          <div className="border-end px-3">
            <Image src={fbIcon} alt="facebook SignUp" />
          </div>
          <span className="px-3">{t('FACEBOOK_LOGIN')}</span>
        </button>
        <button className="d-flex w-100 bg-white p-2 rounded  border password">
          <div className="border-end px-3">
            <Image src={gIcon} alt="google SignUp" />
          </div>
          <span className="px-3">{t('GOOGLE_LOGIN')}</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default SocialLogin;
