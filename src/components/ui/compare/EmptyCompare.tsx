"use client";
import React from "react";
import { IconLink, ImageMaker } from "@components";
import empty from "@assets/images/compare/empty.png";
import { Message } from "@components";
import { useTranslate } from "@app/hooks";
const EmptyCompare = () => {
  const t = useTranslate("EMPTY_COMPARISON");
  return (
    <Message
      img={empty}
      text={t("NOT_FOUND")}
      textDesign="font-16"
      btnContent={
        <IconLink text={t("TO_SHOP")} color="orange" href={"/list"} />
      }
    />
  );
};

export default EmptyCompare;
