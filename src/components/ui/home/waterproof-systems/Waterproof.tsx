import React from "react";
import { Col, Row } from "reactstrap";
import { useTranslate } from "@app/hooks";
import { ButtonMaker, Figure, IconLink } from "@components";
import img1 from "@assets/images/home/waterproof1.png";
import img2 from "@assets/images/home/worker.png";
const Waterproof = () => {
  const t = useTranslate("COMP_Waterproof");
  return (
    <React.Fragment>
      <div className="flex-between col-12 ">
        <h4>{t("WATERPROOFING")}</h4>
        <IconLink
          text={t("SEE_ALL")}
          href={"/list"}
          color="white"
          textColor="primary"
          iconbg="primary"
        />
      </div>
      <div className="flex-between overflow-auto">
        <div className="px-3">
          <Figure
            textBorder
            img={img1}
            text={t("THIN_FILM")}
            textPosition="down"
            textColor="primary"
          />
        </div>
        <div className="px-3">
          <Figure
            textBorder
            img={img1}
            text={t("LIQUID_ISOLATION")}
            textPosition="down"
            textColor="primary"
          />
        </div>
        <div className="px-3">
          <Figure
            textBorder
            img={img2}
            text={t("BITUMEN")}
            textPosition="down"
            textColor="primary"
          />
        </div>
        <div className="px-3">
          <Figure
            textBorder
            img={img1}
            text={t("CEMENT_ISOLATION")}
            textPosition="down"
            textColor="primary"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Waterproof;
