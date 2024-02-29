import Image from 'next/image';
import React from 'react';
import { Link } from '@navigation';
import { useTranslate } from '@app/hooks';
import confirm from '@assets/svgs/feature-mark.svg';
const ConfirmModal = () => {
  const t = useTranslate('COMP_ResetModal');
  return (
    <div className="flex-col">
      <Image src={confirm.src} alt="Successed" width={0} height={0} />
      <h3 className="fw-bold">{t('RESET_DONE')}</h3>
      <p>{t('RESET_DONE_AGAIN')}</p>
      <div className="flex-center">
        <p>{t('BACK')}</p>
        <Link className="forget-password password text-decoration-underline ms-1" href={'/auth/login'}>
          {t('LOGIN')}
        </Link>
      </div>
    </div>
  );
};

export default ConfirmModal;
