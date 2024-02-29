import React from "react";
import { ImageMaker } from "@components";
import mcc from "@assets/images/construction-guide/mcc.png";
import mobile from "@assets/svgs/construction-guide/mobile.svg";
import web from "@assets/svgs/construction-guide/web.svg";
import mail from "@assets/svgs/construction-guide/mail.svg";
import location from "@assets/svgs/construction-guide/location.svg";
const ConstructionCard = () => {
  return (
    <div className="border paddingy-32 paddingx-43 rounded">
      <div className="border-bottom flex-col">
        <div className="paddingy-16 paddingx-18 w-100">
          <ImageMaker src={mcc} alt="mcc" />
        </div>
        <h5 className="fw-bold text-primary paddingt-16">
          Construction Chemicals
        </h5>
      </div>
      <p className="fw-bold text-center paddingy-16">مواد العزل المائي</p>
      <div className="border paddingy-28 paddingx-19 rounded">
        <div className="d-flex paddingb-22">
          <ImageMaker src={mobile} alt="mobile" />
          <p className="ps-2">+97142558221</p>
        </div>
        <div className="d-flex paddingb-22">
          <ImageMaker src={web} alt="web" />
          <p className="ps-2">www.companyname.com</p>
        </div>
        <div className="d-flex paddingb-22">
          <ImageMaker src={mail} alt="mail" />
          <p className="ps-2">info@sab-uae.com</p>
        </div>
        <div className="d-flex">
          <ImageMaker src={location} alt="location" />
          <p className="ps-2">الامارت العربية المتحدة</p>
        </div>
      </div>
    </div>
  );
};

export default ConstructionCard;
