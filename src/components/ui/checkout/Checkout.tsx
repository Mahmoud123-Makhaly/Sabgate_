'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Col, Input, Row } from 'reactstrap';
import Image from 'next/image';

import { useRouter } from '@navigation';
import { Link } from '@navigation';
import { ButtonMaker, CartSummary, OrderRecap, ShippingAddress, Modal, BreadCrumb, AddAddress } from '@components';
import { useTranslate } from '@app/hooks';
// import addAdress from '@assets/images/galaAdd0.svg';
import { useStore } from '@utils';
import { CartType } from '@core';

import PaymentMethod from './PaymentMethod';
import { address } from '../data/address';
import { orders } from '../data/OrderRecap';

const Checkout = () => {
  const inputRef = useRef<null | HTMLElement>(null);
  const t = useTranslate('COMP_Checkout');
  const [cart, setCart] = useState<CartType | null>();
  const [showAddressModal, setShowAddressModal] = useState<{
    type: 'edit' | 'add' | 'view' | undefined;
    show: boolean;
  }>({ type: undefined, show: false });
  const router = useRouter();
  const zuStore = useStore();
  zuStore.getCart;
  const myCart = zuStore.cart;

  const getCart = () => {
    setCart(cart => (cart = myCart));
  };

  useEffect(() => {
    getCart();
  }, [myCart]);

  const TableData = [
    { text: t('SUBTOTAL'), price: cart?.subTotal?.formattedAmount },
    { text: t('DELIVERY_FEES'), price: cart?.shippingTotal?.formattedAmount },
    { text: t('TOTAL'), price: cart?.total?.formattedAmount },
  ];
  const toggleShow = () => {
    document.querySelector('.promo-btn')?.classList.add('d-none');
    document.querySelector('.promo-form')?.classList.remove('d-none');
    inputRef.current!.focus();
  };
  const handleRemoveCoupon = () => {
    document.querySelector('.promo-btn')?.classList.remove('d-none');
    document.querySelector('.promo-msg')?.classList.add('d-none');
  };
  const onApply = () => {
    document.querySelector('.promo-msg')?.classList.remove('d-none');
    document.querySelector('.promo-form')?.classList.add('d-none');
  };
  const onComplete = () => {
    router.push('/invoice/123');
  };
  const handleOnAddressModal = (type: 'edit' | 'add' | 'view' | undefined) => {
    setShowAddressModal({ show: !showAddressModal.show, type: type });
  };

  const btns = [
    <ButtonMaker
      key={'address-actions-0'}
      onClick={() => handleOnAddressModal('edit')}
      design="bg-white border-0  py-0"
      outline
    >
      <i className="fa-solid fa-pen mx-2 text-black icon"></i>
      <p className="text-info"> {t('EDIT')}</p>
    </ButtonMaker>,
    <ButtonMaker
      key={'address-actions-1'}
      design=" d-flex align-items-center border-0 p-0"
      onClick={() => handleOnAddressModal('add')}
      outline
    >
      <span className="p-2 rounded-circle border border-dark outline-icon-18 me-2">
        <i className="fa-solid fa-plus fa-xs"></i>
      </span>
      <p className="text-info">{t('ADD_NEW_ADDRESS')}</p>
    </ButtonMaker>,
    <ButtonMaker
      key={'address-actions-2'}
      design=" d-flex align-items-center border-0 p-0"
      onClick={() => handleOnAddressModal('view')}
      outline
    >
      <i className="fa-solid fa-list ms-3 pe-2"></i>
      <p className="text-info">{t('VIEW_ADDRESSES_LIST')}</p>
    </ButtonMaker>,
  ];

  const selectAddress = useCallback(
    (id: string) => {
      const inp = document.getElementById(id) as HTMLInputElement | null;
      if (inp) {
        inp.defaultChecked = true;
      }
      setTimeout(() => {
        setShowAddressModal({ ...showAddressModal, show: false });
      }, 1000);
    },
    [address],
  );

  return (
    <Row className="checkout">
      {showAddressModal.show && (
        <Modal
          isOpen={showAddressModal.show}
          size="lg"
          toggleShow={() => setShowAddressModal({ ...showAddressModal, show: !showAddressModal.show })}
        >
          {showAddressModal.type === 'view' ? (
            <div className="addresses mt-2">
              <div className="flex-between align-items-center">
                <h5 className="fw-bold m-0">{t('SHIPPING_ADDRESSES')}</h5>
                <ButtonMaker
                  design="d-flex align-items-center gap-1"
                  onClick={() => setShowAddressModal({ ...showAddressModal, type: 'add' })}
                >
                  <span className="p-2 rounded-circle border border-white outline-icon-18 me-2">
                    <i className="fa-solid fa-plus fa-xs"></i>
                  </span>
                  <p>{t('ADD_ADDRESS_HEADER')}</p>
                </ButtonMaker>
              </div>
              {address.map((address, index) => {
                return (
                  <div className="my-3" key={index}>
                    <ShippingAddress selectInput={selectAddress} data={address}>
                      <Input key={'active-address-0'} type="radio" name="address" id={address.id} />
                    </ShippingAddress>
                  </div>
                );
              })}

              <ButtonMaker
                block={true}
                text={t('CANCEL')}
                onClick={() => setShowAddressModal({ ...showAddressModal, show: false })}
                outline
              />
            </div>
          ) : (
            <React.Fragment>
              <h4>{showAddressModal.type === 'add' ? t('ADD_ADDRESS_HEADER') : t('EDIT_ADDRESS_HEADER')}</h4>
              <AddAddress
                onSubmit={() => setShowAddressModal({ ...showAddressModal, show: !showAddressModal.show })}
                onCancel={() => setShowAddressModal({ ...showAddressModal, show: !showAddressModal.show })}
              />
            </React.Fragment>
          )}
        </Modal>
      )}

      <Col className="col-12 pt-4 pb-3">
        {/* <BreadCrumb
          title={t('BREAD_MAIN')}
          paths={[
            { title: t('BREAD_SHOPPING_CART'), relativePath: '#' },
            {
              title: t('BREAD_CHECKOUT'),
              relativePath: '#',
            },
          ]}
        /> */}
      </Col>

      <Col lg={9}>
        <div>
          <PaymentMethod data={[{ text: t('PAYMENT_CASH') }]} />
        </div>
        <div className="my-3 ">
          <div>
            <h5 className="mb-3 fw-bold">{t('SHIPPING_ADDRESSES')}</h5>
          </div>
          <ShippingAddress selectInput={() => {}} data={address[0]}>
            {btns}
          </ShippingAddress>
        </div>
        <div>
          <div>
            <h5 className="my-4 fw-bold"> {t('REVIEW_ORDER')}</h5>
          </div>
          <div>
            <OrderRecap data={orders} />
          </div>
        </div>
      </Col>
      <Col lg={3}>
        <div className="d-flex align-items-center border py-2 px-3 rounded mb-3">
          <Input name="radio1" type="checkbox" />
          <p className="mx-2 term-condition">
            {t('AGREE')}
            <Link href={'/content/terms-and-conditions'} className="text-primary text-decoration-underline">
              {t('TERMS_CONDITIONS')}
            </Link>
          </p>
        </div>
        <CartSummary title={t('CART_SUMMARY')} data={TableData} className="border rounded">
          <ButtonMaker block={true} text={t('Add_CODE')} design="my-2 promo-btn " outline onClick={toggleShow} />

          <div className="promo-form  d-none d-flex my-2">
            <input
              type="text"
              className="rounded w-100 promo-input mt-0 mb-0   my-2 border-primary"
              id="promo-input "
              ref={inputRef as any}
            />
            <ButtonMaker onClick={onApply} design="btn btn-primary ms-2 text-white apply-btn" block={false}>
              {t('APPLY')}
            </ButtonMaker>
          </div>
          <div className="text-center border rounded my-3 py-2   d-none promo-msg">
            <p className="m-0 p-0">
              {t('APPLIED')}
              <span className="text-primary mx-1">{t('DISCOUNT')} </span> {t('SUCCESSFULLY')}!
            </p>
            <p className="m-0 p-0">
              {t('SAVED')} <span className="text-primary">59 {t('CURRENCY')}</span>
              <span
                className="bg-white border-0 text-decoration-underline coupon-btn pointer mx-2"
                onClick={handleRemoveCoupon}
              >
                {t('REMOVE_COUPON')}
              </span>
            </p>
          </div>
          <ButtonMaker
            onClick={onComplete}
            block={true}
            text={t('COMPLETE_PURCHASE')}
            design="my-2 text-white checkout-btn"
          ></ButtonMaker>
        </CartSummary>
      </Col>
    </Row>
  );
};

export default Checkout;
