"use client";

import React, { useEffect, useState } from "react";

import { AccordionMaker, ButtonMaker, PriceRange } from "@components";
import { useTranslate } from "@app/hooks";

import SidebarFilterItem from "./SidebarFilterItem";

const SidebarFilter = ({
  facets,
  handleSearch,
}: {
  facets: {
    terms?: any;
    sort?:
      | {
          label: string;
          term: string;
          isSelected: boolean;
        }[]
      | undefined;
    defaultPriceRange?: { from: string; to: string };
  };
  handleSearch: ({
    termFacet,
    sortTerm,
    page,
    pageSize,
    priceFrom,
    priceTo,
  }: {
    termFacet?: any | "NONE";
    sortTerm?: string;
    page?: number;
    pageSize?: 12 | 24 | 36;
    priceFrom?: string;
    priceTo?: string;
  }) => void;
}) => {
  const [facet, setFacet] = useState<
    { type: "sort" | "filter"; value: any | "NONE" | string } | undefined
  >();

  useEffect(() => {
    if (facet)
      switch (facet.type) {
        case "filter":
          handleSearch({ termFacet: facet.value as any | "NONE", page: 1 });
          break;
        case "sort":
          handleSearch({ sortTerm: facet.value as string });
          break;
      }
  }, [facet, handleSearch]);

  const t = useTranslate("COMP_SidebarFilter");

  return (
    <aside
      className="sidebar-filter rounded d-none d-md-block"
      id="sidebar-filter"
    >
      <div>
        <AccordionMaker
          defaultOpen={
            facets.terms?.some((x: any) => x.isSelected)
              ? ["products-facet-terms"]
              : undefined
          }
          headerClass="border-bottom-0 p-1"
          items={[
            {
              header: (
                <div className="flex-between w-100">
                  <p className="text-black fw-bold">{t("SELECT")}</p>
                  <div className="d-flex align-items-center">
                    <ButtonMaker
                      block={false}
                      text={t("DELETE")}
                      design="bg-transparent border-0 filter-accordion-header-btn font-14 text-primary"
                      onClick={() =>
                        setFacet({ type: "filter", value: "NONE" })
                      }
                    />
                    <i className="fa-solid fa-chevron-down font-15"></i>
                  </div>
                </div>
              ),
              content: facets.terms?.map((term: any, indx: React.Key) => (
                <SidebarFilterItem
                  containerClassName={`${facet ? "disabled" : ""}`}
                  key={`filter-term-${indx}`}
                  label={term.label}
                  id={term.term}
                  name="product-filter-terms"
                  type="checkbox"
                  onChange={(e) => {
                    setFacet({
                      type: "filter",
                      value: { ...term, isSelected: e.target.checked },
                    });
                  }}
                  defaultChecked={term.isSelected}
                />
              )),
              id: "products-facet-terms",
            },
            {
              header: (
                <div className="flex-between w-100">
                  <p className="text-black fw-bold">{t("PRODUCTS")}</p>
                  <div className="d-flex align-items-center">
                    <ButtonMaker
                      block={false}
                      text={t("DELETE")}
                      design="bg-transparent border-0 filter-accordion-header-btn font-14 text-primary"
                      onClick={() =>
                        setFacet({ type: "filter", value: "NONE" })
                      }
                    />
                    <i className="fa-solid fa-chevron-down font-15"></i>
                  </div>
                </div>
              ),
              content: facets.terms?.map((term: any, indx: React.Key) => (
                <SidebarFilterItem
                  containerClassName={`${facet ? "disabled" : ""}`}
                  key={`filter-term-${indx}`}
                  label={term.label}
                  id={term.term}
                  name="product-filter-terms"
                  type="checkbox"
                  onChange={(e) => {
                    setFacet({
                      type: "filter",
                      value: { ...term, isSelected: e.target.checked },
                    });
                  }}
                  defaultChecked={term.isSelected}
                />
              )),
              id: "products-facet-terms",
            },
          ]}
        />
        <h6 className="mx-2 my-2 fw-bold py-2 font-14  header">
          {t("SORT_BY")}
        </h6>
        {facets.sort?.map((term, indx) => (
          <SidebarFilterItem
            containerClassName={`${facet ? "disabled" : ""}`}
            key={`sort-term-${indx}`}
            label={t(term.label)}
            id={term.term}
            name="product-sort-terms"
            type="radio"
            onChange={(e) => {
              setFacet({ type: "sort", value: e.target.id });
            }}
            defaultChecked={term.isSelected}
          />
        ))}

        <AccordionMaker
          defaultOpen={
            facets.terms?.some((x: any) => x.isSelected)
              ? ["products-facet-terms"]
              : undefined
          }
          headerClass="border-bottom-0 p-1"
          items={[
            {
              header: (
                <React.Fragment>
                  <p className="text-black fw-bold">{t("PRICE")}</p>
                  <div className="d-flex align-items-center">
                    <ButtonMaker
                      block={false}
                      text={t("DELETE")}
                      design="bg-transparent border-0 filter-accordion-header-btn font-14 text-primary"
                      onClick={() =>
                        handleSearch({ priceFrom: "0", priceTo: "0" })
                      }
                    />
                    <i className="fa-solid fa-chevron-down font-15"></i>
                  </div>
                </React.Fragment>
              ),
              content: (
                <div>
                  <PriceRange
                    onChange={(from: string, to: string) =>
                      handleSearch({ priceFrom: from, priceTo: to })
                    }
                    defaultRange={{
                      from: facets?.defaultPriceRange?.from || "0",
                      to: facets?.defaultPriceRange?.to || "0",
                    }}
                  />
                </div>
              ),
              id: "products-facet-price-term",
            },
          ]}
        />
      </div>
    </aside>
  );
};

export default SidebarFilter;
