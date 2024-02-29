"use client";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { ImageMaker } from "@components";

import linkedin from "@assets/svgs/blog/linkdin.svg";
import facebook from "@assets/svgs/blog/facebook.svg";
import insta from "@assets/svgs/blog/insta.svg";
import x from "@assets/svgs/blog/x.svg";
import youtube from "@assets/svgs/blog/youtube.svg";

interface CompanyCardProps {
  className?: string;
  title?: string;
  shareFrom?: string;
  shareFromImage?: string | StaticImport;
  shareDate?: string;
  description?: string;
}
const CompanyCard = (props: CompanyCardProps) => {
  const {
    className,
    title,
    shareFrom,
    shareFromImage,
    shareDate,
    description,
  } = props;
  return (
    <div className={`${className} paddingy-24 paddingx-35`}>
      <p className="fw-bold text-primary">{title}</p>
      <div className="d-flex paddingy-16">
        {shareFromImage && (
          <div>
            <ImageMaker src={shareFromImage} alt="construction" />
          </div>
        )}
        <div className="paddingx-16">
          <p>مقالة من موقع</p>
          <p className="text-primary fw-bold">{shareFrom}</p>
          <p>{shareDate}</p>
        </div>
      </div>
      <p className="paddingb-24">{description}</p>
      <div className="d-flex paddingx-23 justify-content-between">
        <ImageMaker src={linkedin} alt="linkedin" />
        <ImageMaker src={insta} alt="insta" />
        <ImageMaker src={facebook} alt="facebook" />
        <ImageMaker src={youtube} alt="youtube" />
        <ImageMaker src={x} alt="x" />
      </div>
    </div>
  );
};

export default CompanyCard;
