'use client';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useSession } from 'next-auth/react';
import { FormikHelpers } from 'formik';

import { AddAddress, FormikValues, Modal } from '@components';
import { Actions } from '@libs/actions';
import { DTO } from '@tot/core/types';
import { ButtonMaker } from '@components';
import { useTranslate } from '@app/hooks';

import AddressTemplate from './AddressTemplate';
import Empty from './Empty';
import { addressDto } from '../../data/address';
import { Link } from '@navigation';

const Address = ({ data }: { data: Array<DTO.IMemberAddressDTO> }) => {
  const t = useTranslate('COMP_Profile_Address');
  const { data: session } = useSession();
  const [addAddress, setAddAddress] = useState<{
    displayAddressForm: boolean;
    initialValues?: {
      id: string;
      addressType: string;
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      countryName: string;
      countryCode: string;
      postalCode: string;
      city: string;
      district: string;
      building: string;
      floor: string;
      flat: string;
      address: string;
    };
    success?: boolean;
  }>({ displayAddressForm: false });

  const backToAddresses = () => {
    setAddAddress({ displayAddressForm: false });
  };

  const onSubmit = async (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
    // const _updatedAddress = {
    //   key: values.id ?? undefined,
    //   addressType: Number.parseInt(values.addressType),
    //   firstName: values.firstName,
    //   lastName: values.lastName,
    //   phone: values.phone,
    //   email: values.email,
    //   countryName: values.countryName,
    //   countryCode: values.countryCode,
    //   postalCode: values.postalCode,
    //   city: values.city,
    //   regionName: values.district,
    //   line1: [values.address, `building:${values.building}`, `floor:${values.floor}`, `apt:${values.flat}`].join(','),
    // };

    // const updateMyAddressesStatus = values.id
    //   ? await Actions.account.updateMyAddress({ memberId: session?.user?.memberId!, address: _updatedAddress })
    //   : await Actions.account.addMyAddress({ memberId: session?.user?.memberId!, address: _updatedAddress });

    // if (
    //   updateMyAddressesStatus.data?.error ||
    //   updateMyAddressesStatus.serverError ||
    //   updateMyAddressesStatus.validationErrors
    // ) {
    //   formikHelpers.setFieldError('errorSummary', t('GENERIC_ERR_MSG'));
    //   return false;
    // } else {
    //   setAddAddress(() => ({
    //     displayAddressForm: false,
    //     setSuccessMessage: t(`SUCCESS_${values.id ? 'UPDATE' : 'ADD'}_MSG`),
    //   }));
    //   window.scrollTo(0, 0);
    // }
    setAddAddress(() => ({
      displayAddressForm: false,
      success: true,
    }));
  };

  const onEdit = (address: DTO.IMemberAddressDTO) => {
    const _addressHouseDetails = address.line1.replace(/building:|floor:|apt:/g, '').split(',');
    const _address = {
      id: address.id ?? '',
      addressType: address.addressType?.toString() ?? '',
      firstName: address.firstName ?? '',
      lastName: address.lastName ?? '',
      phone: address.phone ?? '',
      email: address.email ?? '',
      countryName: address.countryName ?? 'Egypt',
      countryCode: address.countryCode ?? 'EGY',
      postalCode: address.postalCode ?? '00202',
      city: address.city ?? '',
      district: address.regionName ?? '',
      address: _addressHouseDetails.at(0) ?? '',
      building: _addressHouseDetails.at(1) ?? '',
      floor: _addressHouseDetails.at(2) ?? '',
      flat: _addressHouseDetails.at(3) ?? '',
    };
    setAddAddress({ displayAddressForm: true, initialValues: _address });
  };

  // useEffect(() => {
  //   if (addAddress.setSuccessMessage) {
  //     const timeoutId = setTimeout(() => {
  //       setAddAddress({ displayAddressForm: false });
  //     }, 3000);
  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [addAddress.setSuccessMessage]);

  return (
    <React.Fragment>
      <Modal
        isOpen={addAddress.success ?? false}
        toggleShow={() =>
          setAddAddress(() => ({
            displayAddressForm: false,
            success: false,
          }))
        }
      >
        <div className="flex-col gap-3">
          <div className="text-end w-100 p-2">
            <i
              className="fa-solid fa-xmark close-icon text-gray pointer"
              onClick={() =>
                setAddAddress(() => ({
                  displayAddressForm: false,
                  success: false,
                }))
              }
            ></i>
          </div>
          <i className="bg-primary p-3 rounded-5">
            <i className="bg-primary rounded-circle fa-solid fa-check fa-xl text-white"></i>
          </i>
          <p>{t(`SUCCESS_ADD_MSG`)}</p>
          <Link
            href={'/'}
            className="bg-primary text-white py-2 px-5 mb-3 rounded"
            onClick={() =>
              setAddAddress(() => ({
                displayAddressForm: false,
                success: false,
              }))
            }
          >
            {t('BACK_TO_HOME')}
          </Link>
        </div>
      </Modal>
      <Row>
        {!addAddress.displayAddressForm && (
          <React.Fragment>
            <Col>
              {addressDto && addressDto.length ? (
                addressDto.map((address, index) => {
                  return (
                    <div className="my-4" key={`address-${index}`}>
                      <AddressTemplate data={address} onEdit={onEdit} />
                    </div>
                  );
                })
              ) : (
                <Empty />
              )}
            </Col>
            <div className="flex-center">
              <ButtonMaker
                text={t('ADD_NEW_ADDRESS')}
                onClick={() => setAddAddress({ displayAddressForm: true })}
                design="px-5 mb-5"
              />
            </div>
          </React.Fragment>
        )}
        {addAddress.displayAddressForm && (
          <React.Fragment>
            <Col>
              <AddAddress onSubmit={onSubmit} onCancel={backToAddresses} initialValues={addAddress.initialValues} />
            </Col>
          </React.Fragment>
        )}
      </Row>
    </React.Fragment>
  );
};

export default Address;
