import React from "react";

import { ProductsList } from "@components";

type Props = {
  params: { locale: string; path?: string };
  searchParams: {
    page?: number;
    pageSize?: number;
    filter?: string;
    sort?: string;
    priceFrom?: number;
    priceTo?: string;
    keyword?: string;
  };
};
const Page = ({ params, searchParams }: Props) => {
  return <ProductsList products={undefined} />;
};

export default Page;
