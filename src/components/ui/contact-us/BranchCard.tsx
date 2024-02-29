"use client";
import React from "react";
import Image from "next/image";

import { Link } from "@navigation";
import { useTranslate } from "@app/hooks";

interface BranchCardProps {
  name?: string;
  contactData?: Array<{ imageSrc: string; content: string }>;
  mapLink?: string;
}

const BranchCard = (props: BranchCardProps) => {
  const { name, contactData, mapLink } = props;
  const t = useTranslate("COMP_Contact_Us.BranchCard");
  return (
    <div className="border paddingy-32 paddingx-43 rounded flex-col gap-3">
      <p className="fw-bold font-24 text-center text-primary">{name}</p>
      {contactData?.map((contactData, index) => (
        <div
          className="border flex-start gap-2 w-100 padding-15 rounded"
          key={index}
        >
          <div className="border-end px-2">
            <Image src={contactData.imageSrc} alt="phone" />
          </div>
          <p className="text-muted">{contactData.content}</p>
        </div>
      ))}

      <Link
        href={mapLink || "#"}
        className="border border-primary w-100 text-center paddingy-16 rounded"
      >
        {t("MAP_LINK")}
      </Link>
    </div>
  );
};

export default BranchCard;
