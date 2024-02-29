'use client';

import React, { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import { useLocale } from 'next-intl';

import { Actions } from '@libs/actions';
import { useRouter, usePathname } from '@navigation';
import { useTranslate } from '@app/hooks';

const ConfirmModal = () => {
  const t = useTranslate('Comp_Change_Password');
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const onLogout = async () => {
      await Actions.account.logout();

      signOut({
        callbackUrl: `${window.location.origin}/auth/login?redirectURL=${locale}${pathname}`,
      });
    };

    if (countdown > 0) {
      const timeoutId = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else {
      onLogout();
    }
  }, [countdown, locale, pathname, router]);

  return (
    <div className="flex-col gap-3">
      <i className="bg-primary rounded-circle p-2 fa-solid fa-check fa-2x text-white"></i>
      <p className="mt-1">{t('SUCCESS_MSG')}</p>
      <div className="flex-center mt-1">
        <p>{t('SUCCESS_MSG_COUNTER', { countdown })}</p>
      </div>
    </div>
  );
};
export default ConfirmModal;
