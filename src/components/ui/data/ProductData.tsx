import img from '@assets/images/home/card/card-img.png';
import React from 'react';
import { Table } from 'reactstrap';
const productData = {
  img: img,
  title: 'لوح رغوة البوليسترين',
  description: 'لوح رغوة البوليسترين مبثوق ، رووف مات ، مقاس 600مم * 1250مم ، الكثافة (32-35) كغ/سم 3 ، السماكة (50مم)',
  specs: (
    <Table borderless className="w-75 m-0">
      <tbody>
        <tr className="flex-between ">
          <th>
            <td>
              <p className="fw-bold">المقاس:</p>
            </td>
          </th>
          <th>
            <td>
              <p className="text-gray">600مم * 1250مم</p>
            </td>
          </th>
        </tr>
        <tr className="flex-between">
          <th>
            <td>
              <p className="fw-bold">الكثافة:</p>
            </td>
          </th>
          <th>
            <td>
              <p className="text-gray">(32-35) كغ/سم 3</p>
            </td>
          </th>
        </tr>
        <tr className="flex-between">
          <th>
            <td>
              <p className="fw-bold">السماكة:</p>
            </td>
          </th>
          <th>
            <td>
              <p className="text-gray">(50مم)</p>
            </td>
          </th>
        </tr>
      </tbody>
    </Table>
  ),
  price: '360.00 د.إ.',
  pricePer: 'السعر لكل لوحة',
  badgeText: 'جديد',
};
export default productData;
