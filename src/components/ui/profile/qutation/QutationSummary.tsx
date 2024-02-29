import React from 'react';
import { Table } from 'reactstrap';
import { useTranslate } from '@app/hooks';

const QutationSummary = () => {
  const t = useTranslate('COMP_QuatationsSummary');
  return (
    <React.Fragment>
      <h4> {t('ORDER_SUMMARY')}</h4>
      <Table className="border rounded overflow-hidden text-center">
        <thead className="bg-light-blue py-3">
          <th className="py-2"> {t('PRODUCT_CODE')}</th>
          <th className="py-2"> {t('BUILDING_TYPE')}</th>
          <th className="py-2"> {t('SERVICE_TYPE')}</th>
        </thead>
        <tbody className="text-gray">
          <tr>
            <td>#123456</td>
            <td>{t('APARTMENT')}</td>
            <td> {t('WATER_ISOLATION')}</td>
          </tr>
          <tr>
            <td>#123456</td>
            <td> {t('VILLA')}</td>
            <td>عزل أسطح</td>
          </tr>
          <tr>
            <td>#123456</td>
            <td>شقة</td>
            <td>عزل مائي</td>
          </tr>
          <tr>
            <td>#123456</td>
            <td>{t('VILLA')}</td>
            <td>عزل أسطح</td>
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default QutationSummary;
