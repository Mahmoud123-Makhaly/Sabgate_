import React from 'react';
import empty from '@assets/images/empty qutation.png';
import { ButtonMaker, ImageMaker } from '../../../common';
import { useTranslate } from '@app/hooks';
const EmptyQutation = ({ increment }: { increment: () => void }) => {
  const t = useTranslate('COMP_Qutation');
  return (
    <div className="flex-col gap-4 py-5">
      <ImageMaker src={empty} />
      <ButtonMaker design="px-5" text={t('QUTATION_REQUEST')} onClick={increment} />
    </div>
  );
};

export default EmptyQutation;
