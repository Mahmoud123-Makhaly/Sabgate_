"use client";

import React, { useEffect, useState } from "react";

import { useTranslate } from "@app/hooks";
import { OffcanvasMaker, PriceRange } from "@components";
import { useRouter } from "@navigation";
import { MobileSort } from "./MobileSort";
import { MobileCategoryFilter } from "./MobileCategoryFilter";
import { MobilePriceFilter } from "./MobilePriceFilter";

const MobileFilter = ({
  facets,
  handleSearch,
  isMobileFilterOpen,
  setIsisMobileFilterOpen,
}: {
  facets: {
    terms?: any | undefined;
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
  setIsisMobileFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileFilterOpen: boolean;
}) => {
  const t = useTranslate("COMP_MobileFilter");

  const [facet, setFacet] = useState<
    { type: "sort" | "filter"; value: any | "NONE" | string } | undefined
  >();
  const router = useRouter();

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

  return (
    <>
      <OffcanvasMaker
        className="rounded mobile-filter"
        isOpen={isMobileFilterOpen}
        offcavasToggler={() => setIsisMobileFilterOpen(false)}
        canvasBody={
          <div>
            <MobileSort sort={facets?.sort} setFacet={setFacet} />

            <MobileCategoryFilter terms={facets.terms} setFacet={setFacet} />
            <MobilePriceFilter
              handleSearch={handleSearch}
              defaultRange={{
                from: facets?.defaultPriceRange?.from || "0",
                to: facets?.defaultPriceRange?.to || "0",
              }}
            />
          </div>
        }
        direction="bottom"
        header={
          <React.Fragment>
            <span className="fw-bold mb-3">{t("FILTRATION")}</span>
            <button
              className="btn btn-white"
              onClick={() => {
                router.push("/list");
              }}
            >
              {t("DELETE_ALL")}
            </button>
          </React.Fragment>
        }
      />
    </>
  );
};

export default MobileFilter;
