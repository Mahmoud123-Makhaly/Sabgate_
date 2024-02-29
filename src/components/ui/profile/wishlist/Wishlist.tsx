'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import Image from 'next/image';

import ReactPaginate from 'react-paginate';

import { useTranslate } from '@app/hooks';
import { ProductConnection } from '@core';
import { getProducts, useStore } from '@utils';

import { Loader, ListView, ListCount, Filter, ButtonMaker, ProductCard } from '@components';
import productData from '../../data/ProductData';
import compare from '@assets/svgs/compare.svg';

import EmptyWishlist from './EmptyWishlist';
const Wishlist = () => {
  const t = useTranslate('COMP_WishList');
  const zuStore = useStore();
  const [listView, setListView] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState({
    currentPage: 1,
    pageList: 12,
  });
  const [products, setProducts] = useState<ProductConnection>();
  const items = getProducts(page.pageList, page.currentPage, selectedCategory);
  const listCountData = [
    {
      label: t('12_In_PAGE'),
      value: 12,
    },
    {
      label: t('24_In_PAGE'),
      value: 24,
    },
    {
      label: t('36_In_PAGE'),
      value: 36,
    },
  ];

  useEffect(() => {
    loadProducts();
  }, [page, selectedCategory]);

  const loadProducts = async () => {
    if ((await items).error) {
    } else {
      setProducts((await items).items);
      //setProducts(undefined);
    }
    setIsLoading(false);
  };

  const handleAddToCart = async (id: string) => {
    zuStore.addToCart(id, 1);
    if (zuStore.error) {
    } else {
    }
  };

  const handlePageClick = (index: number) => {
    setIsLoading(true);
    setPage({ ...page, currentPage: index });
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  const buttons = (
    <React.Fragment>
      <ButtonMaker outline design="text-primary mb-2 fw-bold" text={t('REQUEST_PRICE_VIEW')} block />
      <div className="d-flex">
        <ButtonMaker text={t('ADD_TO_CART')} design="fw-bold" block />
        <ButtonMaker outline design="p-2 ms-2 compare">
          <Image src={compare} alt="" />
        </ButtonMaker>
      </div>
    </React.Fragment>
  );
  const { img, title, description, specs, price, pricePer, badgeText } = productData;

  const DummyProducts: Array<any> = [];
  for (let i = 0; i < 9; i++) {
    DummyProducts.push({
      title: title,
      imgSrc: img.src,
      disc: description,
      price: price,
      badgeText: badgeText,
      pricePer: pricePer,
      buttons: buttons,
    });
  }

  return isLoading ? (
    <Loader />
  ) : DummyProducts.length > 0 ? (
    <Row className="g-3 w-100 mb-3">
      {DummyProducts.map((product, i) => (
        <Col md={4} key={i} className="px-2 card-column col-12">
          <ProductCard
            img={product.imgSrc}
            title={product.title}
            badgeText={product.badgeText}
            buttons={product.buttons}
            description={product.disc}
            price={product.price}
            pricePer={product.pricePer}
          />
        </Col>
      ))}
    </Row>
  ) : (
    <EmptyWishlist />
  );
};

export default Wishlist;
