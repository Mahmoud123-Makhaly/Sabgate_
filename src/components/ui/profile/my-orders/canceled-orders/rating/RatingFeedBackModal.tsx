import React from 'react';
import Image from 'next/image';

import check from '@assets/svgs/email-sent.svg';
import { ButtonMaker } from '@components';
import { Link } from '@navigation';
import { useTranslate } from '@app/hooks';

interface IEvaluationFeedBackProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<string>>;
}
const RatingFeedBackModal = (props: IEvaluationFeedBackProps) => {
  const { setIsOpenModal } = props;
  const t = useTranslate('Comp_Rating_Feedback');
  return (
    <div className="evaluation-feedback">
      <div className="text-end">
        <i className="fa-solid fa-xmark close-icon text-gray" onClick={() => setIsOpenModal('')}></i>
      </div>
      <div className="feedBack-info text-center">
        <Image src={check} alt="check" width={0} height={0} />
        <h3 className="feedBack-title text-24 text-info">{t('EVALUATION_SEND_SUCCESSFULLY')}</h3>
        <p className="feedBack-desc"> {t('THANKS_MESSAGE')} </p>
        <Link href={'/list/baked'}>
          <ButtonMaker text={t('CONTINUE_SHOPPING')} design="bg-primary fw-bold" block={true} />
        </Link>
      </div>
    </div>
  );
};

export default RatingFeedBackModal;
