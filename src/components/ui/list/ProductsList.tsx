'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import { Col, Row } from 'reactstrap';
import Image from 'next/image';

import { BreadCrumb, ButtonMaker } from '@components';
// import filter from "@assets/images/icons/list/filter_alt.svg";
import { usePathname, useRouter } from '@navigation';
import { useTranslate } from '@app/hooks';
import { Utils } from '@libs';

import ListView from './ListView';
import ListCount from './ListCount';
import Filter from './Filter';
import { ProductCard } from '@components';
import productData from '../../ui/data/ProductData';
import compare from '@assets/svgs/compare.svg';

export interface ISelectedCat {
  value: string;
  label: string;
}
const ProductsList = ({ products }: { products: any | undefined }) => {
  const path = usePathname();
  const router = useRouter();
  const _query = useSearchParams();
  const [isMobileFilterOpen, setIsisMobileFilterOpen] = useState<boolean>(false);
  const t = useTranslate('COMP_ProductsList');

  //Transfer term facet object to string
  //to make component to get the new search query and redirect page using the new values
  const handleSearch = ({
    termFacet,
    sortTerm,
    page,
    pageSize,
    priceFrom,
    priceTo,
    keyword,
  }: {
    termFacet?: any | 'NONE';
    sortTerm?: string;
    page?: number;
    pageSize?: 12 | 24 | 36;
    priceFrom?: string;
    priceTo?: string;
    keyword?: string;
  }) => {
    const _buildFilter = () => {
      let _filter: string | null = _updatedQuery.filter ? _updatedQuery.filter : '';
      if ((!termFacet && !_filter) || termFacet === 'NONE') _filter = null;
      else if (termFacet && !termFacet.isSelected)
        _filter = _filter
          .split(',')
          .map(item => item.trim())
          .filter(term => term !== termFacet.term)
          .join(',');
      else if (termFacet && termFacet.isSelected) _filter += `,${termFacet.term}`;
      return _filter ? _filter?.replace(/^,\s*/, '') : null;
    };

    let _updatedQuery = {
      filter: _query.get('filter'),
      sort: _query.get('sort'),
      page: Number(_query.get('page')),
      pageSize: Number(_query.get('pageSize')),
      priceFrom: _query.get('priceFrom'),
      priceTo: _query.get('priceTo'),
      keyword: _query.get('keyword'),
    };
    _updatedQuery.filter = _buildFilter();

    _updatedQuery.sort = sortTerm ? sortTerm : _updatedQuery.sort;
    _updatedQuery.page = termFacet ? 1 : page ? page : _updatedQuery.page;
    _updatedQuery.pageSize = pageSize ? pageSize : _updatedQuery.pageSize;
    _updatedQuery.priceFrom = priceFrom ? (priceFrom === '0' ? '' : priceFrom) : _updatedQuery.priceFrom;
    _updatedQuery.priceTo = priceTo ? (priceTo === '0' ? '' : priceTo) : _updatedQuery.priceTo;
    _updatedQuery.keyword = keyword ? keyword : _updatedQuery.keyword;

    const queryStringExpression = Utils.generateQueryString(Utils.cleanEmptyAndZeros(_updatedQuery));

    if (queryStringExpression) router.push(`${path}${queryStringExpression}`);
  };

  const buttons = (
    <React.Fragment>
      <ButtonMaker outline design="text-primary mb-2 fw-bold" text={t('REQUEST_QOUTE')} block />
      <div className="d-flex">
        <ButtonMaker text={t('ADD_TO_CART')} design="fw-bold" block />
        <ButtonMaker outline design="p-2 ms-2 compare">
          <Image src={compare} alt="" />
        </ButtonMaker>
      </div>
    </React.Fragment>
  );
  const { img, title, description, specs, price, pricePer, badgeText } = productData;

  const DummyProducts = [];
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

  //
  const [listView, setListView] = useState(true);
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

  const handleAddToCart = async (id: string) => {};
  const getOutlineNamedFacets = products?.termFacets?.find((x: any) => x.name === '__outline_named');
  return (
    <div className="product-list">
      <Row>
        <Col>
          <div className="flex-between pt-4 pb-2">
            <BreadCrumb paths={['/', ...path.split('/').filter(Boolean)]} />
            <ButtonMaker design="bg-white border-border p-1 d-lg-none" onClick={() => setIsisMobileFilterOpen(true)}>
              <Image src={''} alt="filter" className="w-auto" />
            </ButtonMaker>
          </div>
        </Col>
        <Col>
          <div className="flex-between justify-content-lg-end w-100 pt-4">
            <div className="mb-2 mb-lg-0">
              <ListCount
                title={t('LIST_COUNT_TITLE')}
                options={listCountData}
                onChange={val =>
                  handleSearch({
                    page: 1,
                    pageSize: val as 12 | 24 | 36 | undefined,
                  })
                }
                selectedValue={Number(_query.get('pageSize')) || 12}
              />
            </div>
            <div className="text-start mb-2 mb-lg-0">
              <ListView listView={listView} setListView={setListView} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="py-3">
          <p className="text-light-gray">{`${t('FOUND_ITEMS', {
            count: products?.totalCount,
          })}`}</p>
          <div className="overflow-x-auto d-flex gap-3 d-lg-none">
            {getOutlineNamedFacets?.terms
              ?.filter((x: any) => x.isSelected)
              ?.map((term: any, indx: React.Key) => (
                <div
                  className="flex-between border border-primary px-1 rounded w-fit text-nowrap"
                  key={`filter-outline-named-term-${indx}`}
                >
                  <p className="text-primary">{term.label}</p>
                  <i
                    className="fa-regular fa-circle-xmark text-muted ps-2"
                    onClick={() =>
                      handleSearch({
                        termFacet: { ...term, isSelected: false },
                      })
                    }
                  ></i>
                </div>
              ))}
          </div>
        </div>
        <Col lg={3}>
          <Filter
            isMobileFilterOpen={isMobileFilterOpen}
            setIsisMobileFilterOpen={setIsisMobileFilterOpen}
            facets={{
              terms: getOutlineNamedFacets?.terms,
              sort: products?.sort,
              defaultPriceRange: {
                from: _query.get('priceFrom') || '0',
                to: _query.get('priceTo') || '0',
              },
            }}
            handleSearch={handleSearch}
          />
        </Col>

        <Col lg={9} className="d-flex flex-col mb-4 px-0 ">
          <Row className="g-3 w-100 mb-3">
            {DummyProducts?.map((product, i) => (
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
        </Col>
        <Col className="text-muted text-nowrap">
          <ReactPaginate
            containerClassName="react-paginate"
            breakLabel="..."
            nextLabel={t('NEXT_LABEL')}
            onPageChange={i => handleSearch({ page: i.selected + 1 })}
            pageRangeDisplayed={3}
            pageCount={Math.ceil(
              (products?.totalCount ? products?.totalCount : 1) / (Number(_query.get('pageSize')) || 12),
            )}
            previousLabel={t('PREV_LABEL')}
            renderOnZeroPageCount={null}
            forcePage={(Number(_query.get('page')) || 1) - 1}
          />
        </Col>
      </Row>
    </div>
  );
};
export default ProductsList;
