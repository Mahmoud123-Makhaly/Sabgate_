import React from "react";
import {
  Details,
  ProductDetailsHeader,
  ProductInfo,
  RelatedProducts,
} from "@components";
const Page = async ({ params }: { params: { slug: string } }) => {
  const product = { data: {} };
  return (
    <div className="product-details">
      <ProductDetailsHeader />
      <Details product={product?.data} />
      <ProductInfo />
      <RelatedProducts product={product?.data} />
    </div>
  );
};

export default Page;
