import React from 'react';
import { useTranslate } from '@app/hooks';
import { Table } from 'reactstrap';
interface IQutationCard {
  info: { number: number | string; name: string; email: string; phone: string };
}
const QutationCard = (props: IQutationCard) => {
  const { name, email, number, phone } = props.info;
  const t = useTranslate('COMP_QutationCard');
  return (
    <div className="border rounded p-3">
      <div className="flex-col-start qutation-card">
        <p className="fw-bold font-16 border-bottom pb-2 w-100">
          {t('QUTATION_NUMBER')} {number}
        </p>
        <Table>
          <tbody>
            <tr>
              <td>{t('NAME')}</td>
              <td className="fw-bold">{name}</td>
            </tr>
            <tr>
              <td>{t('EMAIL')}</td>
              <td className="fw-bold">{email}</td>
            </tr>
            <tr>
              <td>{t('PHONE')}</td>
              <td>{phone}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default QutationCard;
